import React from 'react';
import Navigation from './Navigation';

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden">
      <div className="fixed inset-0 bg-gray-800 bg-opacity-75" onClick={onClose} />
      <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-xl">
        <div className="flex flex-col h-full">
          <div className="flex-1 px-4 py-6">
            <Navigation className="flex flex-col space-y-4" onClose={onClose} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;