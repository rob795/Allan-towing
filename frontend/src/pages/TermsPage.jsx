import { Footer } from "@/components/Footer";
import { MobileCallBar } from "@/components/MobileCallBar";
import { SITE_CONFIG } from "@/config/site.config";

export const TermsPage = () => {
    return (
        <main id="main-content" className="min-h-screen bg-white text-brand-text" data-testid="terms-page">
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
                <h1 className="font-heading font-bold uppercase tracking-tight text-3xl sm:text-4xl text-brand-primary">Terms of Service</h1>
                <p className="mt-4 text-brand-text/75 leading-relaxed">
                    These Terms govern use of this website and related service communications.
                    Allan Towing Co. is based in Fontana, California.
                </p>

                <div className="mt-10 space-y-8">
                    <section>
                        <h2 className="font-heading font-bold uppercase text-2xl text-brand-primary">Website Use</h2>
                        <p className="mt-2 text-brand-text/75 leading-relaxed">
                            You agree to use this site lawfully and only for legitimate service requests or informational purposes.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-heading font-bold uppercase text-2xl text-brand-primary">Emergency Service Disclaimer</h2>
                        <p className="mt-2 text-brand-text/75 leading-relaxed">
                            This website supports dispatch communication, but it is not a substitute for emergency public safety services.
                            If immediate danger exists, contact emergency authorities first.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-heading font-bold uppercase text-2xl text-brand-primary">No ETA Guarantee</h2>
                        <p className="mt-2 text-brand-text/75 leading-relaxed">
                            Arrival times are estimates and can change due to traffic, weather, incident load, distance and safety constraints.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-heading font-bold uppercase text-2xl text-brand-primary">Third-party Services</h2>
                        <p className="mt-2 text-brand-text/75 leading-relaxed">
                            This site may rely on third-party tools for analytics, maps, chat and call measurement.
                            Those services operate under their own terms and policies.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-heading font-bold uppercase text-2xl text-brand-primary">Intellectual Property</h2>
                        <p className="mt-2 text-brand-text/75 leading-relaxed">
                            Site content, branding and media are owned by or licensed to Allan Towing Co. and may not be reused without permission.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-heading font-bold uppercase text-2xl text-brand-primary">Liability Limitation</h2>
                        <p className="mt-2 text-brand-text/75 leading-relaxed">
                            To the maximum extent allowed by law, Allan Towing Co. is not liable for indirect or consequential damages arising from site use.
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

export default TermsPage;
