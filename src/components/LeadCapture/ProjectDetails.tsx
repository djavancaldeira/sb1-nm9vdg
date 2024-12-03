import React from 'react';

type ProjectDetailsProps = {
  formData: {
    projectType: string;
    squareFeet: string;
    timeline: string;
  };
  onChange: (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void;
};

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ formData, onChange }) => {
  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Project Type
        </label>
        <select
          name="projectType"
          value={formData.projectType}
          onChange={onChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        >
          <option value="">Select Project Type</option>
          <option value="kitchen">Kitchen Countertops</option>
          <option value="bathroom">Bathroom Vanity</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Approximate Square Feet
        </label>
        <input
          type="number"
          name="squareFeet"
          value={formData.squareFeet}
          onChange={onChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Preferred Timeline
        </label>
        <select
          name="timeline"
          value={formData.timeline}
          onChange={onChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        >
          <option value="">Select Timeline</option>
          <option value="immediate">As Soon as Possible</option>
          <option value="1month">Within 1 Month</option>
          <option value="3months">Within 3 Months</option>
          <option value="planning">Just Planning</option>
        </select>
      </div>
    </div>
  );
};

export default ProjectDetails;