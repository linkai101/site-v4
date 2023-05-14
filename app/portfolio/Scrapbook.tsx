import ContentHead from './ContentHead';

import BrowserFrame from 'components/BrowserFrame';

export function Thumbnail() {
  return <div className="h-full px-6 py-12 bg-stone-800 flex justify-center items-center relative overflow-hidden">
    <img
      src="/assets/portfolio/scrapbook-flag.svg"
      className="absolute h-16 top-0 left-6"
    />
    <img
      src="/assets/portfolio/scrapbook.png"
      className="my-6"
    />
  </div>;
}

export function Content() {
  return <ContentHead
    title="Blair Hack Club's Scrapbook"
    links={[
      { label: "website", href: "https://blair.hackclub.com/scrapbook" },
      { label: "github (site)", href: "https://github.com/blairhackclub/site-v2/tree/master/pages/scrapbook" },
      { label: "github (scrappy)", href: "https://github.com/blairhackclub/scrappy" },
    ]}
  >
    <p className="text-md font-light">
      A project-sharing platform I made for Blair Hack Club where members can share updates on their personal portfolio and activities on Discord and the posts are displayed in an online scrapbook. (August 2022)
    </p>

    <BrowserFrame src="/assets/portfolio/scrapbook-mockup.png" className="mt-8"/>
  </ContentHead>;
}