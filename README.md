# WordPress Username Finder Tool

A free, static, SEO friendly web tool to find **publicly accessible WordPress usernames** using the official WordPress REST API.

This tool works without login, backend, or server and can be hosted on **GitHub Pages** or any static hosting.

---

## 🔍 What does this tool do?

The tool checks whether a WordPress website exposes user data via the REST API endpoint: /wp-json/wp/v2/users/


If the endpoint is publicly accessible, it extracts and displays the **username (slug)** values.

---

## ⚙️ Features

- Works with any WordPress website
- Automatically handles URLs:
  - `domain.com`
  - `www.domain.com`
  - `http://domain.com`
  - `https://domain.com`
- No backend required
- Fully static HTML, CSS, JavaScript
- Copy username button
- SEO optimized layout
- Mobile responsive
- GitHub Pages ready

---

## 🛠️ How it works

1. User enters a website URL
2. Tool normalizes the URL
3. Appends WordPress REST API path
4. Fetches user data
5. Extracts `slug` values
6. Displays usernames with copy option

## 📁 Project Structure

```text
wp-username-finder/
│
├── index.html
├── style.css
├── script.js
├── robots.txt
├── sitemap.xml
└── README.md
```
---

## 🚀 Live Demo

If hosted on GitHub Pages, the tool will be available at:
https://baradatipu.github.io/wordpress-username-finder/

---

## 📦 Installation and Usage

### Option 1: GitHub Pages

1. Fork or clone the repository
2. Push files to GitHub
3. Go to **Settings → Pages**
4. Enable Pages from `main` branch
5. Open the generated URL

### Option 2: Local Usage

Simply open `index.html` in any modern browser.

---

## 🔐 Is this legal and safe?

Yes.

- The tool only reads **publicly available data**
- It does not bypass authentication
- It does not brute force or scan private endpoints
- It respects WordPress REST API behavior

---

## ❗ Limitations

- Will not work if:
  - REST API is disabled
  - User enumeration is blocked
  - Site is not WordPress
- Some hosts restrict cross origin requests

---

## 👥 Who should use this?

- Developers
- Website owners
- Security testers
- SEO professionals
- WordPress administrators

---

## 📈 SEO Notes

This project is optimized for:
- Google Search
- Bing
- DuckDuckGo
- GitHub repository search

Includes:
- Proper meta tags
- Semantic HTML
- Schema markup
- Sitemap
- Robots file

---

## 🧩 Future Enhancements

- Bulk domain checker
- HTTPS fallback to HTTP
- Export usernames as TXT or CSV
- WordPress auto detection
- Admin username risk indicator
- Dark hacker style UI

---

## 📜 License

This project is released under the MIT License.

You are free to use, modify, and distribute it.

---

## ⭐ Support

If you find this project useful:
- Star the repository
- Share it with others
- Contribute improvements

Happy building 🚀

---
