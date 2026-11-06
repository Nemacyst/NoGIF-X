# 🚫 NoGIF X

**A lightweight Chrome extension that hides GIFs on [x.com](https://x.com) and twitter.com with a click-to-show placeholder.**

> Keep your timeline cleaner by hiding GIFs until you explicitly want to see them.

[![Chrome](https://img.shields.io/badge/Chrome-Extension-blue?logo=googlechrome&style=for-the-badge)](https://chromewebstore.google.com)
[![Brave](https://img.shields.io/badge/Brave-Extension-orange?logo=brave&style=for-the-badge)](https://chromewebstore.google.com)

---

## ✨ Features

- 🚫 Automatically hides GIFs on x.com and twitter.com
- 👆 Shows a clean “GIF hidden – click to show” placeholder
- 🔄 Works with infinite scroll (MutationObserver)
- 🔒 100% local – no data is collected or sent anywhere
- 🎨 Simple and lightweight

## 📦 Installation (Developer Mode)

1. Clone the repository or download it as a ZIP.
2. Go to `chrome://extensions` in Chrome.
3. Enable **Developer mode** in the top right.
4. Click **Load unpacked** and select the **root folder** of this repository (where `manifest.json` is located).
5. The extension will appear in the toolbar (pin it if needed).

> **Tip:** Works on both `https://x.com/*` and `https://twitter.com/*`.

## 💻 Usage

1. Install the extension.
2. Visit x.com or twitter.com.
3. GIFs are automatically replaced with a placeholder.
4. Click the placeholder to reveal the GIF.

## 🛠️ How It Works

The extension detects GIF elements (including X’s `tweet_video` GIFs as well as Tenor/Giphy images) and replaces their container with a clickable placeholder.

Detection is based on source URLs and element types. Since X can change its markup, the logic is intentionally conservative.

## 🔒 Privacy

- Everything runs locally in the browser.
- No data is collected, stored, or transmitted.
- The extension only has access to x.com and twitter.com.

## 📸 Screenshot

![GIF placeholder](screenshots/placeholder.png)

*GIF hidden – click to show*


## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

**Unofficial community tool** – not affiliated with X Corp.
