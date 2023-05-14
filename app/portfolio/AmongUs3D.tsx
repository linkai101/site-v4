import ContentHead from './ContentHead';

import BrowserFrame from 'components/BrowserFrame';

export function Thumbnail() {
  return <div
    className="h-full px-4 py-2 flex items-center justify-center relative overflow-hidden"
  >
    <img
      src="/assets/portfolio/amongus3d-bg.jpg"
      className="absolute w-full h-full object-cover object-center -z-10"
    />
    <img
      src="/assets/portfolio/amongus3d.png"
      className="h-36 translate-y-4"
    />
  </div>;
}

export function Content() {
  return <ContentHead
    title="3D Among Us Clone"
    links={[
      { label: "releases", href: "https://github.com/linkai101/Among-Us-3D/releases" },
      { label: "github", href: "https://github.com/linkai101/Among-Us-3D" },
    ]}
  >
    <p className="text-md font-light">
      A clone of Among Us I made in 3D using Unity. (October 2020)
    </p>

    <p className="text-md font-light mt-8">
      I first recreated the Skeld map with a few asset packs and added a functional minimap, admin room, and security cams.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mt-8">
      <BrowserFrame
        src="/assets/portfolio/amongus3d-1.png"
        caption="The Skeld, cafeteria"
      />

      <BrowserFrame
        src="/assets/portfolio/amongus3d-2.png"
        caption="The Skeld, admin room"
      />

      <BrowserFrame
        src="/assets/portfolio/amongus3d-3.png"
        caption="The Skeld, security room"
      />
    </div>

    <p className="text-md font-light mt-8">
      I also made the Polus map, but with mostly polygons and materials that I made myself with an in-editor tool in Unity. I also added multiplayer and room support.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mt-8">
      <BrowserFrame
        src="/assets/portfolio/amongus3d-4.png"
        caption="Multiplayer menu"
      />

      <BrowserFrame
        src="/assets/portfolio/amongus3d-5.png"
        caption="Polus, O2 room"
      />

      <BrowserFrame
        src="/assets/portfolio/amongus3d-6.png"
        caption="Polus, office room"
      />

      <BrowserFrame
        src="/assets/portfolio/amongus3d-7.png"
        caption="Polus, map view"
      />
    </div>
  </ContentHead>;
}
