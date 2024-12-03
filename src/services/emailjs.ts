import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
emailjs.init("YOUR_PUBLIC_KEY");

export const sendLeadToEmail = async (formData: any) => {
  try {
    const response = await emailjs.send(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        zipCode: formData.zipCode,
        plan: formData.selectedPlan,
        projectType: formData.projectType,
        squareFeet: formData.squareFeet,
        timeline: formData.timeline,
      }
    );
    return response;
  } catch (error) {
    console.error('Error sending lead:', error);
    throw error;
  }
};