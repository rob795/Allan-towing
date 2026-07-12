import { Star, Quote } from "lucide-react";
import { useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { trackEvent, EVENTS } from "@/lib/tracking";

export const Reviews = () => {
    const { t } = useLanguage();
    const scrollRef = useRef(null);

    return (
        <section
            id="reviews"
            className="bg-brand-light py-16 md:py-24"
            data-testid="reviews-section"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8 md:mb-12">
                    <div className="max-w-2xl">
                        <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand-accent mb-3">
                            {t.reviews.eyebrow}
                        </span>
                        <h2 className="font-heading font-bold uppercase tracking-tight text-3xl sm:text-4xl lg:text-5xl text-brand-primary leading-[1.05]">
                            {t.reviews.title}
                        </h2>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-0.5">
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    className="h-5 w-5 fill-brand-secondary text-brand-secondary"
                                />
                            ))}
                        </div>
                        <span className="font-heading font-bold text-2xl text-brand-primary">
                            5.0
                        </span>
                        <span className="text-sm text-brand-text/60">
                            Google Reviews
                        </span>
                    </div>
                </div>

                <div
                    ref={scrollRef}
                    className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-4 -mx-4 px-4"
                    data-testid="reviews-carousel"
                >
                    {t.reviews.list.map((r, i) => (
                        <a
                            key={i}
                            href="https://www.google.com/search?q=Allan+Towing+Co+Fontana+reviews"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() =>
                                trackEvent(EVENTS.REVIEW_CLICK, { index: i })
                            }
                            className="snap-start shrink-0 w-[300px] sm:w-[360px] rounded-2xl bg-white border-2 border-brand-primary shadow-brutal p-6 md:p-7 hover:-translate-y-1 transition-transform"
                            data-testid={`review-${i}`}
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-0.5">
                                    {[...Array(r.rating)].map((_, j) => (
                                        <Star
                                            key={j}
                                            className="h-4 w-4 fill-brand-secondary text-brand-secondary"
                                        />
                                    ))}
                                </div>
                                <Quote className="h-6 w-6 text-brand-primary/15" />
                            </div>
                            <p className="text-brand-text/85 text-[15px] leading-relaxed">
                                “{r.text}”
                            </p>
                            <div className="mt-5 pt-4 border-t border-brand-primary/10">
                                <p className="font-bold text-brand-primary text-sm">
                                    {r.name}
                                </p>
                                <p className="text-xs text-brand-text/60">{r.city}</p>
                            </div>
                        </a>
                    ))}
                </div>
                <p className="text-xs text-brand-text/50 mt-4">
                    Google Reviews carousel — placeholder. Real reviews will sync when
                    connected to Google Business Profile.
                </p>
            </div>
        </section>
    );
};
