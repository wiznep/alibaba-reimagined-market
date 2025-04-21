
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroBanner } from "@/components/home/HeroBanner";
import { FeaturedCategories } from "@/components/home/FeaturedCategories";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { PromoBanner } from "@/components/home/PromoBanner";
import { BrandsSection } from "@/components/home/BrandsSection";
import { MobileApp } from "@/components/home/MobileApp";
import { Testimonials } from "@/components/home/Testimonials";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1">
        <section className="pt-6 pb-8">
          <HeroBanner />
        </section>
        
        <section>
          <FeaturedCategories />
        </section>
        
        <section>
          <FeaturedProducts />
        </section>
        
        <section>
          <PromoBanner />
        </section>
        
        <section>
          <BrandsSection />
        </section>
        
        <section>
          <Testimonials />
        </section>
        
        <section>
          <MobileApp />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
