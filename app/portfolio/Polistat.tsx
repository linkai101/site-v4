import ContentHead from './ContentHead';

import BrowserFrame from 'components/BrowserFrame';

export function Thumbnail() {
  return <div
    className="h-full px-4 py-2 flex items-center justify-center relative bg-gradient-to-br from-blue-500/10 to-red-500/10 overflow-hidden"
  >
    <img
      src="/assets/portfolio/polistat.svg"
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-12"
    />
    <img
      src="/assets/portfolio/polistat-overlay.svg"
      className="h-44"
    />
  </div>;
}

export function Content() {
  return <ContentHead
    title="ORACLE of Blair"
    links={[
      { label: "website", href: "https://polistat.mbhs.edu" },
      { label: "github", href: "https://github.com/polistat/site-2022" },
    ]}
  >
    <p className="text-md font-light">
      A project by '23 seniors at Montgomery Blair HS. Our political statistics class modeled the 2022 U.S. Senate and gubernatorial elections based on each race's demographics, voting history, and live polling data. I created the website and aided in the coordination of the project.
    </p>

    <BrowserFrame src="/assets/portfolio/polistat-mockup.png" className="mt-8"/>
  </ContentHead>;
}
