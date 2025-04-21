
import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ProductCard, Product } from "@/components/products/ProductCard";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { 
  Star, 
  ShoppingCart, 
  Heart, 
  Share2, 
  Truck, 
  Shield, 
  ThumbsUp, 
  MessageSquare 
} from "lucide-react";
import { useParams } from "react-router-dom";

// Sample product data - in a real app, this would come from an API
const sampleProduct = {
  id: 1,
  name: "Professional Wireless Noise Cancelling Headphones",
  description: "Experience premium sound quality with these wireless headphones featuring advanced noise cancellation technology. Perfect for music enthusiasts and professionals alike.",
  price: 89.99,
  originalPrice: 129.99,
  rating: 4.8,
  reviewCount: 1249,
  images: [
    "https://source.unsplash.com/random/600x600/?headphones,black",
    "https://source.unsplash.com/random/600x600/?headphones,side",
    "https://source.unsplash.com/random/600x600/?headphones,case",
    "https://source.unsplash.com/random/600x600/?headphones,white",
  ],
  badge: "Top Seller",
  category: "Electronics",
  brand: "SoundMaster",
  sku: "SM-WNC-100",
  availability: "In Stock",
  shippingTime: "2-3 business days",
  features: [
    "Active noise cancellation",
    "Up to 30 hours battery life",
    "Bluetooth 5.1 connectivity",
    "Fast charging - 5 hours playback from 10 min charge",
    "Built-in microphone for calls",
    "Comfortable over-ear design",
  ],
  specifications: {
    "Connectivity": "Bluetooth 5.1, 3.5mm audio jack",
    "Battery Life": "Up to 30 hours",
    "Noise Cancellation": "Active (ANC Technology)",
    "Driver Size": "40mm",
    "Frequency Response": "20Hz - 20kHz",
    "Weight": "250g",
    "Charging": "USB-C",
    "Water Resistance": "IPX4",
  },
};

// Sample related products
const relatedProducts: Product[] = [
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

const reviews = [
  {
    id: 1,
    user: "Sarah J.",
    avatar: "https://source.unsplash.com/random/100x100/?woman",
    date: "2023-10-15",
    rating: 5,
    title: "Amazing sound quality!",
    comment: "These headphones are fantastic. The noise cancellation works perfectly in loud environments, and the sound quality is crisp and clear. Battery life is impressive too.",
    helpful: 34,
  },
  {
    id: 2,
    user: "Michael T.",
    avatar: "https://source.unsplash.com/random/100x100/?man",
    date: "2023-09-28",
    rating: 4,
    title: "Great headphones, minor comfort issue",
    comment: "Sound quality is excellent and the noise cancellation works well. My only complaint is that they start to hurt my ears after wearing them for more than 2 hours. Otherwise, very happy with this purchase.",
    helpful: 19,
  },
  {
    id: 3,
    user: "Jennifer L.",
    avatar: "https://source.unsplash.com/random/100x100/?profile",
    date: "2023-10-02",
    rating: 5,
    title: "Worth every penny",
    comment: "I use these daily for work calls and listening to music. The noise cancellation is perfect for my noisy home office, and the battery lasts all week. Highly recommend!",
    helpful: 27,
  },
];

const ProductDetail = () => {
  const { productId } = useParams();
  const [mainImage, setMainImage] = useState(sampleProduct.images[0]);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [activeTab, setActiveTab] = useState("description");
  
  const handleAddToCart = () => {
    console.log(`Added ${quantity} of product ${productId} to cart`);
    // Here you would typically update a cart state or send to an API
  };
  
  const handleImageClick = (image: string) => {
    setMainImage(image);
  };
  
  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };
  
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          {/* Breadcrumbs */}
          <div className="text-sm text-alibaba-neutral-400 mb-6">
            <span className="hover:text-alibaba-purple cursor-pointer">Home</span> &gt; <span className="hover:text-alibaba-purple cursor-pointer">Electronics</span> &gt; <span className="hover:text-alibaba-purple cursor-pointer">Audio</span> &gt; <span className="text-alibaba-neutral-600">Headphones</span>
          </div>
          
          {/* Product Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Product Images */}
            <div>
              <div className="rounded-lg overflow-hidden mb-4 border border-alibaba-neutral-200">
                <img 
                  src={mainImage} 
                  alt={sampleProduct.name} 
                  className="w-full h-auto object-cover"
                />
              </div>
              
              <div className="grid grid-cols-4 gap-2">
                {sampleProduct.images.map((image, index) => (
                  <div 
                    key={index} 
                    className={`rounded-lg overflow-hidden border ${
                      image === mainImage 
                        ? "border-alibaba-purple" 
                        : "border-alibaba-neutral-200"
                    } cursor-pointer hover:border-alibaba-purple transition duration-200`}
                    onClick={() => handleImageClick(image)}
                  >
                    <img 
                      src={image} 
                      alt={`${sampleProduct.name} view ${index + 1}`} 
                      className="w-full h-auto object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Product Info */}
            <div>
              <div className="mb-4">
                <div className="flex items-center mb-2">
                  <Badge className="bg-alibaba-orange text-white mr-2">
                    {sampleProduct.badge}
                  </Badge>
                  <span className="text-sm text-alibaba-neutral-400">
                    Brand: <span className="text-alibaba-purple">{sampleProduct.brand}</span>
                  </span>
                </div>
                
                <h1 className="text-2xl md:text-3xl font-semibold text-alibaba-neutral-600 mb-3">
                  {sampleProduct.name}
                </h1>
                
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-500 mr-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className={i < Math.floor(sampleProduct.rating) ? "fill-yellow-500" : "fill-gray-200"}
                      />
                    ))}
                  </div>
                  <span className="text-alibaba-neutral-400">
                    {sampleProduct.rating} ({sampleProduct.reviewCount} reviews)
                  </span>
                </div>
                
                <div className="flex items-baseline gap-3 mb-6">
                  <span className="text-3xl font-bold text-alibaba-neutral-600">
                    ${sampleProduct.price}
                  </span>
                  {sampleProduct.originalPrice && (
                    <>
                      <span className="text-xl line-through text-alibaba-neutral-300">
                        ${sampleProduct.originalPrice}
                      </span>
                      <Badge className="bg-red-500 text-white">
                        {Math.round(((sampleProduct.originalPrice - sampleProduct.price) / sampleProduct.originalPrice) * 100)}% OFF
                      </Badge>
                    </>
                  )}
                </div>
                
                <Separator className="my-6" />
                
                <div className="mb-6">
                  <p className="text-alibaba-neutral-500 mb-4">
                    {sampleProduct.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center text-alibaba-neutral-500">
                      <Shield size={18} className="mr-2 text-green-500" />
                      <span>1 Year Warranty</span>
                    </div>
                    <div className="flex items-center text-alibaba-neutral-500">
                      <Truck size={18} className="mr-2 text-blue-500" />
                      <span>Free Shipping</span>
                    </div>
                  </div>
                </div>
                
                {/* Quantity Selector */}
                <div className="mb-6">
                  <span className="block text-sm font-medium text-alibaba-neutral-600 mb-2">
                    Quantity:
                  </span>
                  <div className="flex items-center">
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="rounded-r-none"
                      onClick={decreaseQuantity}
                    >
                      -
                    </Button>
                    <div className="w-12 h-10 flex items-center justify-center border-y border-input">
                      {quantity}
                    </div>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="rounded-l-none"
                      onClick={increaseQuantity}
                    >
                      +
                    </Button>
                    <span className="ml-4 text-alibaba-neutral-400">
                      {sampleProduct.availability}
                    </span>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3 mb-6">
                  <Button 
                    className="flex-1 bg-alibaba-purple hover:bg-alibaba-purple-dark"
                    onClick={handleAddToCart}
                  >
                    <ShoppingCart size={18} className="mr-2" />
                    Add to Cart
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="icon"
                    className={isWishlisted ? "text-alibaba-purple border-alibaba-purple" : ""}
                    onClick={toggleWishlist}
                  >
                    <Heart 
                      size={18} 
                      className={isWishlisted ? "fill-alibaba-purple" : ""} 
                    />
                  </Button>
                  
                  <Button variant="outline" size="icon">
                    <Share2 size={18} />
                  </Button>
                </div>
                
                {/* Product Meta */}
                <div className="text-sm text-alibaba-neutral-500">
                  <div className="flex mb-1">
                    <span className="w-32">SKU:</span>
                    <span>{sampleProduct.sku}</span>
                  </div>
                  <div className="flex mb-1">
                    <span className="w-32">Category:</span>
                    <span>{sampleProduct.category}</span>
                  </div>
                  <div className="flex">
                    <span className="w-32">Shipping:</span>
                    <span>{sampleProduct.shippingTime}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Product Details Tabs */}
          <div className="mb-12">
            <Tabs defaultValue="description" value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="w-full border-b border-alibaba-neutral-200 mb-6">
                <TabsTrigger value="description" className="text-base">Description</TabsTrigger>
                <TabsTrigger value="specifications" className="text-base">Specifications</TabsTrigger>
                <TabsTrigger value="reviews" className="text-base">Reviews ({reviews.length})</TabsTrigger>
              </TabsList>
              
              <TabsContent value="description" className="mt-0">
                <div>
                  <h3 className="text-xl font-semibold text-alibaba-neutral-600 mb-4">Product Features</h3>
                  <ul className="list-disc pl-5 mb-6 space-y-2 text-alibaba-neutral-500">
                    {sampleProduct.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                  
                  <h3 className="text-xl font-semibold text-alibaba-neutral-600 mb-4">Product Description</h3>
                  <div className="text-alibaba-neutral-500 space-y-4">
                    <p>
                      Immerse yourself in high-quality audio with these premium wireless headphones. Engineered to deliver exceptional sound clarity and deep, rich bass, these headphones will transform your listening experience.
                    </p>
                    <p>
                      The advanced active noise cancellation technology effectively blocks out ambient noise, allowing you to focus on your music or calls without distraction. Whether you're commuting, working in a busy office, or traveling, these headphones provide a peaceful listening environment.
                    </p>
                    <p>
                      With up to 30 hours of battery life, you can enjoy your favorite music all day long. The quick charge feature gives you 5 hours of playback with just 10 minutes of charging, perfect for when you're on the go.
                    </p>
                    <p>
                      The ergonomic over-ear design with soft, cushioned ear cups ensures comfortable wear for extended periods. The adjustable headband provides a secure fit for any head size.
                    </p>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="specifications" className="mt-0">
                <div>
                  <h3 className="text-xl font-semibold text-alibaba-neutral-600 mb-4">Technical Specifications</h3>
                  <div className="border-t border-alibaba-neutral-200">
                    {Object.entries(sampleProduct.specifications).map(([key, value], index) => (
                      <div 
                        key={key} 
                        className={`grid grid-cols-1 sm:grid-cols-3 py-3 ${
                          index !== Object.entries(sampleProduct.specifications).length - 1
                            ? "border-b border-alibaba-neutral-200"
                            : ""
                        }`}
                      >
                        <div className="font-medium text-alibaba-neutral-600">{key}</div>
                        <div className="sm:col-span-2 text-alibaba-neutral-500">{value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="reviews" className="mt-0">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-semibold text-alibaba-neutral-600">
                      Customer Reviews ({reviews.length})
                    </h3>
                    <Button>Write a Review</Button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="col-span-1 bg-alibaba-neutral-100 p-6 rounded-lg">
                      <div className="text-center mb-4">
                        <div className="text-4xl font-bold text-alibaba-neutral-600 mb-2">
                          {sampleProduct.rating}
                        </div>
                        <div className="flex justify-center text-yellow-500 mb-2">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              size={20}
                              className={i < Math.floor(sampleProduct.rating) ? "fill-yellow-500" : "fill-gray-200"}
                            />
                          ))}
                        </div>
                        <div className="text-sm text-alibaba-neutral-400">
                          Based on {sampleProduct.reviewCount} reviews
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        {[5, 4, 3, 2, 1].map((star) => {
                          // Calculate percentage for this star rating
                          const percentage = star === 5 ? 70 : star === 4 ? 20 : star === 3 ? 7 : star === 2 ? 2 : 1;
                          
                          return (
                            <div key={star} className="flex items-center">
                              <span className="text-sm text-alibaba-neutral-500 w-8">{star} ★</span>
                              <div className="flex-1 mx-2 h-2 bg-alibaba-neutral-200 rounded-full overflow-hidden">
                                <div 
                                  className="h-full bg-yellow-500 rounded-full" 
                                  style={{ width: `${percentage}%` }}
                                ></div>
                              </div>
                              <span className="text-sm text-alibaba-neutral-500 w-8">{percentage}%</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    
                    <div className="md:col-span-2">
                      <div className="space-y-6">
                        {reviews.map((review) => (
                          <div key={review.id} className="border-b border-alibaba-neutral-200 pb-6 last:border-b-0">
                            <div className="flex justify-between mb-2">
                              <div className="flex items-center">
                                <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                                  <img 
                                    src={review.avatar} 
                                    alt={review.user} 
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                                <div>
                                  <h4 className="font-medium text-alibaba-neutral-600">{review.user}</h4>
                                  <div className="text-xs text-alibaba-neutral-400">{review.date}</div>
                                </div>
                              </div>
                              <div className="flex text-yellow-500">
                                {Array.from({ length: 5 }).map((_, i) => (
                                  <Star
                                    key={i}
                                    size={14}
                                    className={i < review.rating ? "fill-yellow-500" : "fill-gray-200"}
                                  />
                                ))}
                              </div>
                            </div>
                            
                            <h5 className="font-medium text-alibaba-neutral-600 mb-2">{review.title}</h5>
                            <p className="text-alibaba-neutral-500 mb-3">{review.comment}</p>
                            
                            <div className="flex items-center text-sm text-alibaba-neutral-400">
                              <Button variant="ghost" size="sm" className="flex items-center gap-1">
                                <ThumbsUp size={14} />
                                <span>Helpful ({review.helpful})</span>
                              </Button>
                              <Button variant="ghost" size="sm" className="flex items-center gap-1">
                                <MessageSquare size={14} />
                                <span>Reply</span>
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          {/* FAQs */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-alibaba-neutral-600 mb-6">Frequently Asked Questions</h3>
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-alibaba-neutral-600">
                  How does the noise cancellation work?
                </AccordionTrigger>
                <AccordionContent className="text-alibaba-neutral-500">
                  The headphones use advanced active noise cancellation technology with built-in microphones that detect external sounds. The headphones then generate sound waves that are the exact opposite (anti-phase) of the detected noise, effectively canceling out the unwanted sound before it reaches your ears.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-alibaba-neutral-600">
                  Are these headphones compatible with all devices?
                </AccordionTrigger>
                <AccordionContent className="text-alibaba-neutral-500">
                  Yes, these headphones are compatible with any device that supports Bluetooth connectivity, including smartphones, tablets, laptops, and desktop computers. They also come with a 3.5mm audio cable for wired connections with devices that don't have Bluetooth.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-alibaba-neutral-600">
                  What's included in the package?
                </AccordionTrigger>
                <AccordionContent className="text-alibaba-neutral-500">
                  The package includes the wireless headphones, a hard carrying case, a USB-C charging cable, a 3.5mm audio cable for wired connection, an airplane adapter, and a user manual.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-alibaba-neutral-600">
                  How long does it take to fully charge the headphones?
                </AccordionTrigger>
                <AccordionContent className="text-alibaba-neutral-500">
                  It takes approximately 2 hours to fully charge the headphones. A full charge provides up to 30 hours of playback time with noise cancellation enabled, or up to 40 hours with noise cancellation turned off.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          
          {/* Related Products */}
          <div>
            <h3 className="text-xl font-semibold text-alibaba-neutral-600 mb-6">You May Also Like</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
