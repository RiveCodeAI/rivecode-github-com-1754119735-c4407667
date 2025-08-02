import React from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

interface NavLinkProps {
  name: string;
  hasDropdown?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ name, hasDropdown = false }) => {
  return (
    <button
      className="inline-flex items-center px-4 py-2 text-sm text-gray-300 hover:text-white"
    >
      {name}
      {hasDropdown && (
        <ChevronDownIcon className="ml-1 h-4 w-4" aria-hidden="true" />
      )}
    </button>
  );
};

export default NavLink;