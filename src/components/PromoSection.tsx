import Button from './Button';

interface PromoSectionProps {
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  bgImage: string;
  size?: 'large' | 'small';
  textColor?: string;
  paddingTop?: string;
  cta?: {
    primary: string;
    secondary?: string;
  };
}

export default function PromoSection({
  title,
  subtitle,
  bgImage,
  size = 'large',
  textColor = 'white',
  paddingTop = '52px',
  cta,
}: PromoSectionProps) {
  return (
    <section 
      className={`w-full bg-cover bg-center ${size === 'large' ? 'h-[692px]' : 'h-[580px]'}`}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="relative w-full h-full">
        <div className="flex flex-col items-center" style={{ paddingTop }}>
          <h2 
            className={`${size === 'large' ? 'text-[56px]' : 'text-[40px]'} font-semibold flex items-center gap-2`}
            style={{ color: textColor }}
          >
            {title}
          </h2>
          {subtitle && (
            <h3 
            className={`${size === 'large' ? 'text-[28px]' : 'text-[24px]'} text-center`}
            style={{ color: textColor }}
            >
              {subtitle}
            </h3>
          )}
          {cta && (
            <div className={`flex gap-4`} style={{ marginTop: size === 'large' ? '350px' : '16px' }}>
              <Button
                href="#"
                variant="primary"
              >
                {cta.primary}
              </Button>
              {cta.secondary && (
                <Button
                  href="#"
                  variant="secondary"
                >
                  {cta.secondary}
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}