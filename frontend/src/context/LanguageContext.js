import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { translations } from "@/i18n/translations";
import { trackEvent, EVENTS } from "@/lib/tracking";

const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
    const [lang, setLang] = useState(() => {
        if (typeof window === "undefined") return "en";
        const stored = window.localStorage.getItem("atc_lang");
        if (stored === "en" || stored === "es") return stored;
        const browser = (window.navigator.language || "en").toLowerCase();
        return browser.startsWith("es") ? "es" : "en";
    });

    useEffect(() => {
        if (typeof document !== "undefined") {
            document.documentElement.lang = lang;
        }
        try {
            window.localStorage.setItem("atc_lang", lang);
        } catch (_e) {
            // ignore storage errors
        }
    }, [lang]);

    const toggleLang = (next) => {
        const target = next || (lang === "en" ? "es" : "en");
        setLang(target);
        trackEvent(EVENTS.LANG_TOGGLE, { language: target });
    };

    const value = useMemo(
        () => ({ lang, setLang: toggleLang, t: translations[lang] }),
        [lang],
    );

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const ctx = useContext(LanguageContext);
    if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
    return ctx;
};
