import ContentHead from './ContentHead';

import BrowserFrame from 'components/BrowserFrame';

export function Thumbnail() {
  return <div
    className="h-full px-4 py-2 flex items-center justify-center relative bg-[#fbeee4]/80 overflow-hidden"
  >
    <img
      src="/assets/portfolio/classmanager-bg.png"
      className="absolute w-full h-full object-cover object-center -z-10"
    />
    <img
      src="/assets/portfolio/classmanager.png"
      className="max-h-14"
    />
  </div>;
}

export function Content() {
  return <ContentHead
    title="Class Manager"
    links={[
      { label: "website (v2)", href: "https://classes.linkaiwu.com" },
      { label: "github (v2)", href: "https://github.com/linkai101/classes2" },
      { label: "github (v1)", href: "https://github.com/linkai101/classes" },
    ]}
  >
    <p className="text-md font-light">
      A class manager website I made during the COVID-19 pandemic to help students manage their virtual classes and assignments. (Early 2021)
    </p>

    <BrowserFrame
      src="/assets/portfolio/classmanager-mockup.png"
      className="mt-8"
      caption="v2, made with Next.js and Firebase."
    />

    <BrowserFrame
      src="/assets/portfolio/classmanager-mockup-old.png"
      className="mt-8"
      caption="The original (v1), made with Create React App."
    />
  </ContentHead>;
}
