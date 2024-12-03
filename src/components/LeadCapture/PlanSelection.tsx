import React from 'react';
import { Star, Crown, Diamond } from 'lucide-react';

type Plan = {
  id: string;
  title: string;
  price: string;
  colors: number;
  edges: number | string;
  installation: string;
  features: string[];
  icon: React.ElementType;
  buttonText: string;
  premium?: boolean;
};

type PlanSelectionProps = {
  selectedPlan: string;
  onPlanSelect: (planId: string) => void;
};

const plans: Plan[] = [
  {
    id: 'standard',
    title: 'Standard',
    price: '1,750',
    colors: 12,
    edges: 5,
    installation: '5-7 days',
    features: ['Up to 35 sq ft'],
    icon: Star,
    buttonText: 'Select Standard'
  },
  {
    id: 'platinum',
    title: 'Platinum',
    price: '2,987',
    colors: 24,
    edges: 8,
    installation: '3-5 days',
    features: ['Premium finishes'],
    icon: Crown,
    buttonText: 'Select Platinum',
    premium: true
  },
  {
    id: 'luxury',
    title: 'Luxury',
    price: '3,897',
    colors: 36,
    edges: 'Custom',
    installation: 'Priority',
    features: ['Exclusive patterns'],
    icon: Diamond,
    buttonText: 'Select Luxury'
  }
];

const PlanSelection: React.FC<PlanSelectionProps> = ({ selectedPlan, onPlanSelect }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {plans.map((plan) => (
        <div
          key={plan.id}
          className={`relative p-4 rounded-xl cursor-pointer transition-all duration-300 ${
            selectedPlan === plan.id
              ? 'ring-2 ring-blue-500 transform scale-[1.02]'
              : plan.premium
              ? 'bg-gradient-to-br from-gray-900 to-gray-800 text-white'
              : 'bg-white hover:shadow-lg'
          } shadow-md`}
          onClick={() => onPlanSelect(plan.id)}
        >
          {plan.premium && (
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 text-xs font-bold px-3 py-1 rounded-full">
                Popular
              </span>
            </div>
          )}
          
          <div className="flex items-center space-x-2 mb-3">
            <plan.icon className={`h-5 w-5 ${
              plan.premium ? 'text-yellow-400' : selectedPlan === plan.id ? 'text-blue-500' : 'text-gray-700'
            }`} />
            <h3 className="text-lg font-bold">{plan.title}</h3>
          </div>

          <div className="mb-4">
            <div className="text-xs text-gray-500 dark:text-gray-400">Starting at</div>
            <div className="flex items-baseline">
              <span className="text-2xl font-bold">${plan.price}</span>
            </div>
          </div>

          <div className="space-y-2 mb-4 text-sm">
            <div className={`flex items-center justify-between ${plan.premium ? 'text-gray-300' : 'text-gray-600'}`}>
              <span>Colors:</span>
              <span className="font-medium">{plan.colors}</span>
            </div>
            <div className={`flex items-center justify-between ${plan.premium ? 'text-gray-300' : 'text-gray-600'}`}>
              <span>Edges:</span>
              <span className="font-medium">{plan.edges}</span>
            </div>
            <div className={`flex items-center justify-between ${plan.premium ? 'text-gray-300' : 'text-gray-600'}`}>
              <span>Install:</span>
              <span className="font-medium">{plan.installation}</span>
            </div>
            {plan.features.map((feature, index) => (
              <div key={index} className={`text-xs ${plan.premium ? 'text-gray-300' : 'text-gray-600'}`}>
                • {feature}
              </div>
            ))}
          </div>

          <button
            className={`w-full py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
              selectedPlan === plan.id
                ? 'bg-blue-600 text-white'
                : plan.premium
                ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900'
                : 'bg-gray-900 text-white hover:bg-gray-800'
            }`}
          >
            {selectedPlan === plan.id ? '✓ Selected' : plan.buttonText}
          </button>
        </div>
      ))}
    </div>
  );
};

export default PlanSelection;