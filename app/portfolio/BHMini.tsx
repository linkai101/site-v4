import ContentHead from './ContentHead';

import BrowserFrame from 'components/BrowserFrame';

export function Thumbnail() {
  return <div className="h-full px-4 py-12 flex items-center justify-center relative bg-black/50 overflow-hidden">
    <img
      src="/assets/portfolio/bhmini-bg.png"
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
    title="BlairHacks Mini 2022 website"
    links={[
      { label: "website", href: "https://mini.blairhacks.com" },
      { label: "github", href: "https://github.com/blairhacks/blairhacks-mini-2022" },
    ]}
  >
    <p className="text-md font-light">
      An 8-hour high school mini-hackathon on December 10, 2022 at Rockville Memorial Library. I directed the event and designed the website!
    </p>

    <BrowserFrame src="/assets/portfolio/bhmini-mockup.png" className="mt-8"/>
  </ContentHead>;
}
