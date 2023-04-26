import React from 'react';

export default function BrowserFrame({ src, ...rest }: { src: string; [key: string]: any; }) {
  return (
    <div {...rest}>
      <div
        className="rounded-xl shadow-2xl overflow-hidden"
      >
        <div className="flex gap-4 bg-theme-surface">
          <div className="px-3 py-2 flex items-center gap-1.5">
            <div className="h-3 w-3 rounded-full bg-red-400"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
            <div className="h-3 w-3 rounded-full bg-green-400"></div>
          </div>
        </div>

        <div className="w-full aspect-video overflow-y-scroll rounded-b-xl">
          <img src={src}/>
        </div>
      </div>
    </div>
  )
}
