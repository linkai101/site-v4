import ContentHead from './ContentHead';

export function Thumbnail() {
  return <div className="h-full py-4 flex items-center justify-center relative overflow-hidden">
    <img
      src="/assets/portfolio/codelet-bg.png"
      className="absolute w-full h-full object-cover object-center -z-10"
    />
    <img
      src="/assets/portfolio/codelet.png"
      className="h-32"
    />
  </div>;
}

export function Content() {
  return <ContentHead
    title="Codelet"
    links={[
      { label: "website", href: "https://codelet.org" },
    ]}
  >
    <p className="text-md font-light">
      A work-in-progress project I started to share interactive computer science lessons, games, and educator tools to raise exposure for creative expression in CS education.
    </p>
  </ContentHead>;
}
