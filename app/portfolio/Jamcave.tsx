import ContentHead from './ContentHead';

export function Thumbnail() {
  return <div className="h-full py-12 bg-cyan-600/75 flex justify-center items-center overflow-hidden">
    <img
      src="/assets/portfolio/jamcave.svg"
      className="h-10"
    />
  </div>;
}

export function Content() {
  return <ContentHead
    title="Jamcave"
    links={[
      { label: "website", href: "https://jamcave.linkaiwu.com" },
      { label: "github", href: "https://github.com/linkai101/jamcave" },
    ]}
  >
    <p className="text-md font-light">
      A collaborative whiteboard app that lets you create and share notes with others in real time.
    </p>
  </ContentHead>;
}

