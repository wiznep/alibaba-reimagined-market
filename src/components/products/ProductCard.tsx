
import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, ShoppingCart, Heart } from "lucide-react";

export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  badge?: string;
  category: string;
}

interface ProductCardProps {
  product: Product;
  onAddToCart?: (id: number) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  
  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart(product.id);
    }
  };
  
  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Card className="overflow-hidden border border-alibaba-neutral-200 hover:shadow-lg transition duration-300">
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
          
          {discount > 0 && (
            <Badge className="absolute top-2 right-12 bg-red-500 text-white">
              {discount}% OFF
            </Badge>
          )}
          
          <Button
            variant="outline"
            size="icon"
            className="absolute top-2 right-2 bg-white rounded-full hover:text-alibaba-purple"
            onClick={toggleWishlist}
          >
            <Heart 
              size={18} 
              className={isWishlisted ? "fill-alibaba-purple text-alibaba-purple" : ""} 
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
          
          <Button className="w-full bg-alibaba-purple hover:bg-alibaba-purple-dark" onClick={handleAddToCart}>
            <ShoppingCart size={16} className="mr-2" />
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
