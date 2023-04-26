import ContentHead from './ContentHead';

import BrowserFrame from 'components/BrowserFrame';

export function Thumbnail() {
  return <div className="h-full px-4 py-4 bg-neutral-200/50 flex justify-center items-center relative overflow-hidden">
    <img
      src="/assets/portfolio/wordle.png"
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-8"
    />
    <img
      src="/assets/portfolio/wordle-icon.png"
      className="h-36 opacity-10"
    />
  </div>;
}

export function Content() {
  return <ContentHead
    title="Wordle Archive"
    links={[
      { label: "website", href: "https://wordle.linkaiwu.com" },
      { label: "github", href: "https://github.com/linkai101/wordle" },
    ]}
  >
    <p className="text-md font-light">
      A clone of NYT's Wordle game, with playable records of all current and past Wordle challenges.
    </p>

    <BrowserFrame src="/assets/portfolio/wordle-mockup.png" className="mt-8"/>
  </ContentHead>;
}