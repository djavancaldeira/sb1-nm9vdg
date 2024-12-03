import React from 'react';
import { Star, Crown, Diamond } from 'lucide-react';

const CollectionCard = ({ title, price, colors, edges, installation, features, icon: Icon, buttonText, premium = false }) => (
  <div className={`p-6 rounded-2xl ${premium ? 'bg-gray-900 text-white' : 'bg-white'} shadow-xl`}>
    <Icon className={`h-12 w-12 ${premium ? 'text-yellow-400' : 'text-gray-700'} mb-4`} />
    <h3 className="text-2xl font-bold mb-2">{title}</h3>
    <p className="text-3xl font-bold mb-6">Starting at ${price}</p>
    <ul className="space-y-3 mb-6">
      <li>{colors} colors</li>
      <li>{edges} edge profiles</li>
      <li>Installation: {installation}</li>
      {features.map((feature, index) => (
        <li key={index}>{feature}</li>
      ))}
    </ul>
    <button className={`w-full py-3 rounded-lg font-semibold ${
      premium ? 'bg-yellow-400 text-gray-900' : 'bg-gray-900 text-white'
    } hover:opacity-90 transition-opacity`}>
      {buttonText}
    </button>
  </div>
);

const Collections = () => {
  const collections = [
    {
      title: 'Standard Collection',
      price: '1,750',
      colors: 12,
      edges: 5,
      installation: '5-7 days',
      features: ['Up to 35 sq ft', '10-year warranty'],
      icon: Star,
      buttonText: 'Design Your Standard Kitchen'
    },
    {
      title: 'Platinum Collection',
      price: '2,987',
      colors: 24,
      edges: 8,
      installation: '3-5 days',
      features: ['Premium finishes', '20-year warranty'],
      icon: Crown,
      buttonText: 'Explore Platinum Options',
      premium: true
    },
    {
      title: 'Luxury Collection',
      price: '3,897',
      colors: 36,
      edges: 'Custom',
      installation: 'Priority',
      features: ['Exclusive patterns', 'Lifetime warranty'],
      icon: Diamond,
      buttonText: 'Create Your Luxury Design'
    }
  ];

  return (
    <section id="collections" className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">Our Collections</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {collections.map((collection) => (
            <CollectionCard key={collection.title} {...collection} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;