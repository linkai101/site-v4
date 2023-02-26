import ContentHead from './ContentHead';

export function Thumbnail() {
  return <div className="h-full py-12 bg-stone-800 flex items-center justify-center relative overflow-hidden">
    <img
      src="/assets/portfolio/bongocat-overlay.png"
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-2 h-16 opacity-25"
    />
    <img
      src="/assets/portfolio/bongocat.png"
      className="h-24 z-10"
    />
  </div>;
}

export function Content() {
  return <ContentHead
    title="Bongo Cat"
    links={[
      { label: "website", href: "https://bongocat.linkaiwu.com" },
      { label: "github", href: "https://github.com/linkai101/bongocat" },
    ]}
  >
    <p className="text-md font-light">
      A bongo cat instrument emulator with a playable virtual piano, bongos, and drumset. This was inspired by the popular bongo cat meme.
    </p>
  </ContentHead>;
}
