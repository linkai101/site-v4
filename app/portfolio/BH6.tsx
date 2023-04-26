import ContentHead from './ContentHead';

import BrowserFrame from 'components/BrowserFrame';

export function Thumbnail() {
  return <div className="h-full px-4 py-12 flex items-center justify-center relative bg-black/50 overflow-hidden">
    <img
      src="/assets/portfolio/bh6-bg.png"
      className="absolute w-full h-full object-cover object-center -z-10"
    />
    <img
      src="/assets/portfolio/bh6.png"
      className="h-24"
    />
  </div>;
}

export function Content() {
  return <ContentHead
    title="BlairHacks_6 website"
    links={[
      { label: "website", href: "https://6.blairhacks.com" },
      { label: "github", href: "https://github.com/blairhacks/blairhacks_6" },
    ]}
  >
    <p className="text-md font-light">
      A 2-day high school hackathon on March 25-26, 2023 at Montgomery College Rockville. I directed the event and designed the website!
    </p>
    
    <BrowserFrame src="/assets/portfolio/bh6-mockup.png" className="mt-8"/>
  </ContentHead>;
}
