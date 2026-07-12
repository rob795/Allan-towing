/*
 * FAVICON PLACEHOLDERS
 * =====================
 *
 * The following files should live in this folder (/public/) at deploy time:
 *
 *   favicon.ico              — 32x32 / 48x48 multi-res ICO
 *   favicon-16.png           — 16x16
 *   favicon-32.png           — 32x32
 *   apple-touch-icon.png     — 180x180 (rounded on iOS automatically)
 *   android-chrome-192.png   — 192x192
 *   android-chrome-512.png   — 512x512 (referenced by manifest.json)
 *
 * Generate them all in one shot from a single 512x512 source with
 * https://realfavicongenerator.net/ or:
 *
 *   npm i -g sharp-cli
 *   sharp -i icon-source.png -o favicon-16.png            resize 16
 *   sharp -i icon-source.png -o favicon-32.png            resize 32
 *   sharp -i icon-source.png -o apple-touch-icon.png      resize 180
 *   sharp -i icon-source.png -o android-chrome-192.png    resize 192
 *   sharp -i icon-source.png -o android-chrome-512.png    resize 512
 *   convert favicon-16.png favicon-32.png favicon.ico     # ImageMagick
 *
 * Until real PNGs are dropped in, index.html falls back to an inline
 * SVG data-URI favicon so the browser tab still shows the brand mark.
 */
