
import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, ShoppingCart, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

const products = [
  {
    id: 1,
    name: "Wireless Noise Cancelling Headphones",
    price: 89.99,
    originalPrice: 129.99,
    rating: 4.8,
    reviewCount: 1249,
    image: "https://source.unsplash.com/random/300x300/?headphones",
    badge: "Top Seller",
    category: "Electronics",
  },
  {
    id: 2,
    name: "Smart Watch with Heart Rate Monitor",
    price: 59.99,
    originalPrice: 79.99,
    rating: 4.5,
    reviewCount: 875,
    image: "https://source.unsplash.com/random/300x300/?smartwatch",
    badge: "Hot Deal",
    category: "Electronics",
  },
  {
    id: 3,
    name: "Professional DSLR Camera Bundle",
    price: 849.99,
    originalPrice: 999.99,
    rating: 4.9,
    reviewCount: 423,
    image: "https://source.unsplash.com/random/300x300/?camera",
    badge: "Premium",
    category: "Electronics",
  },
  {
    id: 4,
    name: "Lightweight Portable Bluetooth Speaker",
    price: 39.99,
    originalPrice: 49.99,
    rating: 4.3,
    reviewCount: 687,
    image: "https://source.unsplash.com/random/300x300/?speaker",
    category: "Electronics",
  },
  {
    id: 5,
    name: "High Performance Gaming Laptop",
    price: 1299.99,
    originalPrice: 1499.99,
    rating: 4.7,
    reviewCount: 312,
    image: "https://source.unsplash.com/random/300x300/?laptop",
    badge: "New Arrival",
    category: "Computers",
  },
  {
    id: 6,
    name: "Ergonomic Office Chair",
    price: 199.99,
    originalPrice: 249.99,
    rating: 4.6,
    reviewCount: 528,
    image: "https://source.unsplash.com/random/300x300/?chair",
    category: "Furniture",
  },
  {
    id: 7,
    name: "Smartphone Stabilizer Gimbal",
    price: 79.99,
    originalPrice: 99.99,
    rating: 4.4,
    reviewCount: 246,
    image: "https://source.unsplash.com/random/300x300/?gimbal",
    category: "Electronics",
  },
  {
    id: 8,
    name: "Electric Coffee Grinder",
    price: 34.99,
    originalPrice: 44.99,
    rating: 4.5,
    reviewCount: 189,
    image: "https://source.unsplash.com/random/300x300/?coffeemaker",
    category: "Home & Kitchen",
  },
];

const tabs = [
  { id: "all", label: "All Products" },
  { id: "electronics", label: "Electronics" },
  { id: "computers", label: "Computers" },
  { id: "furniture", label: "Furniture" },
  { id: "home", label: "Home & Kitchen" },
];

export function FeaturedProducts() {
  const [activeTab, setActiveTab] = useState("all");
  const [wishlist, setWishlist] = useState<number[]>([]);

  const filteredProducts = activeTab === "all"
    ? products
    : products.filter(product => 
        product.category.toLowerCase() === activeTab.toLowerCase()
      );

  const toggleWishlist = (id: number) => {
    if (wishlist.includes(id)) {
      setWishlist(wishlist.filter(itemId => itemId !== id));
    } else {
      setWishlist([...wishlist, id]);
    }
  };

  return (
    <div className="py-12 bg-alibaba-neutral-100">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-alibaba-neutral-600 mb-2">
            Featured Products
          </h2>
          <p className="text-alibaba-neutral-400">
            Explore our handpicked selection of top products
          </p>
        </div>
        
        <div className="mb-8 flex justify-center">
          <div className="flex flex-wrap gap-2 justify-center">
            {tabs.map((tab) => (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? "default" : "outline"}
                className={cn(
                  "rounded-full",
                  activeTab === tab.id ? "bg-alibaba-purple hover:bg-alibaba-purple-dark" : ""
                )}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </Button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden border border-alibaba-neutral-200 hover:shadow-lg transition duration-300">
              <CardContent className="p-0">
                <div className="relative">
                  <Link to={`/products/${product.id}`}>
                    <div className="relative aspect-square overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover hover:scale-105 transition duration-300"
                      />
                    </div>
                  </Link>
                  
                  {product.badge && (
                    <Badge className="absolute top-2 left-2 bg-alibaba-orange text-white">
                      {product.badge}
                    </Badge>
                  )}
                  
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute top-2 right-2 bg-white rounded-full hover:text-alibaba-purple"
                    onClick={() => toggleWishlist(product.id)}
                  >
                    <Heart 
                      size={18} 
                      className={wishlist.includes(product.id) ? "fill-alibaba-purple text-alibaba-purple" : ""} 
                    />
                  </Button>
                </div>
                
                <div className="p-4">
                  <div className="flex items-center text-sm text-yellow-500 mb-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={i < Math.floor(product.rating) ? "fill-yellow-500" : "fill-gray-200"}
                      />
                    ))}
                    <span className="text-alibaba-neutral-400 ml-1 text-xs">
                      ({product.reviewCount})
                    </span>
                  </div>
                  
                  <Link to={`/products/${product.id}`}>
                    <h3 className="font-medium text-alibaba-neutral-600 line-clamp-2 mb-2 hover:text-alibaba-purple">
                      {product.name}
                    </h3>
                  </Link>
                  
                  <div className="flex gap-2 items-baseline mb-3">
                    <span className="text-lg font-semibold text-alibaba-neutral-600">
                      ${product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm line-through text-alibaba-neutral-300">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                  
                  <Button className="w-full bg-alibaba-purple hover:bg-alibaba-purple-dark">
                    <ShoppingCart size={16} className="mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-8 flex justify-center">
          <Button variant="outline" size="lg" className="text-alibaba-purple border-alibaba-purple hover:bg-alibaba-purple-light">
            View All Products
          </Button>
        </div>
      </div>
    </div>
  );
}
