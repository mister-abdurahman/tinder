import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import CoreFeature from "@/components/CoreFeature";
import EmailSignup from "@/components/EmailSignup";
import MobileFeatures from "@/components/MobileFeatures";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <CoreFeature />
        <EmailSignup />
        <MobileFeatures />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
