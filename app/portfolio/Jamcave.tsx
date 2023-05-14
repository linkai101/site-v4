import ContentHead from './ContentHead';

export function Thumbnail() {
  return <div className="h-full px-4 py-12 bg-cyan-600/75 flex justify-center items-center overflow-hidden">
    <img
      src="/assets/portfolio/jamcave.svg"
      className="h-10 my-4"
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
      A collaborative whiteboard app that lets you create and share drawings with others in real time. (October 2021)
    </p>
  </ContentHead>;
}

