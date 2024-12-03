import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { Toaster, toast } from 'react-hot-toast';
import PlanSelection from './PlanSelection';
import ContactInfo from './ContactInfo';
import ProjectDetails from './ProjectDetails';
import LocationInfo from './LocationInfo';
import { sendLeadToEmail } from '../../services/emailjs';

const LeadCapture = () => {
  const [step, setStep] = useState(1);
  const [selectedPlan, setSelectedPlan] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    zipCode: '',
    projectType: '',
    squareFeet: '',
    timeline: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlanSelect = (planId: string) => {
    setSelectedPlan(planId);
    setStep(2);
  };

  const nextStep = () => {
    if (step === 3) {
      if (!formData.name || !formData.email || !formData.phone) {
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        return;
      }
      if (!/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(formData.phone)) {
        return;
      }
    }
    setStep(step + 1);
  };

  const prevStep = () => setStep(step - 1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all required fields
    if (!formData.name || !formData.email || !formData.phone) {
      toast.error('Please fill in all required fields');
      return;
    }

    try {
      setIsSubmitting(true);
      await sendLeadToEmail({ ...formData, selectedPlan });
      
      toast.success('Thank you! We will contact you shortly.');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        zipCode: '',
        projectType: '',
        squareFeet: '',
        timeline: ''
      });
      setSelectedPlan('');
      setStep(1);
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <PlanSelection
            selectedPlan={selectedPlan}
            onPlanSelect={handlePlanSelect}
          />
        );
      case 2:
        return (
          <LocationInfo
            zipCode={formData.zipCode}
            onChange={handleInputChange}
          />
        );
      case 3:
        return (
          <ContactInfo
            formData={formData}
            onChange={handleInputChange}
          />
        );
      case 4:
        return (
          <ProjectDetails
            formData={formData}
            onChange={handleInputChange}
          />
        );
      default:
        return null;
    }
  };

  return (
    <section id="free-quote" className="py-16">
      <Toaster position="top-right" />
      
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center space-x-2 mb-4">
          <Sparkles className="h-6 w-6 text-blue-600" />
          <span className="text-blue-600 font-semibold">Free Quote</span>
        </div>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Design Your Dream Kitchen</h2>
        <p className="text-lg text-gray-600">Get a personalized quote in minutes</p>
      </div>

      <div className="bg-white rounded-2xl shadow-xl p-8">
        <div className="mb-8">
          <div className="flex justify-between">
            {[1, 2, 3, 4].map((num) => (
              <div
                key={num}
                className={`w-1/4 h-2 rounded-full ${
                  step >= num ? 'bg-blue-600' : 'bg-gray-200'
                }`}
              />
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          {renderStepContent()}

          <div className="flex justify-between mt-8">
            {step > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                disabled={isSubmitting}
              >
                Previous
              </button>
            )}
            {step < 4 ? (
              <button
                type="button"
                onClick={nextStep}
                className={`ml-auto px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 ${
                  (step === 1 && !selectedPlan) || 
                  (step === 3 && (!formData.name || !formData.email || !formData.phone)) 
                    ? 'opacity-50 cursor-not-allowed' 
                    : ''
                }`}
                disabled={
                  isSubmitting ||
                  (step === 1 && !selectedPlan) || 
                  (step === 3 && (!formData.name || !formData.email || !formData.phone))
                }
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className={`ml-auto px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Get Your Quote'}
              </button>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default LeadCapture;