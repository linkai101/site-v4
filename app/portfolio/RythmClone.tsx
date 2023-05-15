import ContentHead from './ContentHead';

export function Thumbnail() {
  return <div
    className="h-full px-4 py-12 flex items-center justify-center relative bg-stone-800 overflow-hidden"
  >
    <img
      src="/assets/portfolio/rythmclone.svg"
      className="h-16"
    />
  </div>;
}

export function Content() {
  return <ContentHead
    title="Rythm Clone"
    links={[
      { label: "github", href: "https://github.com/linkai101/mhtyr" },
    ]}
  >
    <p className="text-md font-light">
      I made a clone of Rythm, a popular music Discord bot, after it was shut down in 2021. (September 2021)
    </p>
  </ContentHead>;
}
