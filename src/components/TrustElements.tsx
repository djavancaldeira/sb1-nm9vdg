import React from 'react';
import { Shield, Clock, Award, Star } from 'lucide-react';

const TrustElements = () => {
  const benefits = [
    { icon: Shield, title: "Quality Guarantee", desc: "10-year warranty" },
    { icon: Clock, title: "Quick Installation", desc: "3-7 days" },
    { icon: Award, title: "Expert Craftsmen", desc: "20+ years" },
    { icon: Star, title: "5-Star Service", desc: "Rated 4.9/5" }
  ];

  return (
    <section className="py-24">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
        <p className="text-xl text-gray-600">Trusted by thousands</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {benefits.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex flex-col items-center">
              <item.icon className="h-8 w-8 text-blue-600 mb-3" />
              <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
              <p className="text-gray-600 text-sm text-center">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustElements;