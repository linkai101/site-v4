import React from 'react';
import Link from 'next/link';

interface ContentHeadProps {
  title: string;
  links?: { label: string; href: string; }[];
  children: React.ReactNode;
}

export default function ContentHead({ title, links, children }: ContentHeadProps) {
  return <div className="p-8">
    <div className="flex flex-col sm:flex-row sm:items-end gap-2 sm:gap-4">
      <h2 className="flex-1 text-2xl font-bold -mb-2">
        {title}
      </h2>
      <div className="flex gap-2.5">
        {links?.map((link: { label: string; href: string; }) => 
          <Link href={link.href} target="_blank" rel="noopener noreferrer">
            <div className="px-2 py-1 text-xs text-theme-primary font-semibold hover:underline border-2 decoration-[1.5px] decoration-theme-primary border-theme-primary rounded-full" key={link.label}>
              <span>{link.label}</span>
            </div>
          </Link>
        )}
      </div>
    </div>
    
    <div className="mt-4 sm:mt-2.5">
      {children}
    </div>

    {/* <h3 className="text-lg font-bold mt-8">
      Related blog posts
    </h3>
    <div className="flex gap-4 mt-1.5">
      <div className="h-20 w-56 bg-theme-primaryVariant/50 rounded-md"/>
    </div>

    <h3 className="text-lg font-bold mt-8">
      Tags
    </h3>
    <div className="flex gap-2.5 mt-1.5">
      <div className="h-6 w-20 bg-theme-primaryVariant/50 rounded-full"/>
      <div className="h-6 w-20 bg-theme-primaryVariant/50 rounded-full"/>
      <div className="h-6 w-20 bg-theme-primaryVariant/50 rounded-full"/>
    </div> */}
  </div>;
}
