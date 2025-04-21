
import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProductCard, Product } from "@/components/products/ProductCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { ChevronDown, Filter, Star, Tag } from "lucide-react";
import { useParams } from "react-router-dom";

// Sample product data - in a real app, this would come from an API
const products: Product[] = [
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
  {
    id: 9,
    name: "Adjustable Dumbbell Set",
    price: 149.99,
    originalPrice: 179.99,
    rating: 4.7,
    reviewCount: 329,
    image: "https://source.unsplash.com/random/300x300/?dumbbell",
    category: "Sports & Fitness",
  },
  {
    id: 10,
    name: "Wireless Gaming Mouse",
    price: 49.99,
    originalPrice: 69.99,
    rating: 4.6,
    reviewCount: 568,
    image: "https://source.unsplash.com/random/300x300/?mouse",
    category: "Computers",
  },
  {
    id: 11,
    name: "Mechanical Keyboard with RGB Lighting",
    price: 89.99,
    originalPrice: 119.99,
    rating: 4.8,
    reviewCount: 842,
    image: "https://source.unsplash.com/random/300x300/?keyboard",
    badge: "Best Value",
    category: "Computers",
  },
  {
    id: 12,
    name: "Portable Power Bank 20000mAh",
    price: 39.99,
    originalPrice: 59.99,
    rating: 4.5,
    reviewCount: 1036,
    image: "https://source.unsplash.com/random/300x300/?powerbank",
    category: "Electronics",
  },
];

const brands = ["All Brands", "Apple", "Samsung", "Sony", "LG", "Lenovo", "Dell", "HP", "ASUS"];
const priceRanges = ["All Prices", "Under $50", "$50 to $100", "$100 to $500", "Over $500"];
const ratings = [4, 3, 2, 1];
const sortOptions = [
  { value: "recommended", label: "Recommended" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "rating", label: "Top Rated" },
  { value: "newest", label: "Newest Arrivals" },
];

const ProductList = () => {
  const { categoryId } = useParams();
  const categoryName = categoryId 
    ? categoryId.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ") 
    : "All Products";
  
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("All Brands");
  const [selectedPriceRange, setSelectedPriceRange] = useState("All Prices");
  const [minRating, setMinRating] = useState(0);
  const [sortBy, setSortBy] = useState("recommended");
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [showFilters, setShowFilters] = useState(false);
  
  // Filter products based on filters
  const filteredProducts = products.filter((product) => {
    // Filter by category if specified
    if (categoryId && !product.category.toLowerCase().includes(categoryId.toLowerCase().replace(/-/g, " "))) {
      return false;
    }
    
    // Filter by search term
    if (searchTerm && !product.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    
    // Filter by brand
    if (selectedBrand !== "All Brands" && product.category !== selectedBrand) {
      return false;
    }
    
    // Filter by rating
    if (minRating > 0 && product.rating < minRating) {
      return false;
    }
    
    // Filter by price range
    if (product.price < priceRange[0] || product.price > priceRange[1]) {
      return false;
    }
    
    return true;
  });
  
  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      case "newest":
        return b.id - a.id;
      default:
        return 0; // Recommended (no specific sort)
    }
  });
  
  const handleAddToCart = (id: number) => {
    console.log(`Added product ${id} to cart`);
    // Here you would typically update a cart state or send to an API
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-2xl md:text-3xl font-display font-bold text-alibaba-neutral-600 mb-2">
              {categoryName}
            </h1>
            <p className="text-alibaba-neutral-400">
              {sortedProducts.length} products available
            </p>
          </div>
          
          {/* Mobile Filters Toggle */}
          <div className="md:hidden mb-4">
            <Button 
              variant="outline" 
              className="w-full flex items-center justify-between"
              onClick={() => setShowFilters(!showFilters)}
            >
              <div className="flex items-center">
                <Filter size={18} className="mr-2" />
                <span>Filters</span>
              </div>
              <ChevronDown size={18} className={`transition-transform ${showFilters ? "rotate-180" : ""}`} />
            </Button>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6">
            {/* Filters Sidebar */}
            <aside className={`w-full md:w-64 lg:w-72 ${showFilters ? "block" : "hidden"} md:block`}>
              <div className="bg-white rounded-lg border border-alibaba-neutral-200 p-6">
                {/* Search */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-alibaba-neutral-600 mb-3">Search</h3>
                  <Input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                
                <Separator className="my-4" />
                
                {/* Brand Filter */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-alibaba-neutral-600 mb-3">Brand</h3>
                  <Select value={selectedBrand} onValueChange={setSelectedBrand}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select brand" />
                    </SelectTrigger>
                    <SelectContent>
                      {brands.map((brand) => (
                        <SelectItem key={brand} value={brand}>
                          {brand}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                {/* Price Range Filter */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-alibaba-neutral-600 mb-3">Price Range</h3>
                  <div className="mb-4">
                    <Slider
                      defaultValue={[0, 2000]}
                      min={0}
                      max={2000}
                      step={10}
                      value={priceRange}
                      onValueChange={setPriceRange}
                      className="my-6"
                    />
                    <div className="flex justify-between">
                      <span className="text-sm text-alibaba-neutral-500">${priceRange[0]}</span>
                      <span className="text-sm text-alibaba-neutral-500">${priceRange[1]}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    {priceRanges.map((range) => (
                      <div key={range} className="flex items-center">
                        <Checkbox 
                          id={range} 
                          checked={selectedPriceRange === range} 
                          onCheckedChange={() => setSelectedPriceRange(range)}
                        />
                        <label htmlFor={range} className="ml-2 text-sm text-alibaba-neutral-500 cursor-pointer">
                          {range}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <Separator className="my-4" />
                
                {/* Ratings Filter */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-alibaba-neutral-600 mb-3">Customer Ratings</h3>
                  <div className="space-y-2">
                    {ratings.map((rating) => (
                      <div key={rating} className="flex items-center">
                        <Checkbox 
                          id={`rating-${rating}`} 
                          checked={minRating === rating} 
                          onCheckedChange={() => setMinRating(minRating === rating ? 0 : rating)}
                        />
                        <label htmlFor={`rating-${rating}`} className="ml-2 flex items-center text-sm text-alibaba-neutral-500 cursor-pointer">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              size={14}
                              className={i < rating ? "fill-yellow-500 text-yellow-500" : "fill-gray-200 text-gray-200"}
                            />
                          ))}
                          <span className="ml-1">& Up</span>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <Button className="w-full bg-alibaba-purple hover:bg-alibaba-purple-dark">
                  Apply Filters
                </Button>
              </div>
            </aside>
            
            {/* Product Grid */}
            <div className="flex-1">
              {/* Sort Controls */}
              <div className="flex justify-between items-center mb-6">
                <p className="text-sm text-alibaba-neutral-500">
                  Showing {sortedProducts.length} of {products.length} products
                </p>
                
                <div className="flex items-center gap-2">
                  <span className="text-sm text-alibaba-neutral-500 hidden sm:inline">Sort by:</span>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Recommended" />
                    </SelectTrigger>
                    <SelectContent>
                      {sortOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              {/* Products */}
              {sortedProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {sortedProducts.map((product) => (
                    <ProductCard 
                      key={product.id} 
                      product={product} 
                      onAddToCart={handleAddToCart} 
                    />
                  ))}
                </div>
              ) : (
                <div className="py-12 text-center">
                  <div className="mb-4 text-alibaba-neutral-400">
                    <Tag size={48} className="mx-auto" />
                  </div>
                  <h3 className="text-xl font-semibold text-alibaba-neutral-600 mb-2">
                    No products found
                  </h3>
                  <p className="text-alibaba-neutral-400 mb-6">
                    Try adjusting your filters or search terms
                  </p>
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedBrand("All Brands");
                      setSelectedPriceRange("All Prices");
                      setMinRating(0);
                      setPriceRange([0, 2000]);
                    }}
                  >
                    Clear All Filters
                  </Button>
                </div>
              )}
              
              {/* Pagination */}
              {sortedProducts.length > 0 && (
                <div className="flex justify-center mt-12">
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon" disabled>
                      &lt;
                    </Button>
                    <Button variant="default" size="icon" className="bg-alibaba-purple hover:bg-alibaba-purple-dark">
                      1
                    </Button>
                    <Button variant="outline" size="icon">
                      2
                    </Button>
                    <Button variant="outline" size="icon">
                      3
                    </Button>
                    <Button variant="outline" size="icon">
                      &gt;
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductList;
