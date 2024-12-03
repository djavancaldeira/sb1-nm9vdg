import React, { useState } from 'react';
import { Palette, Maximize2, Share2, Save } from 'lucide-react';

const DesignStudio = () => {
  const [selectedColor, setSelectedColor] = useState('classic-white');
  const [selectedEdge, setSelectedEdge] = useState('straight');

  const colors = [
    { id: 'classic-white', name: 'Classic White', hex: '#F5F5F5' },
    { id: 'midnight-black', name: 'Midnight Black', hex: '#222222' },
    { id: 'marble-grey', name: 'Marble Grey', hex: '#C0C0C0' },
  ];

  const edges = [
    { id: 'straight', name: 'Straight Edge' },
    { id: 'beveled', name: 'Beveled' },
    { id: 'bullnose', name: 'Bullnose' },
  ];

  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Interactive Design Studio</h2>
          <p className="text-xl text-gray-600">Visualize your dream kitchen in real-time</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-gray-100 rounded-xl p-8">
            <div className="aspect-video bg-white rounded-lg shadow-inner flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80"
                alt="Kitchen Preview"
                className="rounded-lg"
              />
            </div>
            
            <div className="flex justify-end gap-4 mt-4">
              <button className="flex items-center text-gray-600 hover:text-gray-900">
                <Maximize2 className="h-5 w-5 mr-2" />
                Fullscreen
              </button>
              <button className="flex items-center text-gray-600 hover:text-gray-900">
                <Share2 className="h-5 w-5 mr-2" />
                Share
              </button>
              <button className="flex items-center text-gray-600 hover:text-gray-900">
                <Save className="h-5 w-5 mr-2" />
                Save
              </button>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Palette className="h-5 w-5 mr-2" />
                Select Color
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {colors.map((color) => (
                  <button
                    key={color.id}
                    onClick={() => setSelectedColor(color.id)}
                    className={`p-4 rounded-lg border-2 ${
                      selectedColor === color.id ? 'border-blue-500' : 'border-gray-200'
                    }`}
                  >
                    <div
                      className="w-full h-12 rounded mb-2"
                      style={{ backgroundColor: color.hex }}
                    />
                    <span className="text-sm font-medium">{color.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Edge Profile</h3>
              <div className="space-y-3">
                {edges.map((edge) => (
                  <button
                    key={edge.id}
                    onClick={() => setSelectedEdge(edge.id)}
                    className={`w-full p-4 rounded-lg border-2 ${
                      selectedEdge === edge.id ? 'border-blue-500' : 'border-gray-200'
                    }`}
                  >
                    {edge.name}
                  </button>
                ))}
              </div>
            </div>

            <button className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Save My Design
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignStudio;