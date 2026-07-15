# Project Overview

## Purpose
Allan Towing Co. is a production-ready local service website template for emergency towing and roadside assistance in Fontana, California. The codebase is designed to convert urgent callers into phone calls, texts, and form submissions.

## Technology Stack
- React 19
- Create React App with CRACO
- Tailwind CSS
- shadcn/ui primitives
- Lucide React icons
- React Router
- TanStack React Query
- Vercel deployment

## Folder Structure
- `frontend/` - React application
- `frontend/src/` - app source, components, config, context, hooks, i18n, lib, pages
- `frontend/public/` - static assets, metadata, icons, OG image, sitemap, robots, llms.txt
- `frontend/plugins/` - optional dev-only health check utilities
- `backend/` - minimal backend placeholder area
- `test_reports/` - QA and iteration outputs
- `tests/` - test harness and support files

## Business Configuration
All business-specific values live in `frontend/src/config/site.config.js`.
That file controls:
- Business name and contact data
- Location and service area
- Brand colors and typography
- Logo, icon, hero, and OG image paths
- SEO titles, descriptions, and canonical URL
- Social profile placeholders
- Tracking placeholder IDs

## Brand Assets
- Full logo exports: `frontend/public/brand/allan-logo-full.webp`, `frontend/public/brand/allan-logo-full.png`
- Header logo exports: `frontend/public/brand/allan-logo-header.webp`, `frontend/public/brand/allan-logo-header.png`
- Source/archive assets are preserved under `frontend/public/brand/source/`
- Mobile/icon mark: `frontend/public/android-chrome-192x192.png`

## Image Assets
- Hero derivatives: `frontend/public/images/hero/allan-fleet-800.avif`, `allan-fleet-1200.avif`, `allan-fleet-1600.avif` and WebP/JPG fallback variants
- OG image: `frontend/public/og/allan-towing-og.jpg`
- Favicons: `frontend/public/favicon.ico`, `favicon-16x16.png`, `favicon-32x32.png`, `apple-touch-icon.png`
- Archived source imagery is preserved under `frontend/public/assets/archive/`

## SEO Architecture
SEO is centralized in `frontend/public/index.html` and `frontend/src/config/site.config.js`.
It includes:
- Title and meta description
- Canonical URL
- Robots and sitemap references
- Open Graph and Twitter Card metadata
- Hreflang support
- JSON-LD for Organization, LocalBusiness, Service, FAQPage, BreadcrumbList, and WebSite
- llms.txt for AI search readability

## Tracking Architecture
Tracking event dispatch is handled in `frontend/src/lib/tracking.js`.
The site pushes events into `window.dataLayer` and preserves backward-compatible aliases for analytics stability.

## Analytics
- GA4, GTM, Meta Pixel, Clarity, CallRail, and GoHighLevel are present as placeholders in `frontend/public/index.html`
- No live IDs are committed by default
- Event names are kept stable through aliases

## Schema
Structured data is embedded in `frontend/public/index.html` as JSON-LD.
The schema supports organization identity, service coverage, FAQ intent, breadcrumbs, and site-level entity discovery.

## Localization
- Language state and translations live in `frontend/src/context/LanguageContext.js` and `frontend/src/i18n/translations.js`
- English and Spanish are supported
- Hreflang is declared in the HTML head and sitemap

## Deployment
- CRA build command: `npm run build`
- Vercel deployment settings: `frontend/vercel.json`
- Cache, security headers, and SPA rewrite rules are configured there

## Production Checklist
- Build succeeds
- Favicons and PWA icons resolve
- Legal routes exist
- Canonical and metadata are consistent
- Schema validates
- Tracking placeholders remain inert until live IDs are added
- No broken asset references in the public HTML

## Future Improvements
- Connect live analytics IDs and call tracking when approved
- Add real review feed integration
- Add additional city landing pages for long-tail local SEO
- Replace archived source imagery with final approved master files if available

## Known Limitations
- Legal and compliance copy is intentionally lightweight and should be reviewed by counsel before scaling paid traffic
- Tracking integrations are placeholders until customer-owned IDs are provided
- Some archived source artwork remains in the repo for future reuse and auditability

## Version History
- v1.0.0 - Production-ready template baseline with localized service messaging, self-hosted assets, legal routes, and release documentation
