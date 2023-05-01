import Link from 'next/link';
import Image from 'next/image';
import probe from 'probe-image-size';

import CodeBlock from 'components/CodeBlock';

export default {
  p: ({ children }:any) => {
    if (children && children[0]
      && children.length === 1
      && children[0].props
      && children[0].props.src) {
      return children;
    }
    return <p className="text-base mt-3">{children}</p>
  },
  h1: ({ children }:any) => <h1 className="text-3xl font-bold mt-7">{children}</h1>,
  h2: ({ children }:any) => <h2 className="text-2xl font-bold mt-6">{children}</h2>,
  h3: ({ children }:any) => <h3 className="text-xl font-bold mt-5">{children}</h3>,
  a: ({ children, href }:any) => <Link className="text-theme-primaryVariant hover:text-theme-primary underline underline-offset-2" href={href}>{children}</Link>,
  ul: ({ children, className }:any) => (
    className === 'contains-task-list' ? <ul className="pl-4 list-none list-inside mt-3">{children}</ul>
    : <ul className="pl-4 list-disc list-inside mt-3">{children}</ul>
  ),
  ol: ({ children }:any) => <ol className="pl-4 list-decimal list-inside mt-3">{children}</ol>,
  li: ({ children, className }:any) => (
    // TODO: add spacing between checkbox and text
    className === 'task-list-item' ? <li className="text-base mt-2">{children}</li>
    : <li className="text-base mt-2">{children}</li>
  ),
  pre: ({ children }:any) => <pre className="mt-2 mb-2">{children}</pre>,
  code: (props:any) => <CodeBlock {...props}/>,
  hr: () => <hr className="my-4 border-theme-onBackground/10"/>,
  table: ({ children }:any) => <table className="table-auto mt-3">{children}</table>,
  // thead: ({ children }:any) => <thead className="">{children}</thead>,
  // tbody: ({ children }:any) => <tbody className="">{children}</tbody>,
  // tr: ({ children }:any) => <tr className="">{children}</tr>,
  th: ({ children }:any) => <th className="min-w-[3rem] px-2 py-1.5 text-left bg-theme-surface border border-theme-onBackground/10">{children}</th>,
  td: ({ children }:any) => <td className="min-w-[3rem] px-2 py-1.5 border border-theme-onBackground/10">{children}</td>,
  blockquote: ({ children }:any) => <blockquote className="mt-3 mb-3 pl-4 border-l-4 border-theme-onBackground/10">{children}</blockquote>,
  details: ({ children }:any) => <details className="pl-3 mt-3 mb-3">{children}</details>,
  summary: ({ children }:any) => <summary className="-ml-3 cursor-pointer">{children}</summary>,
  // img: ({ src, alt }:any) => (
  //   <div className="container max-w-xl my-8">
  //     <img src={src} alt={alt} className="w-full"/>
  //     {alt && <p className="text-sm text-theme-onBackground/50 mt-1.5">{alt}</p>}
  //   </div>
  // ),
  img: async ({ src, alt }:any) => {
    const dimensions = await probe(src);
    return (
      <div className="container max-w-xl my-8">
        <Image
          width={dimensions.width}
          height={dimensions.height}
          src={src}
          alt={alt}
          className="w-full"
        />
        {alt && <p className="text-sm text-theme-onBackground/50 mt-1.5">{alt}</p>}
      </div>
    );
  },
};