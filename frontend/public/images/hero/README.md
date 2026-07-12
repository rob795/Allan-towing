# Hero Image Assets

Drop the following files into this folder to replace the fallback Unsplash hero:

```
hero-800.avif    hero-800.webp    hero-800.jpg
hero-1200.avif   hero-1200.webp   hero-1200.jpg
hero-1600.avif   hero-1600.webp   hero-1600.jpg
```

## Rules

- **Aspect ratio:** 16:9 (1600×900, 1200×675, 800×450).
- **Subject:** Tow truck / flatbed on a dark urban street at dusk or night, plenty of negative space on the LEFT half (headline sits there).
- **Color grade:** slightly desaturated, cool shadows — the site applies a dark overlay so a busy image still looks good.
- **File size targets (per file):**
  - AVIF: ≤ 60 KB (1600w) / ≤ 35 KB (1200w) / ≤ 18 KB (800w)
  - WebP: ≤ 90 KB / 50 KB / 25 KB
  - JPG : ≤ 140 KB / 80 KB / 40 KB

## Recipe (using [`sharp-cli`](https://github.com/vseventer/sharp-cli))

```bash
npm i -g sharp-cli

# starting from hero-original.jpg (2400+ wide)
for w in 800 1200 1600; do
  sharp -i hero-original.jpg -o hero-${w}.jpg  resize $w
  sharp -i hero-original.jpg -o hero-${w}.webp resize $w -- --quality 82
  sharp -i hero-original.jpg -o hero-${w}.avif resize $w -- --quality 55
done
```

Or use https://squoosh.app for a GUI.

Once files are in place, `<HeroImage />` picks them up automatically. You can
also delete the `onError` fallback in `/src/components/HeroImage.jsx` since
the CDN placeholder will no longer be needed.
