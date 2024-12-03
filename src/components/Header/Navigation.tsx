import React from 'react';

type NavigationProps = {
  className?: string;
  onClose?: () => void;
};

const Navigation: React.FC<NavigationProps> = ({ className, onClose }) => {
  const navItems = [
    { label: 'Gallery', href: '#gallery' },
    { label: 'Process', href: '#process' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href) {
      const element = document.querySelector(href);
      if (element) {
        const headerOffset = 80; // Height of the fixed header
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
    if (onClose) {
      onClose();
    }
  };

  return (
    <nav className={className}>
      {navItems.map((item) => (
        <a
          key={item.label}
          href={item.href}
          onClick={handleClick}
          className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
        >
          {item.label}
        </a>
      ))}
      <a
        href="#free-quote"
        onClick={handleClick}
        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Get Free Quote
      </a>
    </nav>
  );
};

export default Navigation;