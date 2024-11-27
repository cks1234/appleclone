import { useRef, useEffect } from 'react';
import Navbar from './components/Navbar';
import PromoSection from './components/PromoSection';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import Button from './components/Button';

export default function App() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener('ended', () => {
        if (videoRef.current) {
          videoRef.current.currentTime = videoRef.current.duration;
        }
      });
    }
  }, []);

  return (
    <div className="bg-[#f5f5f7]">
      <Navbar />
      
      <main className="pt-[88px] flex flex-col gap-3" id="main-content">
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
              <Button href="#" variant="primary">
                Shop gifts
              </Button>
            </div>
          </div>
        </section>
        
        <PromoSection
          title="iPhone 16 Pro"
          subtitle="Hello, Apple Intelligence."
          bgImage="https://www.apple.com/au/home/images/heroes/iphone-16-pro/hero_iphone16pro_avail__fnf0f9x70jiy_medium.jpg"
          size="large"
          cta={{
            primary: "Learn more",
            secondary: "Buy"
          }}
        />

        <PromoSection
          title="iPhone 16"
          subtitle="Hello, Apple Intelligence."
          bgImage="https://www.apple.com/au/home/images/heroes/iphone-16/hero_iphone16_avail__euwzls69btea_medium.jpg"
          size="large"
          cta={{
            primary: "Learn more",
            secondary: "Buy"
          }}
        />

        <div className="grid grid-cols-2 gap-3 px-3">
          <PromoSection
            title="AirPods 4"
            subtitle={
              <>
                Iconic. Now supersonic.
                <br />
                Available with Active Noise Cancellation.
              </>
            }
            bgImage="https://www.apple.com/v/home/bv/images/promos/airpods-4/promo_airpods_4_avail__bl22kvpg6ez6_medium.jpg"
            size="small"
            paddingTop='330px'
            cta={{
              primary: "Learn more",
              secondary: "Buy"
            }}
          />

  <PromoSection
            title={
              <>
                <svg height="60" viewBox="0 10 14 24" className="fill-[#1d1d1f]">
                <path d="m13.0729 17.6825a3.61 3.61 0 0 0 -1.7248 3.0365 3.5132 3.5132 0 0 0 2.1379 3.2223 8.394 8.394 0 0 1 -1.0948 2.2618c-.6816.9812-1.3943 1.9623-2.4787 1.9623s-1.3633-.63-2.613-.63c-1.2187 0-1.6525.6507-2.644.6507s-1.6834-.9089-2.4787-2.0243a9.7842 9.7842 0 0 1 -1.6628-5.2776c0-3.0984 2.014-4.7405 3.9969-4.7405 1.0535 0 1.9314.6919 2.5924.6919.63 0 1.6112-.7333 2.8092-.7333a3.7579 3.7579 0 0 1 3.1604 1.5802zm-3.7284-2.8918a3.5615 3.5615 0 0 0 .8469-2.22 1.5353 1.5353 0 0 0 -.031-.32 3.5686 3.5686 0 0 0 -2.3445 1.2084 3.4629 3.4629 0 0 0 -.8779 2.1585 1.419 1.419 0 0 0 .031.2892 1.19 1.19 0 0 0 .2169.0207 3.0935 3.0935 0 0 0 2.1586-1.1368z"></path>
                </svg>
                WATCH
              </>
            }
            subtitle="Thinstant Classic."
            bgImage="https://www.apple.com/v/home/bv/images/promos/apple-watch-series-10/promo_apple_watch_series_10_avail_lte__c70y29goir42_large.jpg"
            size="small"
            textColor="#1d1d1f"
            cta={{
              primary: "Learn more",
              secondary: "Buy"
            }}
          />

          <PromoSection
            title="MacBook Air"
            subtitle="Lean. Mean. M3 Machine."
            bgImage="https://www.apple.com/v/home/bv/images/promos/macbook-air-m3/promo_macbook_air_m3__e43jegok3wuq_medium.jpg"
            size="small"
            textColor="#1d1d1f"
            cta={{
              primary: "Learn more",
              secondary: "Buy"
            }}
          />

          <PromoSection
            title="HomePod Mini"
            bgImage="https://www.apple.com/v/home/bv/images/promos/homepod-mini/tile_homepod_mini__b73w4z3ljymu_medium.jpg"
            size="small"
            textColor="#1d1d1f"
            cta={{
              primary: "Learn more",
              secondary: "Buy"
            }}
          />

          <PromoSection
            title="iPad mini"
            subtitle="Hello, Apple Intelligence."
            bgImage="https://www.apple.com/v/home/bv/images/promos/ipad-mini/promo_ipad_mini__spq4zjcuuaie_medium.jpg"
            size="small"
            textColor="#1d1d1f"
            cta={{
              primary: "Learn more",
              secondary: "Buy"
            }}
          />


          <PromoSection
            title={
              <>
                <svg height="60" viewBox="0 10 14 24" className="fill-[#1d1d1f]">
                <path d="m13.0729 17.6825a3.61 3.61 0 0 0 -1.7248 3.0365 3.5132 3.5132 0 0 0 2.1379 3.2223 8.394 8.394 0 0 1 -1.0948 2.2618c-.6816.9812-1.3943 1.9623-2.4787 1.9623s-1.3633-.63-2.613-.63c-1.2187 0-1.6525.6507-2.644.6507s-1.6834-.9089-2.4787-2.0243a9.7842 9.7842 0 0 1 -1.6628-5.2776c0-3.0984 2.014-4.7405 3.9969-4.7405 1.0535 0 1.9314.6919 2.5924.6919.63 0 1.6112-.7333 2.8092-.7333a3.7579 3.7579 0 0 1 3.1604 1.5802zm-3.7284-2.8918a3.5615 3.5615 0 0 0 .8469-2.22 1.5353 1.5353 0 0 0 -.031-.32 3.5686 3.5686 0 0 0 -2.3445 1.2084 3.4629 3.4629 0 0 0 -.8779 2.1585 1.419 1.419 0 0 0 .031.2892 1.19 1.19 0 0 0 .2169.0207 3.0935 3.0935 0 0 0 2.1586-1.1368z"></path>
                </svg>
                Trade ln
              </>
            }
            subtitle={
              <>
                Get a A$250-A$1,125 in credit
                <br />
                when you trade in an eligible
                <br />
                iPhone 12 or higher.
              </>
            }
            bgImage="https://www.apple.com/v/home/bv/images/promos/iphone-tradein/promo_iphone_tradein__bugw15ka691e_medium.jpg"
            size="small"
            textColor="#1d1d1f"
            cta={{
              primary: "Get your estimate",
            }}
          />
        </div>

        <Carousel />
      </main>

      <Footer />
    </div>
  );
}