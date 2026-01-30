import Navbar from "@/components/Navbar";
import IntroSection from "@/components/IntroSection";
import HeroSection from "@/components/HeroSection";
import ExcellenceSection from "@/components/ExcellenceSection";
import ServicesSection from "@/components/ServicesSection";
import TapiocaHighlight from "@/components/TapiocaHighlight";
import AboutSection from "@/components/AboutSection";
import AchievementsSection from "@/components/AchievementsSection";
import ProductsSection from "@/components/ProductsSection";
import NewsAuctionSection from "@/components/NewsAuctionSection";
import StartUsingSection from "@/components/StartUsingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <IntroSection />
      <HeroSection />
      <ExcellenceSection />
      <ServicesSection />
      <TapiocaHighlight />
      <AboutSection />
      <AchievementsSection />
      <ProductsSection />
      <NewsAuctionSection />
      <StartUsingSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;