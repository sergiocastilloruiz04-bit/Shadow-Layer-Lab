import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import PricingSection from "@/components/PricingSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <ProductsSection />
      <PricingSection />
      <FooterSection />
    </main>
  );
};

export default Index;
