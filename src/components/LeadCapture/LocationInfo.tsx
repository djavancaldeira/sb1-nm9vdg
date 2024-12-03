import React from 'react';
import { MapPin } from 'lucide-react';

type LocationInfoProps = {
  zipCode: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const LocationInfo: React.FC<LocationInfoProps> = ({ zipCode, onChange }) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2 mb-4">
        <MapPin className="h-5 w-5 text-blue-600" />
        <h3 className="text-lg font-semibold">Service Area Check</h3>
      </div>
      
      <p className="text-gray-600 text-sm mb-4">
        Enter your ZIP code to verify if we service your area and get accurate pricing.
      </p>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          ZIP Code
        </label>
        <input
          type="text"
          name="zipCode"
          value={zipCode}
          onChange={onChange}
          maxLength={5}
          pattern="[0-9]*"
          inputMode="numeric"
          placeholder="Enter ZIP code"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        />
      </div>
    </div>
  );
};

export default LocationInfo;