import { type FooterSection } from './types';

const footerSections: FooterSection[] = [
  {
    title: 'Shop and Learn',
    links: [
      { title: 'Store', url: '/store' },
      { title: 'Mac', url: '/mac' },
      { title: 'iPad', url: '/ipad' },
      { title: 'iPhone', url: '/iphone' },
      { title: 'Watch', url: '/watch' },
      { title: 'Vision', url: '/vision' },
      { title: 'AirPods', url: '/airpods' },
      { title: 'TV & Home', url: '/tv-home' },
      { title: 'AirTag', url: '/airtag' },
      { title: 'Accessories', url: '/accessories' },
      { title: 'Gift Cards', url: '/gift-cards' }
    ]
  },
  {
    title: 'Apple Wallet',
    links: [
      { title: 'Wallet', url: '/wallet' },
      { title: 'Apple Pay', url: '/apple-pay' }
    ]
  },
  {
    title: 'Account',
    links: [
      { title: 'Manage Your Apple Account', url: '/account' },
      { title: 'Apple Store Account', url: '/store-account' },
      { title: 'iCloud.com', url: '/icloud' }
    ]
  },
  {
    title: 'Entertainment',
    links: [
      { title: 'Apple One', url: '/apple-one' },
      { title: 'Apple TV+', url: '/tv-plus' },
      { title: 'Apple Music', url: '/music' },
      { title: 'Apple Arcade', url: '/arcade' },
      { title: 'Apple Fitness+', url: '/fitness-plus' },
      { title: 'Apple News+', url: '/news-plus' },
      { title: 'Apple Podcasts', url: '/podcasts' },
      { title: 'Apple Books', url: '/books' },
      { title: 'App Store', url: '/app-store' }
    ]
  },
  {
    title: 'Apple Store',
    links: [
      { title: 'Find a Store', url: '/store-finder' },
      { title: 'Genius Bar', url: '/genius-bar' },
      { title: 'Today at Apple', url: '/today' },
      { title: 'Apple Camp', url: '/apple-camp' },
      { title: 'Apple Store App', url: '/store-app' },
      { title: 'Certified Refurbished', url: '/refurbished' },
      { title: 'Apple Trade In', url: '/trade-in' },
      { title: 'Financing', url: '/financing' },
      { title: 'Carrier Deals at Apple', url: '/carrier-deals' },
      { title: 'Order Status', url: '/order-status' },
      { title: 'Shopping Help', url: '/shopping-help' }
    ]
  },
  {
    title: 'For Business',
    links: [
      { title: 'Apple and Business', url: '/business' },
      { title: 'Shop for Business', url: '/business-shop' }
    ]
  },
  {
    title: 'For Education',
    links: [
      { title: 'Apple and Education', url: '/education' },
      { title: 'Shop for K-12', url: '/education-k12' },
      { title: 'Shop for University', url: '/education-university' }
    ]
  },
  {
    title: 'For Healthcare',
    links: [
      { title: 'Apple in Healthcare', url: '/healthcare' },
      { title: 'Health on Apple Watch', url: '/healthcare-watch' },
      { title: 'Health Records on iPhone', url: '/healthcare-records' }
    ]
  },
  {
    title: 'Apple Values',
    links: [
      { title: 'Accessibility', url: '/accessibility' },
      { title: 'Education', url: '/education-initiative' },
      { title: 'Environment', url: '/environment' },
      { title: 'Privacy', url: '/privacy' },
      { title: 'Racial Equity and Justice', url: '/racial-equity' },
      { title: 'Supplier Responsibility', url: '/supplier-responsibility' }
    ]
  },
  {
    title: 'About Apple',
    links: [
      { title: 'Newsroom', url: '/newsroom' },
      { title: 'Apple Leadership', url: '/leadership' },
      { title: 'Career Opportunities', url: '/careers' },
      { title: 'Investors', url: '/investors' },
      { title: 'Ethics & Compliance', url: '/ethics' },
      { title: 'Events', url: '/events' },
      { title: 'Contact Apple', url: '/contact' }
    ]
  }
];

export default function Footer() {
  return (
    <footer className="max-w-[980px] mx-auto py-8 text-xs">
      <div className="border-b border-[#d2d2d7] pb-4">
        <p className="text-[#6e6e73]">
        1. Offer valid on qualifying purchases of eligible Apple products from 29 November 2024 to 2 December 2024, at a Qualifying Location. Offer subject to availability. Qualifying purchasers can receive a discount equal to the value of the eligible Apple Gift Card off the price of the eligible product and will be charged for all items at check-out, including the Apple Gift Card. Customers purchasing eligible iPhone devices via carrier financing in Apple Store locations only are also eligible to receive an eligible Apple Gift Card. This offer cannot be combined with carrier financing on the Apple Online Store, on the Apple Store app or by calling 133-622. This offer also cannot be combined with the Apple Employee Purchase Plan, or education or business loyalty pricing. Some methods of payment types are not accepted under this offer. See check-out for details. Additional restrictions apply. View the full terms and conditions of the offer here.<br/><br/>
        2. Apple Intelligence is available in beta on all iPhone 16 models, iPhone 15 Pro, iPhone 15 Pro Max, iPad mini (A17 Pro), and iPad and Mac models with M1 and later, with Siri and device language set to US English, as part of an iOS 18, iPadOS 18 and macOS Sequoia update. English (Australia, Canada, Ireland, New Zealand, South Africa, UK) language support available this December. Some features and support for additional languages, like Chinese, English (India, Singapore), French, German, Italian, Japanese, Korean, Portuguese, Spanish, Vietnamese and others, will be coming over the course of the next year.<br/><br/>
        3. Available in two models: AirPods 4, and AirPods 4 with Active Noise Cancellation.<br/><br/>
        * Trade-in service is provided by Apple’s trade-in partners. Trade-in value quotes are estimated only and actual values may be lower than the estimation. Trade-in values vary based on the condition, year and model of your trade‑in device. Not all devices are eligible for credit. You must be at least the age of majority to be eligible to trade in for credit or for an Apple Gift Card. Trade-in value may be applied towards qualifying new device purchase, or added to an Apple Gift Card. Actual value awarded is based on receipt of a qualifying device matching the description provided when estimate was made. GST may be assessed on full value of a new device purchase. In‑store trade‑in requires presentation of a valid photo ID (local law may require saving this information). Offer may not be available in all stores, and may vary between in-store and online trade-in. Some stores may have additional requirements. Apple’s trade-in partners reserve the right to refuse, cancel or limit quantity of any trade-in transaction for any reason. More details are available from Apple’s trade-in partner for trade-in and recycling of eligible devices. Restrictions and limitations may apply.<br/><br/>
        Apple TV+ requires a subscription.
        <br/><br/>
Features are subject to change. Some features, applications and services may not be available in all regions or all languages.
        </p>
      </div>

      <div className="grid grid-cols-5 gap-x-12 gap-y-8 py-8">
        {footerSections.map((section, index) => (
          <div key={index} className="space-y-2">
            <h3 className="text-[#1d1d1f] font-semibold">{section.title}</h3>
            <ul className="space-y-2">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <a 
                    href={link.url}
                    className="text-[#424245] hover:underline"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-[#d2d2d7] pt-4 text-[#6e6e73]">
        <p className="mb-3">
          More ways to shop: <a href="/store-finder" className="text-[#06c] hover:underline">Find an Apple Store</a> or <a href="/other-retailers" className="text-[#06c] hover:underline">other retailer</a> near you. Or call 133-622.
        </p>
        <div className="flex justify-between items-center">
          <p>Copyright © 2024 Apple Inc. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="/privacy" className="hover:underline">Privacy Policy</a>
            <span>|</span>
            <a href="/terms" className="hover:underline">Terms of Use</a>
            <span>|</span>
            <a href="/sales" className="hover:underline">Sales and Refunds</a>
            <span>|</span>
            <a href="/legal" className="hover:underline">Legal</a>
            <span>|</span>
            <a href="/sitemap" className="hover:underline">Site Map</a>
          </div>
          <p>Australia</p>
        </div>
      </div>
    </footer>
  );
}