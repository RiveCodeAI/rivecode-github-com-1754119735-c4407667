export interface NavItem {
  name: string;
  hasDropdown?: boolean;
  href?: string;
  items?: NavItem[];
}

export interface NavDropdownProps {
  name: string;
  items: NavItem[];
  isOpen?: boolean;
}

export interface NavLinkProps {
  name: string;
  hasDropdown?: boolean;
  href?: string;
  onClick?: () => void;
}