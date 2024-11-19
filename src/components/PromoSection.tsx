interface PromoSectionProps {
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

export default function PromoSection({
  title,
  subtitle,
  bgImage,
  textColor = 'light',
  cta,
  size = 'large',
}: PromoSectionProps) {
  return (
    <section 
      className={`w-full bg-cover bg-center ${size === 'large' ? 'h-[692px]' : 'h-[580px]'}`}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="flex flex-col items-center pt-[52px]">
        <h2 className={`text-[56px] font-semibold ${textColor === 'dark' ? 'text-[#1d1d1f]' : 'text-white'}`}>
          {title}
        </h2>
        {subtitle && (
          <h3 className={`text-[28px] mt-1 ${textColor === 'dark' ? 'text-[#1d1d1f]' : 'text-white'}`}>
            {subtitle}
          </h3>
        )}
        {cta && (
          <div className="flex gap-4 mt-4">
            <a
              href="#"
              className={`px-5 py-3 rounded-full text-[17px] font-medium transition-colors
                ${textColor === 'dark' 
                  ? 'bg-[#1d1d1f] text-white hover:bg-[#333]' 
                  : 'bg-white text-[#1d1d1f] hover:bg-[#f5f5f7]'
                }`}
            >
              {cta.primary}
            </a>
            {cta.secondary && (
              <a
                href="#"
                className={`px-5 py-3 rounded-full text-[17px] font-medium transition-colors
                  ${textColor === 'dark'
                    ? 'bg-white text-[#1d1d1f] hover:bg-[#f5f5f7]'
                    : 'bg-[#1d1d1f] text-white hover:bg-[#333]'
                  }`}
              >
                {cta.secondary}
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  );
}