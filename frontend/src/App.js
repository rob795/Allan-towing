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

const Home = () => (
    <main data-testid="home-page">
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
            <div className="App">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="*" element={<Home />} />
                    </Routes>
                </BrowserRouter>
                <Toaster />
            </div>
        </LanguageProvider>
    );
}

export default App;
