# EXIE — Express Innovation Enterprise

A responsive, static carousel-style website for EXIE. Visitors view one main information page at a time and use **Back**, **Next page**, the page dots, or the hamburger menu to navigate.

## Files
- `index.html` — website content and carousel page structure
- `styles.css` — responsive styling for desktop and mobile
- `script.js` — carousel, hamburger menu, page progress, and keyboard navigation
- Image files (`*.jpg`, `*.png`) — stored beside `index.html` so GitHub Pages can load them with simple relative paths

## Publish with GitHub Pages
1. Extract this ZIP.
2. Upload the **contents** of the extracted folder to the root of your GitHub repository. Do not upload only the ZIP file and do not place `index.html` inside an extra nested folder.
3. Confirm that `index.html`, `styles.css`, `script.js`, and all image files appear together at repository root.
4. In GitHub, open **Settings → Pages**, choose **Deploy from a branch**, select `main` and `/(root)`, and save.
5. Wait for GitHub Pages to finish publishing, then hard-refresh the live site (Ctrl+F5 on Windows).

## Image troubleshooting
Open `check-images.html` on the published site to test the image files. Paths in the website are relative (for example, `./exie-logo.png`), which supports project sites hosted under a GitHub repository path.

## Notes
- This is a static front-end website. It has no customer database or server-side registration form.
- EXIE is described as an independent private service provider, not a U.S. government agency. No selection or visa approval is guaranteed.
- Confirm any prices and the explanation of the additional US$2.00 amounts before publishing them as final.


Homepage refresh: the cover now uses EXIE logo colors (blue/cyan/green) and a transparent EXIE logo watermark. Keep `exie-logo-watermark.png` alongside `index.html` and `styles.css` when uploading to GitHub Pages.
