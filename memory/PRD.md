# Allan Towing Co. — Landing Page PRD

## Original Problem Statement
Build a premium, ultra-fast, mobile-first emergency landing page for Allan Towing Co. (Fontana, CA).
Primary goal: generate emergency phone calls. Secondary goal: capture leads for GoHighLevel (placeholder only, no backend).

## Architecture
- Frontend-only React SPA (CRA + Craco + Tailwind + Shadcn UI).
- No backend, no MongoDB, no auth.
- Full EN/ES translation via LanguageContext (localStorage persisted, browser-lang default).
- All copy sourced from `src/i18n/translations.js`.

## Core Requirements Delivered
- Sticky dark header with logo, EN/ES toggle, Call Now + Text Us buttons.
- Hero with dark tow-truck background, dark overlay, headline, subhead, CTAs, trust badges, stat strip.
- 6 emergency service cards (Emergency Towing, Flatbed, Jump Start, Lockout, Tire Change, Fuel Delivery) — each is a click-to-call link with per-service tracking.
- Why Choose Us (3 cards).
- Emergency lead form (GHL placeholder, dataLayer event on submit).
- Service Area with embedded Google Map + clickable city list.
- Reviews horizontal-scroll carousel (5 review placeholders).
- FAQ accordion (5 items).
- Final CTA (large yellow call button).
- Footer (phone, email, hours, service area, privacy/terms placeholders).
- Sticky mobile call bar (yellow "Tap to Call" + red "Text").
- Desktop floating chat widget placeholder.
- Locked colors: #111111 / #FFC400 / #D32F2F / #FFFFFF / #F6F6F6 / #1A1A1A.
- Fonts: Oswald headings, Inter body.

## SEO / GEO / AIO
- SEO-heavy `<head>`: title, meta description, keywords, canonical, hreflang (en/es/x-default), robots, geo tags, OG + Twitter cards.
- JSON-LD schemas: Organization, LocalBusiness+AutomotiveBusiness, Service (OfferCatalog), FAQPage, BreadcrumbList, WebSite.
- `/robots.txt` and `/sitemap.xml` published.
- Google Search Console + Bing verification meta tags in place (placeholders).

## Tracking Placeholders (commented in index.html)
GA4, GTM, Google Ads Conversion, Meta Pixel, Microsoft Clarity, CallRail.
- `window.dataLayer` bootstrapped.
- dataLayer events: phone_click, sms_click, emergency_form_submit, review_click, directions_click, map_click, chat_open, service_card_click, language_toggle.

## MOCKED / PLACEHOLDER
- Emergency lead form does NOT post anywhere — it only fires a dataLayer event and shows a local success message. To be wired to GoHighLevel later.
- Floating chat widget is a static panel — the GHL script tag is commented in `index.html` ready to enable.
- All analytics/tracking scripts are commented placeholders.

## Contact Info
- Phone: (909) 278-2226
- Email: info@allantowingco.com
- Hours: 24/7

## Deferred / Next Backlog
- P1: Wire lead form + chat widget to GoHighLevel (add real IDs, uncomment scripts).
- P1: Replace placeholder Google Reviews with real embed / API.
- P2: Add city-specific landing subpages (Rialto, Ontario, Rancho Cucamonga) for local SEO.
- P2: Add real logo asset + favicon.
- P2: Optimise hero image (self-host WebP versions).
