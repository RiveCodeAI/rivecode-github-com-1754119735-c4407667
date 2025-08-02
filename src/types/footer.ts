export interface FooterSection {
  title: string;
  items: FooterLink[];
}

export interface FooterLink {
  label: string;
  href?: string;
  isButton?: boolean;
  onClick?: () => void;
}

export interface SocialLink {
  platform: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
}

export interface NewsletterFormData {
  email: string;
}