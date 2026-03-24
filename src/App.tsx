import Hero from "./components/Hero";
import Awareness from "./components/Awareness";
import Identification from "./components/Identification";
import Insight from "./components/Insight";
import CTASection from "./components/CTASection";
import PreForm from "./components/PreForm";
import FormSection from "./components/FormSection";
import FinalRegistration from "./components/FinalRegistration";
import Footer from "./components/Footer";
import ChatbotButton from "./components/ChatbotButton";

export default function App() {
  return (
    <main className="relative min-h-screen bg-dark selection:bg-gold selection:text-dark">
      {/* Fixed Background Image for the whole page */}
      <div className="fixed inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1504457047772-27faf1c00561?q=80&w=2070&auto=format&fit=crop" 
          alt="Ha Long Bay Aerial Background" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        {/* Removed dark overlay as requested */}
      </div>

      <div className="relative z-10">
        <Hero />
        <Awareness />
        <Identification />
        <Insight />
        <CTASection />
        <PreForm />
        <FormSection />
        <FinalRegistration />
        <Footer />
      </div>

      <ChatbotButton />
    </main>
  );
}
