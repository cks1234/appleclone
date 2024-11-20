import Navbar from './components/Navbar';
import PromoSection from './components/PromoSection';
import Carousel from './components/Carousel';

function App() {
  return (
    <div className="bg-[#f5f5f7]">
      <Navbar />
      
      <main className="pt-[44px] flex flex-col gap-3">
        <section className="relative w-full h-[692px] overflow-hidden">
          <video 
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay 
            muted 
            playsInline
          >
            <source 
              src="https://www.apple.com/105/media/us/home/2024/4c5981b4-638c-43b6-8f74-212757545abb/anim/bow/largetall.mp4" 
              type="video/mp4" 
            />
          </video>
          <div className="relative z-10 flex flex-col items-center pt-[452px]">
            <h2 className="text-[56px] font-semibold text-black">
              Gift magic.
            </h2>
            <h3 className="text-[28px] mt-1 text-black">
              Make their holiday wish come true.
            </h3>
            <div className="flex gap-4 mt-4">
              <a
                href="#"
                className="px-5 py-3 rounded-full text-[17px] font-medium bg-white text-[#1d1d1f] hover:bg-[#f5f5f7] transition-colors"
              >
                Shop gifts
              </a>
            </div>
          </div>
        </section>
        
        <PromoSection
          title="iPhone 15 Pro"
          subtitle="Titanium. So strong. So light. So Pro."
          bgImage="https://www.apple.com/au/home/images/heroes/iphone-16-pro/hero_iphone16pro_avail__fnf0f9x70jiy_medium.jpg"
          cta={{
            primary: "Learn more",
            secondary: "Buy"
          }}
          size="large"
        />

        <PromoSection
          title="MacBook Air 15&quot;"
          subtitle="Impressively big. Impossibly thin."
          bgImage="https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
          textColor="dark"
          cta={{
            primary: "Learn more",
            secondary: "Buy"
          }}
          size="large"
        />

        <div className="grid grid-cols-2 gap-3 px-3">
          <PromoSection
            title="WATCH"
            subtitle="SERIES 9"
            bgImage="https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d"
            textColor="dark"
            cta={{
              primary: "Learn more",
              secondary: "Buy"
            }}
            size="small"
          />

          <PromoSection
            title="iPad"
            subtitle="Lovable. Drawable. Magical."
            bgImage="https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0"
            textColor="dark"
            cta={{
              primary: "Learn more",
              secondary: "Buy"
            }}
            size="small"
          />

          <PromoSection
            title="AirPods Pro"
            subtitle="Adaptive Audio. Now playing."
            bgImage="https://images.unsplash.com/photo-1600294037681-c80b4cb5b434"
            textColor="dark"
            cta={{
              primary: "Learn more",
              secondary: "Buy"
            }}
            size="small"
          />

          <PromoSection
            title="Trade In"
            subtitle="Get $200-$650 in credit when you trade in iPhone 11 or higher."
            bgImage="https://images.unsplash.com/photo-1592899677977-9c10ca588bbd"
            textColor="dark"
            cta={{
              primary: "See what your device is worth"
            }}
            size="small"
          />
        </div>

        <Carousel />
      </main>

      <footer className="max-w-[980px] mx-auto py-8 text-xs text-[#6e6e73]">
        <div className="border-b border-[#d2d2d7] pb-4">
          <p>* Instant savings, otherwise referred to as instant cashback, is available with the purchase of an eligible product for qualifying HKBN 1O1O, csl, China Mobile Hong Kong, SmarTone or 3 customers. Instant savings will be automatically applied at checkout for eligible products from now through 11/59 PM on 30 November 2023. Instant savings are available for up to two devices per eligible customer. The instant savings amount will be deducted from the price of the eligible product, but will not be reflected on the final invoice. Instant savings are subject to availability and may be subject to change. Additional terms apply.</p>
        </div>
        <div className="mt-4">
          <p>Copyright © 2024 Apple Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;