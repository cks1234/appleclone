import { Search, ShoppingBag } from 'lucide-react';
import { useState } from 'react';

interface NavDropdownProps {
  title: string;
  items: {
    title: string;
    description?: string;
    image?: string;
    link: string;
  }[];
  isOpen: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

function NavDropdown({ title, items, isOpen, onMouseEnter, onMouseLeave }: NavDropdownProps) {
  return (
    <li 
      className="relative h-full flex items-center"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <a href={`/${title.toLowerCase()}`} className="text-black hover:opacity-80 h-full flex items-center">
        {title}
      </a>
      {isOpen && (
        <div className="absolute top-[44px] left-1/2 -translate-x-1/2 w-[100vw] bg-[#161617] backdrop-blur-md bg-opacity-95 shadow-xl animate-fadeIn">
          <div className="max-w-[980px] mx-auto py-8 grid grid-cols-3 gap-8">
            {items.map((item, index) => (
              <a 
                key={index} 
                href={item.link}
                className="group flex flex-col items-center text-center p-4 rounded-xl hover:bg-[#ffffff0f] transition-colors"
              >
                {item.image && (
                  <img src={item.image} alt={item.title} className="w-32 h-32 object-contain mb-4" />
                )}
                <h3 className="text-black text-lg font-medium mb-1">{item.title}</h3>
                {item.description && (
                  <p className="text-black/70 text-sm">{item.description}</p>
                )}
              </a>
            ))}
          </div>
        </div>
      )}
    </li>
  );
}

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const dropdownData = {
    Store: [
      { title: 'Shop the Latest', link: '/store' },
      { title: 'Mac', link: '/mac' },
      { title: 'iPad', link: '/ipad' },
    ],
    Mac: [
      { title: 'MacBook Air', link: '/macbook-air' },
      { title: 'MacBook Pro', link: '/macbook-pro' },
      { title: 'iMac', link: '/imac' },
    ],
    iPad: [
      { title: 'iPad Pro', link: '/ipad-pro' },
      { title: 'iPad Air', link: '/ipad-air' },
      { title: 'iPad', link: '/ipad' },
    ],
    iPhone: [
      { title: 'iPhone 15 Pro', link: '/iphone-15-pro' },
      { title: 'iPhone 15', link: '/iphone-15' },
      { title: 'iPhone 14', link: '/iphone-14' },
    ],
  };

  return (
    <header>
      <nav className="bg-[rgba(245, 245, 247, .8)] backdrop-blur-md fixed w-full z-50">
        <div className="max-w-[980px] mx-auto">
          <ul className="flex items-center justify-between h-[44px] text-sm">
            <li>
              <a href="/" className="text-black hover:opacity-80">
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
            <li><a href="/watch" className="text-black hover:opacity-80">Watch</a></li>
            <li><a href="/vision" className="text-black hover:opacity-80">Vision</a></li>
            <li><a href="/airpods" className="text-black hover:opacity-80">AirPods</a></li>
            <li><a href="/tv-home" className="text-black hover:opacity-80">TV & Home</a></li>
            <li><a href="/services" className="text-black hover:opacity-80">Entertainment</a></li>
            <li><a href="/accessories" className="text-black hover:opacity-80">Accessories</a></li>
            <li><a href="/support" className="text-black hover:opacity-80">Support</a></li>
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
      <div className="absolute top-[44px] w-full bg-white z-40">
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