
import { Card, CardContent } from "@/components/ui/card";

const brands = [
  {
    id: 1,
    name: "Brand 1",
    logo: "https://source.unsplash.com/random/200x100/?logo",
  },
  {
    id: 2,
    name: "Brand 2",
    logo: "https://source.unsplash.com/random/200x100/?tech",
  },
  {
    id: 3,
    name: "Brand 3",
    logo: "https://source.unsplash.com/random/200x100/?company",
  },
  {
    id: 4,
    name: "Brand 4",
    logo: "https://source.unsplash.com/random/200x100/?business",
  },
  {
    id: 5,
    name: "Brand 5",
    logo: "https://source.unsplash.com/random/200x100/?corporation",
  },
  {
    id: 6,
    name: "Brand 6",
    logo: "https://source.unsplash.com/random/200x100/?enterprise",
  },
];

export function BrandsSection() {
  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-alibaba-neutral-600 mb-2">
            Top Brands
          </h2>
          <p className="text-alibaba-neutral-400">
            Discover products from leading global brands
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {brands.map((brand) => (
            <Card key={brand.id} className="border border-alibaba-neutral-200 hover:border-alibaba-purple hover:shadow-sm transition duration-300">
              <CardContent className="flex items-center justify-center p-6 h-24">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-h-full max-w-full object-contain opacity-80 hover:opacity-100 transition duration-300"
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
