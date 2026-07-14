import { Footer } from "@/components/Footer";
import { MobileCallBar } from "@/components/MobileCallBar";
import { SITE_CONFIG } from "@/config/site.config";

export const PrivacyPage = () => {
    return (
        <main id="main-content" className="min-h-screen bg-white text-brand-text" data-testid="privacy-page">
            <header className="sticky top-0 z-40 bg-brand-primary text-white border-b border-white/10">
                <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <a href="/" className="flex items-center gap-2.5" aria-label="Go to home">
                        <img
                            src={SITE_CONFIG.assets.icon}
                            alt=""
                            aria-hidden="true"
                            width="36"
                            height="36"
                            className="h-9 w-9 rounded-md object-contain"
                            loading="eager"
                            decoding="async"
                        />
                        <span className="font-heading font-bold tracking-tight text-lg uppercase leading-none">
                            <span className="text-white">Allan</span>{" "}
                            <span className="text-brand-secondary">Towing</span>{" "}
                            <span className="text-white/70">Co.</span>
                        </span>
                    </a>
                    <a href={`tel:${SITE_CONFIG.contact.phoneTel}`} className="inline-flex items-center h-10 px-4 rounded-full bg-brand-secondary text-brand-primary font-bold text-sm uppercase tracking-wider">
                        Call Now
                    </a>
                </div>
            </header>

            <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                <h1 className="font-heading font-bold uppercase tracking-tight text-3xl sm:text-4xl text-brand-primary">Privacy Policy</h1>
                <p className="mt-4 text-brand-text/75 leading-relaxed">
                    This Privacy Policy explains how Allan Towing Co. handles personal information when you use this website.
                    Allan Towing Co. is headquartered in Fontana, California.
                </p>

                <div className="mt-10 space-y-8">
                    <section>
                        <h2 className="font-heading font-bold uppercase text-2xl text-brand-primary">Cookies</h2>
                        <p className="mt-2 text-brand-text/75 leading-relaxed">
                            We may use cookies and similar technologies to support core site functionality and improve service quality.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-heading font-bold uppercase text-2xl text-brand-primary">Analytics</h2>
                        <p className="mt-2 text-brand-text/75 leading-relaxed">
                            Analytics and measurement tools may be enabled to understand traffic and improve customer experience.
                            Placeholder integrations are present and can be activated in production.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-heading font-bold uppercase text-2xl text-brand-primary">Contact Forms</h2>
                        <p className="mt-2 text-brand-text/75 leading-relaxed">
                            If you submit a contact request, we may collect details such as name, phone, location and service notes to coordinate assistance.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-heading font-bold uppercase text-2xl text-brand-primary">SMS Consent</h2>
                        <p className="mt-2 text-brand-text/75 leading-relaxed">
                            By texting or requesting text communication, you consent to receive service-related SMS messages.
                            Message and data rates may apply depending on your carrier.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-heading font-bold uppercase text-2xl text-brand-primary">Call Tracking</h2>
                        <p className="mt-2 text-brand-text/75 leading-relaxed">
                            Call interactions may be measured for service quality, dispatch coordination and performance reporting.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-heading font-bold uppercase text-2xl text-brand-primary">Google Maps</h2>
                        <p className="mt-2 text-brand-text/75 leading-relaxed">
                            This website embeds Google Maps to help users find service coverage and directions.
                            Google may collect usage data according to its own privacy terms.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-heading font-bold uppercase text-2xl text-brand-primary">Third-party Services</h2>
                        <p className="mt-2 text-brand-text/75 leading-relaxed">
                            The site can connect to third-party analytics, advertising, chat and call services.
                            Each provider is responsible for its own data handling practices.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-heading font-bold uppercase text-2xl text-brand-primary">User Rights</h2>
                        <p className="mt-2 text-brand-text/75 leading-relaxed">
                            You may request access, correction or deletion of personal data we hold, subject to legal and operational obligations.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-heading font-bold uppercase text-2xl text-brand-primary">Contact</h2>
                        <p className="mt-2 text-brand-text/75 leading-relaxed">
                            Email: <a className="text-brand-primary font-semibold" href={`mailto:${SITE_CONFIG.contact.email}`}>{SITE_CONFIG.contact.email}</a><br />
                            Phone: <a className="text-brand-primary font-semibold" href={`tel:${SITE_CONFIG.contact.phoneTel}`}>{SITE_CONFIG.contact.phoneDisplay}</a>
                        </p>
                    </section>
                </div>
            </section>

            <Footer />
            <MobileCallBar />
        </main>
    );
};

export default PrivacyPage;
