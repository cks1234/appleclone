import { Search, ShoppingBag } from 'lucide-react';
import { useState } from 'react';
import NavDropdown from './NavDropdown';

const dropdownData = {
  Store: [
    {
      section: 'Shop',
      links: [
        { title: 'Shop the Latest', link: '/shop', featured: true },
        { title: 'Mac', link: '/mac' },
        { title: 'iPad', link: '/ipad' },
        { title: 'iPhone', link: '/iphone' },
        { title: 'Apple Watch', link: '/watch' },
        { title: 'Apple Vision Pro', link: '/vision-pro' },
        { title: 'Accessories', link: '/accessories' }
      ]
    },
    {
      section: 'Quick Links',
      links: [
        { title: 'Apple Store Shopping Event', link: '/shopping-event' },
        { title: 'Shop Holiday Gifts', link: '/holiday' },
        { title: 'Find a Store', link: '/stores' },
        { title: 'Order Status', link: '/orders' },
        { title: 'Apple Trade In', link: '/trade-in' },
        { title: 'Financing', link: '/financing' }
      ]
    },
    {
      section: 'Shop Special Stores',
      links: [
        { title: 'Certified Refurbished', link: '/refurbished' },
        { title: 'Education', link: '/education' },
        { title: 'Business', link: '/business' }
      ]
    }
  ],
  Mac: [
    {
      section: 'Explore Mac',
      links: [
        { title: 'Explore All Mac', link: '/mac', featured: true },
        { title: 'MacBook Air', link: '/macbook-air' },
        { title: 'MacBook Pro', link: '/macbook-pro' },
        { title: 'iMac', link: '/imac' },
        { title: 'Mac mini', link: '/mac-mini' },
        { title: 'Mac Studio', link: '/mac-studio' },
        { title: 'Mac Pro', link: '/mac-pro' },
        { title: 'Displays', link: '/displays' }
      ]
    },
    {
      section: 'Shop Mac',
      links: [
        { title: 'Shop Mac', link: '/shop-mac', featured: true },
        { title: 'Mac Accessories', link: '/mac-accessories' },
        { title: 'Financing', link: '/mac-financing' },
        { title: 'Apple Trade In', link: '/mac-trade-in' }
      ]
    },
    {
      section: 'More from Mac',
      links: [
        { title: 'Mac Support', link: '/mac-support' },
        { title: 'macOS Sonoma', link: '/macos' },
        { title: 'Continuity', link: '/continuity' },
        { title: 'Pro Display XDR', link: '/pro-display-xdr' },
        { title: 'Apple at Work', link: '/business' }
      ]
    }
  ],
  iPad: [
    {
      section: 'Explore iPad',
      links: [
        { title: 'Explore All iPad', link: '/ipad', featured: true },
        { title: 'iPad Pro', link: '/ipad-pro' },
        { title: 'iPad Air', link: '/ipad-air' },
        { title: 'iPad', link: '/ipad' },
        { title: 'iPad mini', link: '/ipad-mini' }
      ]
    },
    {
      section: 'Shop iPad',
      links: [
        { title: 'Shop iPad', link: '/shop-ipad', featured: true },
        { title: 'iPad Accessories', link: '/ipad-accessories' },
        { title: 'Apple Trade In', link: '/ipad-trade-in' },
        { title: 'Financing', link: '/ipad-financing' }
      ]
    }
  ],
  iPhone: [
    {
      section: 'Explore iPhone',
      links: [
        { title: 'Explore All iPhone', link: '/iphone', featured: true },
        { title: 'iPhone 15 Pro', link: '/iphone-15-pro' },
        { title: 'iPhone 15', link: '/iphone-15' },
        { title: 'iPhone 14', link: '/iphone-14' },
        { title: 'iPhone 13', link: '/iphone-13' }
      ]
    },
    {
      section: 'Shop iPhone',
      links: [
        { title: 'Shop iPhone', link: '/shop-iphone', featured: true },
        { title: 'iPhone Accessories', link: '/iphone-accessories' },
        { title: 'Apple Trade In', link: '/iphone-trade-in' },
        { title: 'Carrier Deals', link: '/carrier-deals' },
        { title: 'Financing', link: '/iphone-financing' }
      ]
    }
  ],
  Watch: [
    {
      section: 'Explore Watch',
      links: [
        { title: 'Explore All Apple Watch', link: '/watch', featured: true },
        { title: 'Apple Watch Series 9', link: '/watch-series-9' },
        { title: 'Apple Watch Ultra 2', link: '/watch-ultra-2' },
        { title: 'Apple Watch SE', link: '/watch-se' }
      ]
    },
    {
      section: 'Shop Watch',
      links: [
        { title: 'Shop Apple Watch', link: '/shop-watch', featured: true },
        { title: 'Apple Watch Bands', link: '/watch-bands' },
        { title: 'Apple Watch Accessories', link: '/watch-accessories' },
        { title: 'Apple Trade In', link: '/watch-trade-in' },
        { title: 'Financing', link: '/watch-financing' }
      ]
    }
  ],
  Vision: [
    {
      section: 'Explore Vision',
      links: [
        { title: 'Explore Vision Pro', link: '/vision-pro', featured: true },
        { title: 'Vision Pro Apps', link: '/vision-apps' },
        { title: 'visionOS', link: '/visionos' }
      ]
    },
    {
      section: 'Shop Vision',
      links: [
        { title: 'Order Vision Pro', link: '/order-vision-pro', featured: true },
        { title: 'Vision Pro Accessories', link: '/vision-accessories' },
        { title: 'Financing', link: '/vision-financing' }
      ]
    }
  ]
};

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="relative">
      <nav className="bg-[rgba(245,245,247,0.8)] backdrop-blur-md fixed w-full z-50">
        <div className="max-w-[980px] mx-auto">
          <ul className="flex items-center justify-between h-[44px] text-sm">
            <li>
              <a href="/" className="text-black hover:opacity-80 h-full flex items-center">
                <svg height="44" width="14" viewBox="0 0 14 44" className="fill-black">
                  <path d="m13.0729 17.6825a3.61 3.61 0 0 0 -1.7248 3.0365 3.5132 3.5132 0 0 0 2.1379 3.2223 8.394 8.394 0 0 1 -1.0948 2.2618c-.6816.9812-1.3943 1.9623-2.4787 1.9623s-1.3633-.63-2.613-.63c-1.2187 0-1.6525.6507-2.644.6507s-1.6834-.9089-2.4787-2.0243a9.7842 9.7842 0 0 1 -1.6628-5.2776c0-3.0984 2.014-4.7405 3.9969-4.7405 1.0535 0 1.9314.6919 2.5924.6919.63 0 1.6112-.7333 2.8092-.7333a3.7579 3.7579 0 0 1 3.1604 1.5802zm-3.7284-2.8918a3.5615 3.5615 0 0 0 .8469-2.22 1.5353 1.5353 0 0 0 -.031-.32 3.5686 3.5686 0 0 0 -2.3445 1.2084 3.4629 3.4629 0 0 0 -.8779 2.1585 1.419 1.419 0 0 0 .031.2892 1.19 1.19 0 0 0 .2169.0207 3.0935 3.0935 0 0 0 2.1586-1.1368z"></path>
                </svg>
              </a>
            </li>
            {Object.entries(dropdownData).map(([key, items]) => (
              <NavDropdown
                key={key}
                title={key}
                items={items}
                isOpen={activeDropdown === key}
                onMouseEnter={() => setActiveDropdown(key)}
                onMouseLeave={() => setActiveDropdown(null)}
              />
            ))}
            <li><a href="/tv-home" className="text-black hover:opacity-80 h-full flex items-center">TV & Home</a></li>
            <li><a href="/services" className="text-black hover:opacity-80 h-full flex items-center">Entertainment</a></li>
            <li><a href="/accessories" className="text-black hover:opacity-80 h-full flex items-center">Accessories</a></li>
            <li><a href="/support" className="text-black hover:opacity-80 h-full flex items-center">Support</a></li>
            <li>
              <button className="text-black hover:opacity-80">
                <Search className="w-4 h-4" />
              </button>
            </li>
            <li>
              <button className="text-black hover:opacity-80">
                <ShoppingBag className="w-4 h-4" />
              </button>
            </li>
          </ul>
        </div>
      </nav>
      <div className={`fixed top-[44px] w-full bg-white z-40 ${activeDropdown ? 'hidden' : ''}`}>
        <div className="max-w-[980px] mx-auto py-3 px-4 text-center">
          <p className="text-black text-sm">
            Get A$250–A$1,125 in credit towards iPhone 16 or iPhone 16 Pro when you trade in your eligible iPhone 12 or higher.*{' '}
            <a href="/iphone" className="text-[#2997ff] hover:underline">
              Shop iPhone
            </a>
          </p>
        </div>
      </div>
    </header>
  );
}