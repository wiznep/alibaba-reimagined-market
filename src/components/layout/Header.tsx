
import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingCart, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useIsMobile } from "@/hooks/use-mobile";

const categories = [
  "All Categories",
  "Consumer Electronics",
  "Apparel",
  "Vehicles & Accessories",
  "Sports & Entertainment",
  "Machinery",
  "Home & Garden",
  "Beauty & Personal Care",
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center">
              <h1 className="text-2xl font-display font-bold text-alibaba-purple">Alibaba<span className="text-alibaba-orange">Market</span></h1>
            </Link>
            
            {!isMobile && (
              <div className="relative w-[400px]">
                <div className="flex rounded-md overflow-hidden border border-alibaba-neutral-300">
                  <DropdownMenu>
                    <DropdownMenuTrigger className="px-4 bg-alibaba-neutral-100 text-alibaba-neutral-500 border-r border-alibaba-neutral-300 text-sm">
                      All Categories
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {categories.map((category) => (
                        <DropdownMenuItem key={category}>{category}</DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <input 
                    type="text" 
                    placeholder="What are you looking for..." 
                    className="px-4 py-2 flex-1 outline-none min-w-[200px]"
                  />
                  <Button className="rounded-none px-4 bg-alibaba-purple hover:bg-alibaba-purple-dark">
                    <Search size={18} />
                  </Button>
                </div>
              </div>
            )}
          </div>
          
          <div className="flex items-center gap-4">
            {!isMobile && (
              <>
                <Button variant="outline" className="flex items-center gap-2">
                  <User size={18} />
                  <span>Sign In</span>
                </Button>
                <Button variant="outline" className="flex items-center gap-2 relative">
                  <ShoppingCart size={18} />
                  <span>Cart</span>
                  <span className="absolute -top-2 -right-2 bg-alibaba-orange text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    3
                  </span>
                </Button>
              </>
            )}
            
            {isMobile && (
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Menu size={24} />
              </Button>
            )}
          </div>
        </div>
        
        {/* Mobile Search */}
        {isMobile && (
          <div className="pb-4">
            <div className="relative w-full">
              <div className="flex rounded-md overflow-hidden border border-alibaba-neutral-300">
                <input 
                  type="text" 
                  placeholder="Search products..." 
                  className="px-4 py-2 flex-1 outline-none"
                />
                <Button className="rounded-none px-4 bg-alibaba-purple hover:bg-alibaba-purple-dark">
                  <Search size={18} />
                </Button>
              </div>
            </div>
          </div>
        )}
        
        {/* Navigation Bar */}
        {!isMobile && (
          <nav className="py-3 border-t border-alibaba-neutral-200">
            <ul className="flex items-center gap-6 text-sm">
              {categories.map((category, index) => (
                <li key={category} className={index === 0 ? "font-semibold" : ""}>
                  <Link to={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-alibaba-purple">
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
        
        {/* Mobile Menu */}
        {isMobile && isMenuOpen && (
          <div className="fixed inset-0 bg-white z-50 animate-slide-in">
            <div className="p-4">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Menu</h2>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="text-2xl">&times;</span>
                </Button>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm text-alibaba-neutral-400 mb-2">Account</h3>
                  <ul className="space-y-4">
                    <li>
                      <Link to="/login" className="flex items-center gap-2 text-lg">
                        <User size={18} />
                        <span>Sign In</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/cart" className="flex items-center gap-2 text-lg">
                        <ShoppingCart size={18} />
                        <span>Cart</span>
                        <span className="bg-alibaba-orange text-white rounded-full w-5 h-5 flex items-center justify-center text-xs ml-1">
                          3
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-sm text-alibaba-neutral-400 mb-2">Categories</h3>
                  <ul className="space-y-3">
                    {categories.map((category) => (
                      <li key={category}>
                        <Link 
                          to={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                          className="text-lg hover:text-alibaba-purple"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {category}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
