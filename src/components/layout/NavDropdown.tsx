import React from 'react';

interface NavDropdownProps {
  name: string;
}

const NavDropdown: React.FC<NavDropdownProps> = ({ name }) => {
  const getDropdownContent = (name: string) => {
    switch (name) {
      case 'Product':
        return [
          'Features',
          'Enterprise',
          'Copilot',
          'AI',
          'Security',
          'Team',
          'Resources',
          'Roadmap',
          'Compare GitHub'
        ];
      case 'Solutions':
        return [
          'For Enterprise',
          'For Startups',
          'For Teams',
          'By Solution',
          'Case Studies'
        ];
      default:
        return [];
    }
  };

  return (
    <div className="absolute -ml-4 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
      <div className="py-1" role="menu" aria-orientation="vertical">
        {getDropdownContent(name).map((item) => (
          <a
            key={item}
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            role="menuitem"
          >
            {item}
          </a>
        ))}
      </div>
    </div>
  );
};

export default NavDropdown;