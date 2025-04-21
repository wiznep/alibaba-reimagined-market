
import { Button } from "@/components/ui/button";

export function MobileApp() {
  return (
    <div className="py-12 bg-alibaba-purple-light">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-alibaba-neutral-600 mb-4">
              Shop on the Go with Our Mobile App
            </h2>
            <p className="text-alibaba-neutral-500 mb-6">
              Download our mobile app and get exclusive deals, track your orders, and shop anywhere, anytime. Experience shopping like never before!
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button className="bg-alibaba-neutral-600 hover:bg-alibaba-neutral-500 text-white">
                <span className="mr-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.954 11.616L15.911 8.659L6.36 3.29C5.727 2.927 5.122 2.878 4.609 3.241L12.954 11.616Z" fill="currentColor" />
                    <path d="M16.415 15.045L19.489 13.333C20.0793 13.0167 20.5 12.4743 20.5 11.8889V11.8889C20.5 11.3035 20.0793 10.761 19.489 10.4447L16.415 8.733L13.2 11.889L16.415 15.045Z" fill="currentColor" />
                    <path d="M4.609 20.759C5.122 21.122 5.727 21.073 6.36 20.71L15.911 15.341L12.954 12.384L4.609 20.759Z" fill="currentColor" />
                    <path d="M4.2 4.41C4.008 4.74 3.9 5.184 3.9 5.757V18.243C3.9 18.816 4.008 19.26 4.2 19.59L12.252 11.889L4.2 4.41Z" fill="currentColor" />
                  </svg>
                </span>
                Google Play
              </Button>
              <Button className="bg-alibaba-neutral-600 hover:bg-alibaba-neutral-500 text-white">
                <span className="mr-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.8 10.12C14.8095 9.12693 15.3546 8.24164 16.22 7.82C15.7135 7.08383 14.8902 6.61972 14 6.55C13.06 6.45 12.15 7.05 11.67 7.05C11.17 7.05 10.4 6.57 9.62 6.58C8.54099 6.6045 7.54338 7.13461 6.94 8.01C5.65 9.82 6.61 12.4 7.83 13.78C8.44 14.46 9.15 15.22 10.07 15.19C10.96 15.15 11.29 14.63 12.36 14.63C13.42 14.63 13.73 15.19 14.67 15.17C15.64 15.15 16.26 14.48 16.86 13.79C17.3316 13.2569 17.6982 12.6458 17.95 11.99C16.8842 11.5173 16.1844 10.4867 16.19 9.36C16.1945 9.2797 16.1967 9.19931 16.1967 9.11891C16.1967 9.09265 16.1963 9.06639 16.1956 9.04013C16.1916 8.97098 16.1863 8.9023 16.18 8.83C15.5329 8.8964 14.9445 9.21609 14.5323 9.72272C14.1201 10.2293 13.9117 10.8857 13.95 11.55C13.9622 11.6297 13.9688 11.7099 13.97 11.79C14.0061 12.5549 14.319 13.2793 14.85 13.83C15.122 14.1424 15.4675 14.3828 15.86 14.53C16.2253 13.9096 16.404 13.2016 16.38 12.49C16.3778 12.3865 16.3778 12.2835 16.38 12.18C16.3511 11.4654 16.1189 10.7759 15.71 10.2C15.4625 10.1413 15.2175 10.1114 14.975 10.11C14.9167 10.11 14.8583 10.1133 14.8 10.12Z" fill="currentColor" />
                    <path d="M16.42 4.12C15.5643 4.29479 14.786 4.71231 14.1867 5.31985C13.5874 5.92739 13.1991 6.71927 13.06 7.58C13.9232 7.42776 14.7113 7.0012 15.2999 6.37421C15.8886 5.74722 16.2428 4.95825 16.3 4.12H16.42Z" fill="currentColor" />
                  </svg>
                </span>
                App Store
              </Button>
            </div>
            
            <div className="mt-8">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl text-alibaba-purple">★</span>
                <span className="text-sm text-alibaba-neutral-500">4.8/5 average rating</span>
              </div>
              <p className="text-sm text-alibaba-neutral-400">
                Over 10 million downloads worldwide
              </p>
            </div>
          </div>
          
          <div className="flex justify-center relative">
            <div className="relative w-[260px] h-[500px] rounded-3xl overflow-hidden border-8 border-alibaba-neutral-600 shadow-xl">
              <img 
                src="https://source.unsplash.com/random/600x1200/?mobile,app,shopping" 
                alt="Alibaba Mobile App" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-white rounded-lg p-4 shadow-lg max-w-[180px]">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 rounded-full bg-alibaba-orange flex items-center justify-center mr-2">
                  <span className="text-white font-semibold">15%</span>
                </div>
                <p className="text-sm font-semibold text-alibaba-neutral-600">
                  App-Only Discount
                </p>
              </div>
              <p className="text-xs text-alibaba-neutral-400">
                Use code APPNEW15 on your first purchase
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
