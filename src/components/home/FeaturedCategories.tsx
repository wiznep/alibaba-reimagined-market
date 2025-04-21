
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

const categories = [
  {
    id: 1,
    name: "Consumer Electronics",
    image: "https://source.unsplash.com/random/300x300/?electronics",
    count: "245K+ products",
  },
  {
    id: 2,
    name: "Apparel",
    image: "https://source.unsplash.com/random/300x300/?clothing",
    count: "185K+ products",
  },
  {
    id: 3,
    name: "Home & Garden",
    image: "https://source.unsplash.com/random/300x300/?garden",
    count: "120K+ products",
  },
  {
    id: 4,
    name: "Beauty & Personal Care",
    image: "https://source.unsplash.com/random/300x300/?beauty",
    count: "98K+ products",
  },
  {
    id: 5,
    name: "Vehicles & Accessories",
    image: "https://source.unsplash.com/random/300x300/?car",
    count: "76K+ products",
  },
  {
    id: 6,
    name: "Sports & Entertainment",
    image: "https://source.unsplash.com/random/300x300/?sports",
    count: "64K+ products",
  },
];

export function FeaturedCategories() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-alibaba-neutral-600 mb-2">
            Shop Our Popular Categories
          </h2>
          <p className="text-alibaba-neutral-400">
            Explore our wide range of products across different categories
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link 
              key={category.id} 
              to={`/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
              className="group"
            >
              <Card className="overflow-hidden border border-alibaba-neutral-200 hover:border-alibaba-purple hover:shadow-md transition duration-300">
                <CardContent className="p-0">
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-alibaba-neutral-600 group-hover:text-alibaba-purple">
                      {category.name}
                    </h3>
                    <p className="text-xs text-alibaba-neutral-400">
                      {category.count}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
