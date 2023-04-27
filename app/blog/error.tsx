'use client';
import { useEffect } from 'react';

export default function BlogError({ error, reset }: { error: Error, reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return <>
   <div className="px-6 pt-20 pb-6 container max-w-4xl">
      <h1 className="text-4xl font-bold font-display">
        Error
      </h1>

      <p className="mt-1">
        Something went wrong! (/blog)
      </p>

      <button
        className="px-3 py-1.5 font-medium text-theme-primaryVariant bg-theme-primaryVariant/10 hover:bg-theme-primaryVariant/20 rounded-lg mt-4"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  </>;
}
