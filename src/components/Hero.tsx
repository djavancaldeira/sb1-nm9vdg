import React from 'react';
import { ChevronRight, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-gray-900 to-gray-800">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80"
          alt="Luxury Kitchen"
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Transform Your Kitchen with Premium Quartz Countertops
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Expert Installation in 3-7 Days | Free Design Consultation
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold flex items-center justify-center hover:bg-gray-100 transition-colors">
              Get Your Free Quote
              <ChevronRight className="ml-2 h-5 w-5" />
            </button>
            
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center hover:bg-white/10 transition-colors">
              <Phone className="mr-2 h-5 w-5" />
              Call Now: (555) 123-4567
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;