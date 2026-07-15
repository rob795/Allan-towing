import { Phone, Mail, Clock, MapPin } from "lucide-react";
import { BUSINESS } from "@/constants/business";
import { SITE_CONFIG } from "@/config/site.config";
import { useLanguage } from "@/context/LanguageContext";

export const Footer = () => {
    const { t } = useLanguage();
    return (
        <footer
            className="bg-black text-white/80 pt-14 pb-24 md:pb-10"
            data-testid="site-footer"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="col-span-2 md:col-span-1">
                        <div className="flex items-center mb-3">
                            <picture>
                                <source
                                    srcSet={`${SITE_CONFIG.assets.logoNavbarWebp} 1x, ${SITE_CONFIG.assets.logoNavbarWebp2x} 2x`}
                                    type="image/webp"
                                />
                                <img
                                    src={SITE_CONFIG.assets.logoNavbarPng}
                                    srcSet={`${SITE_CONFIG.assets.logoNavbarPng} 1x, ${SITE_CONFIG.assets.logoNavbarPng2x} 2x`}
                                    alt="Allan Towing Co."
                                    width="189"
                                    height="88"
                                    className="h-10 md:h-11 w-auto object-contain"
                                    loading="eager"
                                    decoding="async"
                                />
                            </picture>
                        </div>
                        <p className="text-sm leading-relaxed text-white/60 max-w-xs">
                            {t.footer.tagline}
                        </p>
                    </div>

                    <div>
                        <h4 className="font-heading font-bold uppercase text-white text-sm tracking-wider mb-3">
                            {t.footer.contact}
                        </h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a
                                    href={`tel:${BUSINESS.phoneTel}`}
                                    className="flex items-center gap-2 hover:text-brand-secondary"
                                    data-testid="footer-phone"
                                >
                                    <Phone className="h-4 w-4" /> {BUSINESS.phone}
                                </a>
                            </li>
                            <li>
                                <a
                                    href={`mailto:${BUSINESS.email}`}
                                    className="flex items-center gap-2 hover:text-brand-secondary"
                                    data-testid="footer-email"
                                >
                                    <Mail className="h-4 w-4" /> {BUSINESS.email}
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <Clock className="h-4 w-4" /> {t.footer.hoursValue}
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-heading font-bold uppercase text-white text-sm tracking-wider mb-3">
                            {t.footer.areas}
                        </h4>
                        <ul className="space-y-1.5 text-sm">
                            {BUSINESS.serviceAreas.map((c) => (
                                <li key={c} className="flex items-center gap-2">
                                    <MapPin className="h-3.5 w-3.5 text-brand-secondary" />
                                    {c}, CA
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-heading font-bold uppercase text-white text-sm tracking-wider mb-3">
                            {t.footer.legal}
                        </h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a
                                    href="/privacy"
                                    className="hover:text-brand-secondary"
                                    data-testid="footer-privacy"
                                >
                                    {t.footer.privacy}
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/terms"
                                    className="hover:text-brand-secondary"
                                    data-testid="footer-terms"
                                >
                                    {t.footer.terms}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-3 text-xs text-white/50">
                    <p>
                        © {new Date().getFullYear()} Allan Towing Co. {t.footer.rights}
                    </p>
                    <p>Fontana, CA • Inland Empire • San Bernardino County</p>
                </div>
            </div>
        </footer>
    );
};
