
import { Link } from "react-router-dom";

const productCategories = [
  "Consumer Electronics",
  "Apparel",
  "Vehicles & Accessories",
  "Machinery",
  "Home & Garden",
  "Beauty & Personal Care"
];

const customerService = [
  "Help Center",
  "Contact Us",
  "Report Abuse",
  "Submit a Dispute",
  "Policies & Rules",
  "Get Paid for Feedback"
];

const aboutUs = [
  "About Alibaba.com",
  "About Alibaba Group",
  "Sitemap",
  "Careers",
  "News Center",
  "Alibaba Blog"
];

export function Footer() {
  return (
    <footer className="bg-white border-t border-alibaba-neutral-200 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Product Categories */}
          <div>
            <h3 className="text-alibaba-neutral-600 font-semibold mb-4">Product Categories</h3>
            <ul className="space-y-2 text-sm text-alibaba-neutral-400">
              {productCategories.map((category) => (
                <li key={category}>
                  <Link to={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-alibaba-purple hover:underline">
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-alibaba-neutral-600 font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2 text-sm text-alibaba-neutral-400">
              {customerService.map((item) => (
                <li key={item}>
                  <Link to="#" className="hover:text-alibaba-purple hover:underline">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h3 className="text-alibaba-neutral-600 font-semibold mb-4">About Us</h3>
            <ul className="space-y-2 text-sm text-alibaba-neutral-400">
              {aboutUs.map((item) => (
                <li key={item}>
                  <Link to="#" className="hover:text-alibaba-purple hover:underline">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Trade Services */}
          <div>
            <h3 className="text-alibaba-neutral-600 font-semibold mb-4">Trade Services</h3>
            <p className="text-sm text-alibaba-neutral-400 mb-4">
              Trade Assurance protects your alibaba.com orders from payment to delivery.
            </p>
            <div className="flex flex-col gap-2">
              <img src="https://source.unsplash.com/random/200x80/?payment" alt="Payment methods" className="rounded-md" />
              <span className="text-xs text-alibaba-neutral-300">Secure payment methods available</span>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-alibaba-neutral-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-xs text-alibaba-neutral-400">
                © 2023 Alibaba Market. All rights reserved.
              </p>
            </div>
            <div className="flex gap-6">
              <Link to="#" className="text-xs text-alibaba-neutral-400 hover:text-alibaba-purple">
                Terms of Use
              </Link>
              <Link to="#" className="text-xs text-alibaba-neutral-400 hover:text-alibaba-purple">
                Privacy Policy
              </Link>
              <Link to="#" className="text-xs text-alibaba-neutral-400 hover:text-alibaba-purple">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
