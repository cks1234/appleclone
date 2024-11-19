import { useState, useRef, useEffect } from 'react';

interface CarouselItem {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

const items: CarouselItem[] = [
  {
    id: 1,
    title: "Get the latest iOS update",
    description: "iOS 17.2 brings exciting new features to your iPhone.",
    image: "https://www.apple.com/v/home/bv/images/promos/ios-17-preview/promo_ios17_preview__4rzk5l0qf96m_medium.jpg",
    link: "/ios-17"
  },
  {
    id: 2,
    title: "Apple Music",
    description: "Get 6 months of Apple Music free with your AirPods.*",
    image: "https://www.apple.com/v/home/bv/images/promos/apple-music-airpods/promo_airpods_music__d0ptqvr1lxm6_medium.jpg",
    link: "/apple-music"
  },
  {
    id: 3,
    title: "Apple Arcade",
    description: "NBA 2K24 Arcade Edition. Play now.",
    image: "https://www.apple.com/v/home/bv/images/promos/arcade-nba/promo_nba2k24_arcade__gh2j9qbr0yy6_medium.jpg",
    link: "/apple-arcade"
  },
  {
    id: 4,
    title: "Apple TV+",
    description: "The Morning Show Season 3 now streaming.",
    image: "https://www.apple.com/v/home/bv/images/promos/tv-plus-morning-show/promo_morning_show__d0qbzrqd8s82_medium.jpg",
    link: "/tv-plus"
  }
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const autoScrollRef = useRef<NodeJS.Timeout>();

  const scrollTo = (index: number) => {
    let targetIndex = index;
    
    // Handle circular scrolling
    if (index < 0) targetIndex = items.length - 1;
    if (index >= items.length) targetIndex = 0;

    setCurrentIndex(targetIndex);
    resetAutoScroll();
  };

  const resetAutoScroll = () => {
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
    }
    autoScrollRef.current = setInterval(() => {
      scrollTo(currentIndex + 1);
    }, 5000);
  };

  useEffect(() => {
    resetAutoScroll();
    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    };
  }, [currentIndex]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (containerRef.current?.offsetLeft || 0));
    setScrollLeft(containerRef.current?.scrollLeft || 0);
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (containerRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (containerRef.current) {
      containerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    resetAutoScroll();
  };

  const getVisibleSlides = () => {
    const slides = [];
    const prevIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
    const nextIndex = currentIndex === items.length - 1 ? 0 : currentIndex + 1;

    slides.push({ ...items[prevIndex], position: 'prev' });
    slides.push({ ...items[currentIndex], position: 'current' });
    slides.push({ ...items[nextIndex], position: 'next' });

    return slides;
  };

  return (
    <div className="relative max-w-[980px] mx-auto py-12 overflow-hidden">
      <div className="relative flex justify-center items-center gap-4">
        {getVisibleSlides().map((item, index) => (
          <div
            key={`${item.id}-${item.position}`}
            className={`relative transition-all duration-500 cursor-pointer
              ${item.position === 'current' 
                ? 'w-[600px] opacity-100 z-20' 
                : 'w-[200px] opacity-50 hover:opacity-70 z-10'}`}
            onClick={() => {
              if (item.position === 'prev') scrollTo(currentIndex - 1);
              if (item.position === 'next') scrollTo(currentIndex + 1);
            }}
          >
            <div className="aspect-[16/9] relative">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover rounded-xl"
              />
              {item.position === 'current' && (
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/50 to-transparent rounded-b-xl">
                  <h3 className="text-white text-2xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-white/90 text-lg">{item.description}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-2 mt-6">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 
              ${currentIndex === index 
                ? 'bg-[#1d1d1f] w-4' 
                : 'bg-[#1d1d1f]/30 hover:bg-[#1d1d1f]/50'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}