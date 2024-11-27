interface ButtonProps {
    href: string;
    variant: 'primary' | 'secondary';
    children: React.ReactNode;
  }
  
  export default function Button({ 
    href, 
    variant, 
    children 
  }: ButtonProps) {
    const variantClasses = {
        primary: 'bg-[#0071e3] text-white hover:bg-[#005bb5]',
        secondary: 'bg-transparent text-[#2997ff] border border-[#2997ff] hover:bg-[#f0f8ff]',
    };
  
    return (
      <a
        href={href}
        className={`
          rounded-full font-medium transition-colors px-5 py-2 text-[17px]
          ${variantClasses[variant]}
        `}
      >
        {children}
      </a>
    );
  }