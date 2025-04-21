
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const banners = [
  {
    id: 1,
    title: "Discover the latest tech gadgets",
    subtitle: "Up to 40% off on selected electronics",
    cta: "Shop Now",
    image: "https://source.unsplash.com/random/1600x500/?electronics",
    bgColor: "bg-alibaba-purple-light",
  },
  {
    id: 2,
    title: "Fashion for every occasion",
    subtitle: "New arrivals from top brands",
    cta: "Explore Collection",
    image: "https://source.unsplash.com/random/1600x500/?fashion",
    bgColor: "bg-alibaba-orange-light",
  },
  {
    id: 3,
    title: "Home & Living Essentials",
    subtitle: "Free shipping on orders over $50",
    cta: "View Deals",
    image: "https://source.unsplash.com/random/1600x500/?home",
    bgColor: "bg-blue-50",
  },
];

export function HeroBanner() {
  const [currentBanner, setCurrentBanner] = useState(0);

  const goToNextBanner = () => {
    setCurrentBanner((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
  };

  const goToPrevBanner = () => {
    setCurrentBanner((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(goToNextBanner, 5000);
    return () => clearInterval(interval);
  }, []);

  const banner = banners[currentBanner];

  return (
    <div className={`relative overflow-hidden ${banner.bgColor} rounded-lg`}>
      <div className="container mx-auto px-4 py-12 md:py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-alibaba-neutral-600 mb-4">
              {banner.title}
            </h2>
            <p className="text-lg md:text-xl text-alibaba-neutral-500 mb-8">
              {banner.subtitle}
            </p>
            <Button size="lg" className="bg-alibaba-purple hover:bg-alibaba-purple-dark text-white">
              {banner.cta}
            </Button>
          </div>
          
          <div className="flex justify-center">
            <img 
              src={banner.image} 
              alt={banner.title} 
              className="rounded-lg shadow-lg object-cover w-full max-h-[300px] md:max-h-[400px] animate-scale-in"
            />
          </div>
        </div>
      </div>
      
      {/* Navigation Buttons */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full shadow-md z-20"
        onClick={goToPrevBanner}
      >
        <ChevronLeft size={24} />
      </Button>
      
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full shadow-md z-20"
        onClick={goToNextBanner}
      >
        <ChevronRight size={24} />
      </Button>
      
      {/* Indicator Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {banners.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === currentBanner ? "bg-alibaba-purple" : "bg-gray-300"
            }`}
            onClick={() => setCurrentBanner(index)}
          />
        ))}
      </div>
    </div>
  );
}
