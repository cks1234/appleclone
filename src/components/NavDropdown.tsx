interface NavDropdownProps {
  title: string;
  items: {
    section: string;
    links: {
      title: string;
      link: string;
      featured?: boolean;
    }[];
  }[];
  isOpen: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export default function NavDropdown({ 
  title, 
  items, 
  isOpen, 
  onMouseEnter, 
  onMouseLeave 
}: NavDropdownProps) {
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
        <>
          <div className="fixed top-[44px] left-0 right-0 bottom-0 bg-black/30 backdrop-blur-sm z-45" />
          <div className="fixed top-[44px] left-0 right-0 bg-white shadow-xl animate-slideDown z-46">
            <div className="max-w-[980px] mx-auto py-8 px-4">
              <div className="grid grid-cols-3 gap-12">
                {items.map((section, index) => (
                  <div key={index} className="flex flex-col gap-3">
                    <h3 className="text-[12px] text-gray-500 font-medium tracking-wider uppercase">
                      {section.section}
                    </h3>
                    <ul className="flex flex-col gap-2">
                      {section.links.map((item, linkIndex) => (
                        <li key={linkIndex}>
                          <a 
                            href={item.link}
                            className={`text-[17px] hover:text-[#06c] transition-colors ${
                              item.featured ? 'font-semibold' : 'text-[#1d1d1f]'
                            }`}
                          >
                            {item.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </li>
  );
}