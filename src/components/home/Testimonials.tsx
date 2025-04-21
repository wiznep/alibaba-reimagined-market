
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Retail Business Owner",
    image: "https://source.unsplash.com/random/100x100/?woman",
    content: "Alibaba Market completely transformed how I source products for my store. The quality assurance and supplier verification saved me from countless headaches.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "E-commerce Entrepreneur",
    image: "https://source.unsplash.com/random/100x100/?man,asian",
    content: "As someone who runs multiple online stores, having a reliable wholesale supplier is crucial. Alibaba Market's dashboard makes it simple to track orders and manage inventory.",
    rating: 4,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Tech Startup Founder",
    image: "https://source.unsplash.com/random/100x100/?woman,latina",
    content: "The customer service is exceptional. When we had an issue with a shipment, their team resolved it within hours. Their dedication to quality is unmatched.",
    rating: 5,
  },
  {
    id: 4,
    name: "David Patel",
    role: "Import/Export Specialist",
    image: "https://source.unsplash.com/random/100x100/?man,indian",
    content: "I've worked with many global suppliers, but the verified vendors on Alibaba Market provide consistent quality every time. The RFQ system is a game-changer.",
    rating: 5,
  },
];

export function Testimonials() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 2;
  const pageCount = Math.ceil(testimonials.length / itemsPerPage);
  
  const handleNextPage = () => {
    setCurrentPage((prev) => (prev + 1) % pageCount);
  };
  
  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev - 1 + pageCount) % pageCount);
  };
  
  const displayedTestimonials = testimonials.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <div className="py-12 bg-alibaba-neutral-100">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-alibaba-neutral-600 mb-2">
            What Our Customers Say
          </h2>
          <p className="text-alibaba-neutral-400">
            Trusted by businesses around the world
          </p>
        </div>
        
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {displayedTestimonials.map((testimonial) => (
              <Card key={testimonial.id} className="border border-alibaba-neutral-200 hover:border-alibaba-purple hover:shadow-md transition duration-300 animate-fade-in">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-alibaba-neutral-600">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-alibaba-neutral-400">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex text-yellow-500 mb-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill={i < testimonial.rating ? "currentColor" : "none"}
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="mr-1"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  
                  <blockquote className="text-alibaba-neutral-500 italic mb-0">
                    "{testimonial.content}"
                  </blockquote>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Navigation Controls */}
          <div className="flex justify-center mt-8 gap-2">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={handlePrevPage}
              disabled={currentPage === 0}
            >
              <ChevronLeft size={18} />
            </Button>
            
            {Array.from({ length: pageCount }).map((_, index) => (
              <Button
                key={index}
                variant={currentPage === index ? "default" : "outline"}
                size="icon"
                className="rounded-full w-8 h-8"
                onClick={() => setCurrentPage(index)}
              >
                {index + 1}
              </Button>
            ))}
            
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={handleNextPage}
              disabled={currentPage === pageCount - 1}
            >
              <ChevronRight size={18} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
