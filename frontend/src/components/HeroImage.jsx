import { SITE_CONFIG } from "@/config/site.config";

/**
 * HeroImage
 * ---------------------------------------------------------------------------
 * Responsive, LCP-optimised hero background. Uses <picture> with modern
 * source formats (AVIF -> WebP -> JPG) and eager loading with fetchPriority=high.
 *
 * TO REPLACE THE HERO IMAGE:
 *   1. Drop these files into  /app/frontend/public/images/hero/  :
 *         hero-800.avif   hero-1200.avif   hero-1600.avif
 *         hero-800.webp   hero-1200.webp   hero-1600.webp
 *         hero-800.jpg    hero-1200.jpg    hero-1600.jpg
 *      All should be the SAME crop / aspect (16:9 recommended, 1600x900).
 *   2. That's it — this component picks them up automatically.
 *   3. Also update  <link rel="preload">  in /public/index.html if you rename.
 *
 * See /public/images/hero/README.md for optimisation recipe (squoosh / sharp).
 * ---------------------------------------------------------------------------
 */
export const HeroImage = ({ className = "" }) => {
    const { avif, webp, jpg, fallback, alt, width, height } =
        SITE_CONFIG.heroImage;

    // Derive size variants from the base path (hero-1600.jpg -> hero-800.jpg etc.)
    const variants = (path, size) => path.replace(/-\d+\./, `-${size}.`);

    const avifSet = `${variants(avif, 800)} 800w, ${variants(avif, 1200)} 1200w, ${avif} 1600w`;
    const webpSet = `${variants(webp, 800)} 800w, ${variants(webp, 1200)} 1200w, ${webp} 1600w`;
    const jpgSet = `${variants(jpg, 800)} 800w, ${variants(jpg, 1200)} 1200w, ${jpg} 1600w`;

    // Use fallback CDN URL until local files exist. When you drop real files
    // into /public/images/hero/, remove the `onError` fallback below.
    const handleFallback = (e) => {
        if (e.currentTarget.src !== fallback) {
            e.currentTarget.src = fallback;
            e.currentTarget.removeAttribute("srcset");
        }
    };

    return (
        <picture>
            <source
                type="image/avif"
                srcSet={avifSet}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            />
            <source
                type="image/webp"
                srcSet={webpSet}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            />
            <img
                src={jpg}
                srcSet={jpgSet}
                sizes="(max-width: 768px) 100vw, 100vw"
                alt={alt}
                width={width}
                height={height}
                loading="eager"
                fetchpriority="high"
                decoding="async"
                onError={handleFallback}
                className={className}
            />
        </picture>
    );
};

export default HeroImage;
