
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function PromoBanner() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="rounded-xl overflow-hidden relative">
          <img 
            src="https://source.unsplash.com/random/1600x400/?warehouse" 
            alt="Alibaba wholesale supplies"
            className="w-full h-[300px] object-cover"
          />
          
          <div className="absolute inset-0 bg-gradient-to-r from-alibaba-neutral-600/80 to-transparent flex items-center">
            <div className="p-8 md:p-12 max-w-lg">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                Wholesale Supplies for Your Business
              </h2>
              <p className="text-white/90 mb-6">
                Connect with verified suppliers and get bulk discounts on orders. Perfect for retailers and business owners.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-alibaba-purple hover:bg-alibaba-purple-dark text-white">
                  Become a Supplier
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
