import ContentHead from './ContentHead';

export function Thumbnail() {
  return <div className="h-full py-12 bg-stone-800 flex justify-center items-center relative overflow-hidden">
    <img
      src="/assets/portfolio/bhcscrap-flag.svg"
      className="absolute h-16 top-0 left-6"
    />
    <img
      src="/assets/portfolio/bhcscrap.png"
      className="w-10/12"
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
      A project-sharing platform I made for Blair Hack Club where members can share updates on their personal projects and activities on Discord and the posts are displayed in an online scrapbook.
    </p>
  </ContentHead>;
}