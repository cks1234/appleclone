import Navbar from './components/Navbar';
import PromoSection from './components/PromoSection';
import Carousel from './components/Carousel';

function App() {
  return (
    <div className="bg-[#f5f5f7]">
      <Navbar />
      
      <main className="pt-[44px] flex flex-col gap-3">
        <PromoSection
          title="iPhone 15 Pro"
          subtitle="Titanium. So strong. So light. So Pro."
          bgImage="https://www.apple.com/v/home/bv/images/heroes/holiday-2024/hero_holiday_2024__bbs03706zple_medium.jpg"
          cta={{
            primary: "Learn more",
            secondary: "Buy"
          }}
          size="large"
        />
        
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