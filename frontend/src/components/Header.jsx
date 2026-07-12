import { Phone, MessageSquare, Menu, X } from "lucide-react";
import { useState } from "react";
import { BUSINESS } from "@/constants/business";
import { useLanguage } from "@/context/LanguageContext";
import { trackEvent, EVENTS } from "@/lib/tracking";

const NavLink = ({ href, children, onClick }) => (
    <a
        href={href}
        onClick={onClick}
        className="font-sans text-sm font-semibold uppercase tracking-wider text-white/80 hover:text-brand-secondary transition-colors"
        data-testid={`nav-${href.replace("#", "")}`}
    >
        {children}
    </a>
);

export const Header = () => {
    const { lang, setLang, t } = useLanguage();
    const [open, setOpen] = useState(false);
    const closeMenu = () => setOpen(false);

    const onCall = () => trackEvent(EVENTS.PHONE_CLICK, { source: "header" });
    const onText = () => trackEvent(EVENTS.SMS_CLICK, { source: "header" });

    return (
        <header
            className="sticky top-0 z-40 bg-brand-primary text-white border-b border-white/10"
            data-testid="site-header"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 md:h-20 items-center justify-between gap-4">
                    {/* Logo */}
                    <a
                        href="#top"
                        className="flex items-center gap-2 shrink-0"
                        data-testid="logo-link"
                    >
                        <span
                            className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-brand-secondary text-brand-primary font-heading font-bold text-lg"
                            aria-hidden="true"
                        >
                            A
                        </span>
                        <span className="font-heading font-bold tracking-tight text-lg md:text-xl uppercase leading-none">
                            <span className="text-white">Allan</span>{" "}
                            <span className="text-brand-secondary">Towing</span>{" "}
                            <span className="text-white/70">Co.</span>
                        </span>
                    </a>

                    {/* Desktop nav */}
                    <nav className="hidden lg:flex items-center gap-8">
                        <NavLink href="#services" onClick={closeMenu}>{t.nav.services}</NavLink>
                        <NavLink href="#why" onClick={closeMenu}>{t.nav.why}</NavLink>
                        <NavLink href="#area" onClick={closeMenu}>{t.nav.area}</NavLink>
                        <NavLink href="#reviews" onClick={closeMenu}>{t.nav.reviews}</NavLink>
                        <NavLink href="#faq" onClick={closeMenu}>{t.nav.faq}</NavLink>
                    </nav>

                    {/* Right actions */}
                    <div className="flex items-center gap-2 md:gap-3">
                        {/* Language toggle */}
                        <div
                            className="hidden sm:flex items-center rounded-full border border-white/20 p-0.5"
                            role="group"
                            aria-label={t.langLabel}
                            data-testid="lang-toggle"
                        >
                            <button
                                onClick={() => setLang("en")}
                                className={`px-2.5 py-1 text-xs font-bold uppercase rounded-full transition-colors ${
                                    lang === "en"
                                        ? "bg-brand-secondary text-brand-primary"
                                        : "text-white/70 hover:text-white"
                                }`}
                                data-testid="lang-en"
                            >
                                EN
                            </button>
                            <button
                                onClick={() => setLang("es")}
                                className={`px-2.5 py-1 text-xs font-bold uppercase rounded-full transition-colors ${
                                    lang === "es"
                                        ? "bg-brand-secondary text-brand-primary"
                                        : "text-white/70 hover:text-white"
                                }`}
                                data-testid="lang-es"
                            >
                                ES
                            </button>
                        </div>

                        <a
                            href={`sms:${BUSINESS.phoneSms}`}
                            onClick={onText}
                            className="hidden md:inline-flex items-center gap-2 h-11 px-4 rounded-full border border-white/30 text-white font-bold text-sm uppercase tracking-wider hover:bg-white/10 transition-colors"
                            data-testid="header-text-button"
                        >
                            <MessageSquare className="h-4 w-4" />
                            {t.nav.text}
                        </a>
                        <a
                            href={`tel:${BUSINESS.phoneTel}`}
                            onClick={onCall}
                            className="inline-flex items-center gap-2 h-11 px-4 md:px-5 rounded-full bg-brand-secondary text-brand-primary font-bold text-sm uppercase tracking-wider hover:brightness-95 active:brightness-90 transition-all whitespace-nowrap"
                            data-testid="header-call-button"
                            aria-label={`Call ${BUSINESS.phone}`}
                        >
                            <Phone className="h-4 w-4" />
                            <span className="hidden sm:inline">{t.nav.call}</span>
                            <span className="sm:hidden">Call</span>
                        </a>

                        {/* Mobile menu toggle */}
                        <button
                            className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white"
                            onClick={() => setOpen((v) => !v)}
                            aria-label="Toggle menu"
                            data-testid="mobile-menu-toggle"
                        >
                            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </button>
                    </div>
                </div>

                {/* Mobile menu */}
                {open && (
                    <div
                        className="lg:hidden pb-4 flex flex-col gap-3 border-t border-white/10 pt-4"
                        data-testid="mobile-menu"
                    >
                        <NavLink href="#services" onClick={closeMenu}>{t.nav.services}</NavLink>
                        <NavLink href="#why" onClick={closeMenu}>{t.nav.why}</NavLink>
                        <NavLink href="#area" onClick={closeMenu}>{t.nav.area}</NavLink>
                        <NavLink href="#reviews" onClick={closeMenu}>{t.nav.reviews}</NavLink>
                        <NavLink href="#faq" onClick={closeMenu}>{t.nav.faq}</NavLink>
                        <div className="flex items-center gap-2 pt-2 sm:hidden">
                            <button
                                onClick={() => setLang("en")}
                                className={`flex-1 h-10 rounded-full text-xs font-bold uppercase border border-white/20 ${
                                    lang === "en"
                                        ? "bg-brand-secondary text-brand-primary"
                                        : "text-white"
                                }`}
                                data-testid="lang-en-mobile"
                            >
                                English
                            </button>
                            <button
                                onClick={() => setLang("es")}
                                className={`flex-1 h-10 rounded-full text-xs font-bold uppercase border border-white/20 ${
                                    lang === "es"
                                        ? "bg-brand-secondary text-brand-primary"
                                        : "text-white"
                                }`}
                                data-testid="lang-es-mobile"
                            >
                                Español
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};
