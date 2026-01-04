function normalizeUrl(input) {
  input = input.trim();
  input = input.replace(/\/+$/, "");

  if (!input.startsWith("http://") && !input.startsWith("https://")) {
    input = "https://" + input;
  }

  return input;
}

function copyUsername(text, btn) {
  navigator.clipboard.writeText(text).then(() => {
    const oldText = btn.textContent;
    btn.textContent = "Copied";
    setTimeout(() => {
      btn.textContent = oldText;
    }, 1200);
  });
}

function fetchUsers() {
  const input = document.getElementById("siteUrl").value;
  const resultDiv = document.getElementById("result");

  resultDiv.innerHTML = "";

  if (!input.trim()) {
    resultDiv.innerHTML = "Please enter a website URL";
    return;
  }

  const baseUrl = normalizeUrl(input);
  const apiUrl = baseUrl + "/wp-json/wp/v2/users/";

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error("API blocked");
      }
      return response.json();
    })
    .then(data => {
      if (!Array.isArray(data) || data.length === 0) {
        resultDiv.innerHTML = "No public users found";
        return;
      }

      data.forEach(user => {
        if (user.slug) {
          const row = document.createElement("div");
          row.className = "username-row";

          const name = document.createElement("span");
          name.textContent = user.slug;

          const copyBtn = document.createElement("span");
          copyBtn.className = "copy-btn";
          copyBtn.textContent = "Copy";
          copyBtn.onclick = () => copyUsername(user.slug, copyBtn);

          row.appendChild(name);
          row.appendChild(copyBtn);
          resultDiv.appendChild(row);
        }
      });
    })
    .catch(() => {
      resultDiv.innerHTML =
        "Failed to fetch users. REST API blocked or not a WordPress site.";
    });
}
