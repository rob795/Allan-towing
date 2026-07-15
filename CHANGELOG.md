# Changelog

All notable changes to this project will be documented in this file.

## [v1.0.0] - 2026-07-14

### Added
- Production-ready homepage for Allan Towing Co.
- Self-hosted hero, brand, favicon, and OG image assets
- Legal routes for Privacy and Terms
- llms.txt, sitemap, robots, manifest, and JSON-LD metadata
- Backward-compatible tracking aliases for event taxonomy stability
- Template and release documentation

### Changed
- Centralized business, brand, and asset configuration in `frontend/src/config/site.config.js`
- Updated metadata and schema for Fontana, California headquarters wording
- Added accessibility improvements including skip link and focus states
- Updated footer legal links to valid routes

### Removed
- Console logging from production-maintenance paths
- Temporary dependency lockfile created during asset tooling installation

### Fixed
- Broken footer legal links
- Inconsistent event naming compatibility
- NAP wording consistency across production metadata surfaces
- Missing production icon and OG asset references

### Known Issues
- Analytics, CallRail, and GoHighLevel remain placeholder-only until customer-owned IDs are connected
- Archived source assets remain intentionally preserved for future reuse
- Legal copy should be reviewed before paid media expansion
