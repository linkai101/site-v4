import React from 'react';

export default function BrowserFrame({ src, caption, ...rest }: { src: string; caption?: string, [key: string]: any; }) {
  return (
    <div {...rest}>
      <div
        className="rounded-xl shadow-lg overflow-hidden"
      >
        <div className="flex gap-4 bg-theme-surface">
          <div className="px-3 py-2 flex items-center gap-1.5">
            <div className="h-3 w-3 rounded-full bg-red-400"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
            <div className="h-3 w-3 rounded-full bg-green-400"></div>
          </div>
        </div>

        <div className="w-full max-h-96 overflow-y-scroll rounded-b-xl">
          <img
            src={src}
            alt={caption}
          />
        </div>
      </div>

      {caption && <p className="text-sm text-theme-onBackground/50 mt-2">{caption}</p>}
    </div>
  )
}
