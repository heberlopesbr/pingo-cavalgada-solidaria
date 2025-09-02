import HeroSection from "@/components/HeroSection";
import AboutEvent from "@/components/AboutEvent";
import ContactSection from "@/components/ContactSection";
import RegistrationForm from "@/components/RegistrationForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutEvent />
      <ContactSection />
      <div id="registration">
        <RegistrationForm />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
