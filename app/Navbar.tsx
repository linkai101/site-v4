'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

export default function Navbar() {
  const showLogo = usePathname() !== '/';

//   return <nav className="fixed right-0 h-full z-40">
//     <ul className="p-8 flex flex-col gap-1.5 text-right text-lg font-display text-theme-onBackground/40">
//       <Link href="/">
//         <li className="hover:text-theme-primary hover:drop-shadow-sm cursor-pointer transition duration-200 ease-out hover:ease-in">
//           home
//         </li>
//       </Link>

//       <Link href="/portfolio">
//         <li className="hover:text-theme-primary hover:drop-shadow-sm cursor-pointer transition duration-200 ease-out hover:ease-in">
//           portfolio
//         </li>
//       </Link>
//     </ul>
//   </nav>;

  return <nav className="absolute top-0 w-full z-40"> {/*bg-theme-background/90 backdrop-blur-sm*/}
    <div className="container max-w-4xl px-6 py-6 pb-2 flex items-center">
      <motion.div
        initial={{
          x: showLogo ? 0 : -25,
          opacity: showLogo ? 1 : 0,
          width: showLogo ? 'auto' : 0,
        }}
        animate={{
          x: showLogo ? 0 : -25,
          opacity: showLogo ? 1 : 0,
          width: showLogo ? 'auto' : 0,
        }}
        transition={{ duration: 0.5 }}
      >
        <div className="pr-6">
        <Link href="/">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 flex justify-center items-center shrink-0 bg-gradient-to-br from-theme-primary to-theme-background rounded-full overflow-hidden">
              <img
                src="/assets/linkai-transparent.png"
                // src="/assets/memoji.png"
              />
            </div>

            <span className="text-xl font-semibold font-display whitespace-nowrap">
              Linkai Wu
            </span>
          </div>
        </Link>
        </div>
      </motion.div>

      <ul className="flex gap-3 text-right font-display text-theme-onBackground/40 z-50">
        <Link href="/">
          <li className="hover:text-theme-primary hover:drop-shadow-sm cursor-pointer transition duration-200 ease-out hover:ease-in">
            home
          </li>
        </Link>

        <Link href="/portfolio">
          <li className="hover:text-theme-primary hover:drop-shadow-sm cursor-pointer transition duration-200 ease-out hover:ease-in">
            portfolio
          </li>
        </Link>
      </ul>
    </div>
  </nav>;
}
