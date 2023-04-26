'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

export default function Navbar() {
  const showLogo = usePathname() !== '/';
  const onPrimary = usePathname() === '/';

  return <nav className="absolute top-0 w-full z-40"> {/*bg-theme-background/90 backdrop-blur-sm*/}
    <div className={`container max-w-4xl px-6 py-6 pb-2 flex items-center ${onPrimary ? 'text-theme-onPrimary' : 'text-theme-onBackground'}`}>
      <div className="pr-6">
        <Link href="/">
          <div className="flex items-center">
            <motion.div
              initial={{
                x: showLogo ? 0 : -25,
                opacity: showLogo ? 1 : 0,
                width: showLogo ? 'auto' : 0,
                marginRight: showLogo ? 12 : 0,
              }}
              animate={{
                x: showLogo ? 0 : -25,
                opacity: showLogo ? 1 : 0,
                width: showLogo ? 'auto' : 0,
                marginRight: showLogo ? 12 : 0,
              }}
              transition={{ duration: 0.5 }}
            >
              <div className="h-8 w-8 flex justify-center items-center shrink-0 bg-black/5 rounded-full overflow-hidden">
                <img
                  src="/assets/linkai-transparent.png"
                  className="sepia-[.5] scale-150 -mt-0.5"
                />
              </div>
            </motion.div>

            <span className="text-xl font-semibold font-display whitespace-nowrap">
              Linkai Wu
            </span>
          </div>
        </Link>
      </div>

      <ul className={`flex gap-3 text-right font-display z-50 ${onPrimary ? 'text-theme-onPrimary/40' : 'text-theme-onBackground/40'}`}>
        <Link href="/">
          <li className={`${onPrimary ? 'hover:text-theme-onPrimary' : 'hover:text-theme-onBackground'} hover:drop-shadow-sm cursor-pointer transition duration-200 ease-out hover:ease-in`}>
            home
          </li>
        </Link>

        <Link href="/portfolio">
          <li className={`${onPrimary ? 'hover:text-theme-onPrimary' : 'hover:text-theme-onBackground'} hover:drop-shadow-sm cursor-pointer transition duration-200 ease-out hover:ease-in`}>
            portfolio
          </li>
        </Link>
      </ul>
    </div>
  </nav>;
}
