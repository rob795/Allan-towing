# Template Guide

This repository is structured so another local business site can be launched quickly by editing a small number of configuration files and replacing assets.

## Step 1 - Replace Business Name
Edit `frontend/src/config/site.config.js`:
- `business.name`
- `business.shortName`
- `business.legalName`
- `business.tagline`
- `business.description`
- `seo.titleEn`
- `seo.titleEs`
- `seo.descriptionEn`
- `seo.descriptionEs`

## Step 2 - Replace Logo
Replace the logo assets in `frontend/public/brand/`.
Keep the active exports aligned with:
- `assets.logoFullWebp`
- `assets.logoFullPng`
- `assets.logoHeaderWebp`
- `assets.logoHeaderPng`
- `assets.icon`

## Step 3 - Replace Hero
Replace the hero derivatives in `frontend/public/images/hero/` and update the paths in `frontend/src/config/site.config.js`.
The hero is sourced from the centralized `assets.hero` and `heroImage` values.

## Step 4 - Replace Phone
Update `contact.phoneDisplay`, `contact.phoneTel`, and `contact.phoneSms` in `frontend/src/config/site.config.js`.
This will propagate through the UI, schema, and metadata.

## Step 5 - Replace Email
Update `contact.email` in `frontend/src/config/site.config.js`.
Also update any legal page contact text if needed.

## Step 6 - Replace Service Areas
Edit `serviceAreas` in `frontend/src/config/site.config.js`.
This feeds the service area section, footer, schema, and AI-facing summaries.

## Step 7 - Replace Metadata
Edit `frontend/public/index.html` and `frontend/src/config/site.config.js`.
Update:
- title
- description
- canonical
- Open Graph
- Twitter Cards
- hreflang
- manifest name/description if needed

## Step 8 - Replace Schema
Edit the JSON-LD in `frontend/public/index.html`.
Keep the same schema types unless the business model changes.
Update business identity, logo, image, service area, and language fields.

## Step 9 - Replace Social Links
Edit `social` in `frontend/src/config/site.config.js`.
Add the live Google Business Profile, Facebook, Instagram, Yelp, and BBB URLs.

## Step 10 - Deploy
Run the production build and deploy using the existing Vercel setup.
Relevant files:
- `frontend/vercel.json`
- `frontend/package.json`
- `frontend/README.md`

## Configuration Files Involved
- `frontend/src/config/site.config.js`
- `frontend/src/i18n/translations.js`
- `frontend/public/index.html`
- `frontend/public/manifest.json`
- `frontend/public/robots.txt`
- `frontend/public/sitemap.xml`
- `frontend/public/llms.txt`
- `frontend/vercel.json`
- `frontend/tailwind.config.js`
- `frontend/craco.config.js`

## Target Time
A new developer should be able to clone this template for a new client in under one hour by replacing the config values and swapping assets.
