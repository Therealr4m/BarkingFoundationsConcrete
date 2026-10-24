# Barking Foundations Concrete — logo + favicon update

Source: Aaron's exported `abid-sites-3` branch (`Barking_Source_Code.zip`).

## Changes
- Adds supplied builder/house purple artwork beside the existing brand name in the header on **all 44 HTML pages**.
- Adds favicon ICO, 32x32 PNG, and iPhone/iPad 180x180 touch icon references on all pages.
- Appends isolated responsive logo rules to `styles.css`. No existing CSS selectors/declarations were deleted.
- Includes a WebP logo and optional PNG original in `branding-assets/`.

## Preserved
- All original headings, visible copy, metadata, canonical URLs, navigation links, page and folder names, JavaScript and original images.
- Existing header brand link `/index.html`, with decorative image `alt=""` to avoid repeated screen reader announcements.

## Install (VS Code PowerShell)
1. Open the cloned repository and ensure you are on `abid-sites-3`, with a clean working tree.
2. Download this update ZIP and **locate its actual saved path** (don't assume Downloads).
3. Extract into the repository root, preserving the `blogs/`, `locations/`, `services/` and `branding-assets/` folders, using `Expand-Archive -LiteralPath <full-zip-path> -DestinationPath (Get-Location).Path -Force`.
4. Review `git status` / `git diff --stat` and preview `index.html`, `contact.html`, one blog, one service and one location page via Live Server.
5. Verify logo layout at mobile and desktop sizes and browser favicon. Commit and push **only after** review.

## Notes
- This ZIP includes ONLY the files that changed, not the original 20+ MB photo library.
- On GitHub Pages deployed to the repository's root/custom domain, root-relative paths work. If served from a project subpath instead, adjust asset URLs or configure a base path.
- The site uses a fixed header, so review the header's vertical space in mobile and desktop previews.
