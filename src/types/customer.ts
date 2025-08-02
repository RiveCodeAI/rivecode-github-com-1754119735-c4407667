export interface Customer {
  name: string;
  logo: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
  description?: string;
  link?: string;
}

export interface CustomerStory {
  customer: Customer;
  title: string;
  summary: string;
  metrics?: {
    label: string;
    value: string;
  }[];
  link: string;
}