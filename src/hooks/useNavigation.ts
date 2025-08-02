import { useState, useEffect } from 'react';

interface UseNavigationReturn {
  isOpen: boolean;
  activeDropdown: string | null;
  toggleDropdown: (name: string) => void;
  closeAll: () => void;
  isScrolled: boolean;
}

export const useNavigation = (): UseNavigationReturn => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const closeAll = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  return { isOpen, activeDropdown, toggleDropdown, closeAll, isScrolled };
};