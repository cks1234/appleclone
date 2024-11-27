import { useState, useEffect } from 'react';

interface CarouselItem {
  id: number;
  title: string;
  subtitle: string;
  cta: string;
  image: string;
  link: string;
}

const items: CarouselItem[] = [
  {
    id: 1,
    title: "Comedy ·",
    subtitle: " Kindness makes a comeback.",
    cta: "Stream now",
    image: "https://is1-ssl.mzstatic.com/image/thumb/wv6JBAsGA5dDE48_aygYBg/980x551.jpg",
    link: "/macbook-pro"
  },
  {
    id: 2,
    title: "Sci-Fi ·",
    subtitle: "New season.",
    cta: "Stream now",
    image: "https://is1-ssl.mzstatic.com/image/thumb/LEDx4gCVQd_lTJt81zQq8w/689x387.jpg",
    link: "/ipad-pro"
  },
  {
    id: 3,
    title: "Drama ·",
    subtitle: "New season.",
    cta: "Stream now",
    image: "https://is1-ssl.mzstatic.com/image/thumb/BtE1Nd7nlabOZ4pkGzee3g/689x387.jpg",
    link: "/iphone-15-pro"
  },
  {
    id: 4,
    title: "Comedy ·",
    subtitle: " Getting it together. Together.",
    cta: "Stream now",
    image: "https://is1-ssl.mzstatic.com/image/thumb/C34jADlGtR5wObjPAMbW4w/689x387.jpg",
    link: "/watch"
  },
  {
    id: 5,
    title: "Thriller ·",
    subtitle: " *Any resemblance to persons living or dead is not a coincidence.",
    cta: "Stream now",
    image: "https://is1-ssl.mzstatic.com/image/thumb/rQ9tx4HlD7su-j1sVFPebg/689x387.jpg",
    link: "/watch"
  }
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % items.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const getVisibleSlides = () => {
    const slides = [];
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    const nextIndex = (currentIndex + 1) % items.length;

    slides.push(items[prevIndex]);
    slides.push(items[currentIndex]);
    slides.push(items[nextIndex]);

    return slides;
  };

  return (
    <div className="relative w-full overflow-hidden bg-[#f5f5f7] py-12">
      <div className="max-w-[980px] mx-auto">
        <div className="relative h-[500px] flex items-center">
          <div className="absolute w-[300%] flex transform -translate-x-1/3">
            {getVisibleSlides().map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className={`w-1/3 px-4 transition-transform duration-500 ease-in-out cursor-pointer ${
                  index === 1 ? 'scale-100 opacity-100' : 'scale-[0.85] opacity-50 hover:opacity-70'
                }`}
                onClick={() => {
                  if (index === 0) handlePrev();
                  if (index === 2) handleNext();
                }}
              >
                <div className="relative aspect-video rounded-xl overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0">
                    <div className="absolute bottom-0 left-10 right-0 p-8 flex">
                    {index === 1 && (
                        <a 
                          href={item.link}
                          className="inline-flex items-center px-6 py-3 rounded-full bg-white text-[#1d1d1f] hover:bg-opacity-90 transition-colors"
                        >
                          {item.cta}
                        </a>
                      )}
                      <h2 className="text-xl font-semibold text-white mt-2 ml-4">{item.title}</h2>
                      <p className="text-xl text-white/90 mt-2 ml-1">{item.subtitle}</p>

                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isAnimating) {
                  setIsAnimating(true);
                  setCurrentIndex(index);
                  setTimeout(() => setIsAnimating(false), 500);
                }
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 
                ${index === currentIndex 
                  ? 'bg-[#1d1d1f] w-4' 
                  : 'bg-[#1d1d1f]/30 hover:bg-[#1d1d1f]/50'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}