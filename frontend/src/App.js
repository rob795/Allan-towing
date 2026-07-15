import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/context/LanguageContext";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { LeadForm } from "@/components/LeadForm";
import { ServiceArea } from "@/components/ServiceArea";
import { Reviews } from "@/components/Reviews";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { MobileCallBar } from "@/components/MobileCallBar";
import { FloatingChat } from "@/components/FloatingChat";
import { Toaster } from "@/components/ui/sonner";
import { PrivacyPage } from "@/pages/PrivacyPage";
import { TermsPage } from "@/pages/TermsPage";

const Home = () => (
    <main id="main-content" tabIndex="-1" data-testid="home-page">
        <Header />
        <Hero />
        <Services />
        <WhyChooseUs />
        <LeadForm />
        <ServiceArea />
        <Reviews />
        <FAQ />
        <FinalCTA />
        <Footer />
        <MobileCallBar />
        <FloatingChat />
    </main>
);

function App() {
    return (
        <LanguageProvider>
            <a href="#main-content" className="skip-link">
                Skip to main content
            </a>
            <div className="App">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/privacy" element={<PrivacyPage />} />
                        <Route path="/terms" element={<TermsPage />} />
                        <Route path="*" element={<Home />} />
                    </Routes>
                </BrowserRouter>
                <Toaster />
            </div>
        </LanguageProvider>
    );
}

export default App;
