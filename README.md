# EXIE — Express Innovation Enterprise

This is the complete static website package for EXIE. The HTML, CSS, JavaScript, and image files are included.

## Important: make photos show on GitHub Pages

1. Download and **extract** this ZIP on your computer. Do not upload the ZIP file itself as the website.
2. Open the extracted folder. You should see `index.html`, `styles.css`, `script.js`, `.nojekyll`, and the `assets` folder together.
3. In your GitHub repository, upload the **contents inside this folder**. Keep the `assets` folder and all its subfolders intact.
4. The repository root should look like this:

   ```text
   index.html
   styles.css
   script.js
   .nojekyll
   assets/
     images/
       exie-logo.png
       exie-hero-american-flag.png
       ...other images...
       pricing/
         single-applicant.jpg
         married-couple.jpg
         child-dependent.jpg
         email-creation.svg
   ```

5. Do not rename image files or change uppercase/lowercase letters. GitHub Pages runs on a case-sensitive server.
6. Go to **Settings → Pages**, choose **Deploy from a branch**, select `main` and `/(root)`, then save. Wait for deployment to finish.
7. Open the published site and hard-refresh it with `Ctrl + F5`.

### If images still do not appear
- Confirm that the repository contains `assets/images/` and its files—not just `index.html`.
- Open a photo directly by adding its relative path to your site URL, for example `assets/images/exie-logo.png`. For a project site, keep the repository path before `assets/`.
- Check the browser developer console/network panel for 404 errors; the missing path usually reveals a folder or filename mismatch.

## Preview locally
Open `index.html` in a browser after extracting the entire ZIP. Keep the `assets` folder beside it.

## Website contents
- `index.html` — page content and navigation
- `styles.css` — layout, responsive styling, and sticky navigation
- `script.js` — navigation behavior and current year
- `assets/images/` — logos, photo studio images, office photos, pricing images, testimonials, and hero background
- `.nojekyll` — disables Jekyll processing for GitHub Pages

## Important service notice
EXIE is an independent private service provider, not a U.S. government agency. DV entry is free when applicants submit it themselves. EXIE's fees are private service charges, and selection or visa approval is not guaranteed. Check current official instructions at https://dvprogram.state.gov/ and https://travel.state.gov/content/travel/en/us-visas/immigrate/diversity-visa-program-entry.html.

This is a static website. It does not process registrations, collect form submissions, or store customer data in a database.
