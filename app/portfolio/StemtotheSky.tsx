import ContentHead from './ContentHead';

import BrowserFrame from 'components/BrowserFrame';

export function Thumbnail() {
  return <div className="h-full px-4 py-8 flex items-center justify-center relative overflow-hidden">
    <img
      src="/assets/portfolio/stts-bg.png"
      className="absolute w-full h-full object-cover object-center opacity-60 -z-10"
    />
    <img
      src="/assets/portfolio/stts.png"
      className="h-24 rounded-full"
    />
  </div>;
}

export function Content() {
  return <ContentHead
    title="STEM to the Sky's website"
    links={[
      { label: "website", href: "https://stemtothesky.org" },
    ]}
  >
    <p className="text-md font-light">
      A student-led nonprofit dedicated to showcasing careers, fields, and opportunities in STEM through interviews and events with professionals. I designed and developed the website!
    </p>

    <BrowserFrame src="/assets/portfolio/stts-mockup.png" className="mt-8"/>
  </ContentHead>;
}