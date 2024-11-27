export interface PromoSectionProps {
    title: string;
    subtitle?: string;
    bgImage: string;
    textColor?: 'dark' | 'light';
    cta?: {
      primary: string;
      secondary?: string;
    };
    size?: 'large' | 'small';
  }
  
  export interface NavDropdownProps {
    title: string;
    items: {
      section: string;
      links: {
        title: string;
        link: string;
        featured?: boolean;
      }[];
    }[];
    isOpen: boolean;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
  }
  
  export interface FooterSection {
    title: string;
    links: {
      title: string;
      url: string;
    }[];
  }