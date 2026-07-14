import { SITE_CONFIG } from "@/config/site.config";

/**
 * HeroImage
 * ---------------------------------------------------------------------------
 * Responsive, LCP-optimised hero background. Uses <picture> with modern
 * source formats (AVIF -> WebP -> JPG) and eager loading with fetchPriority=high.
 *
 * TO REPLACE THE HERO IMAGE:
 *   1. Drop these files into  /app/frontend/public/images/hero/  :
 *         allan-fleet-800.avif   allan-fleet-1200.avif   allan-fleet-1600.avif
 *         allan-fleet-800.webp   allan-fleet-1200.webp   allan-fleet-1600.webp
 *         allan-fleet-fallback.jpg
 *      All should be the SAME crop / aspect (16:9 recommended, 1600x900).
 *   2. That's it — this component picks them up automatically.
 *   3. Also update  <link rel="preload">  in /public/index.html if you rename.
 *
 * See /public/images/hero/README.md for optimisation recipe (squoosh / sharp).
 * ---------------------------------------------------------------------------
 */
export const HeroImage = ({ className = "" }) => {
    const { hero } = SITE_CONFIG.assets;

    return (
        <picture>
            <source
                type="image/avif"
                srcSet={`${hero.avif800} 800w, ${hero.avif1200} 1200w, ${hero.avif1600} 1600w`}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            />
            <source
                type="image/webp"
                srcSet={`${hero.webp800} 800w, ${hero.webp1200} 1200w, ${hero.webp1600} 1600w`}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            />
            <img
                src={hero.fallbackJpg}
                sizes="(max-width: 768px) 100vw, 100vw"
                alt={hero.alt}
                width={hero.width}
                height={hero.height}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className={className}
            />
        </picture>
    );
};

export default HeroImage;
