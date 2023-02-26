'use client';

import React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

import { Thumbnail as PolistatThumbnail, Content as PolistatContent } from './Polistat';
import { Thumbnail as StemtotheSkyThumbnail, Content as StemtotheSkyContent } from './StemtotheSky';
import { Thumbnail as BhcThumbnail, Content as BhcContent } from './Bhc';
import { Thumbnail as ScrapbookThumbnail, Content as ScrapbookContent } from './Scrapbook';
import { Thumbnail as CodeletThumbnail, Content as CodeletContent } from './Codelet';
import { Thumbnail as JamcaveThumbnail, Content as JamcaveContent } from './Jamcave';
import { Thumbnail as WordleThumbnail, Content as WordleContent } from './Wordle';
import { Thumbnail as BongoCatThumbnail, Content as BongoCatContent } from './BongoCat';

import { FiX } from 'react-icons/fi';


const projects: { [id:string]: any; } = {
  wordle: {
    title: "Wordle Archive",
    description: "A clone of NYT's Wordle game, with playable records of all current and past Wordle challenges.",
    links: [
      { label: "website", href: "https://wordle.linkaiwu.com" },
      { label: "github", href: "https://github.com/linkai101/wordle" },
    ]
  },
}


export default function PortfolioPage() {
  const [selectedProject, setSelectedProject] = React.useState<string|null>(null);

  return <>
    <div className="px-6 pt-20 pb-6 container max-w-4xl">
      {/* <div className="flex">
        <Link href="/">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 flex justify-center items-center bg-gradient-to-br from-theme-primary to-theme-background rounded-full overflow-hidden">
              <img
                // src="/assets/linkai-transparent.png"
                src="/assets/memoji.png"
              />
            </div>

            <span className="text-xl font-semibold font-display">
              Linkai Wu
            </span>
          </div>
        </Link>
      </div> */}

      <h1 className="text-4xl font-bold font-display">
        Portfolio
      </h1>
    </div>
    
    <div className="px-6 pt-8 pb-16 container max-w-4xl">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <motion.div
          className="md:col-span-8 shadow-md"
          onClick={() => setSelectedProject('polistat')}
          whileHover={{ scale: 1.01 }}
        >
          <PolistatThumbnail/>
        </motion.div>
        <motion.div
          className="md:col-span-4 shadow-md"
          onClick={() => setSelectedProject('stemtothesky')}
          whileHover={{ scale: 1.01 }}
        >
          <StemtotheSkyThumbnail/>
        </motion.div>
        <motion.div
          className="md:col-span-3 shadow-md"
          onClick={() => setSelectedProject('bhc')}
          whileHover={{ scale: 1.01 }}
        >
          <BhcThumbnail/>
        </motion.div>
        <motion.div
          className="md:col-span-6 shadow-md"
          onClick={() => setSelectedProject('scrapbook')}
          whileHover={{ scale: 1.01 }}
        >
          <ScrapbookThumbnail/>
        </motion.div>
        {/* <motion.div
          className="md:col-span-3 shadow-md"
          onClick={() => setSelectedProject('codelet')}
          whileHover={{ scale: 1.01 }}
        >
          <CodeletThumbnail/>
        </motion.div> */}
        <motion.div
          className="md:col-span-3 shadow-md"
          onClick={() => setSelectedProject('bongocat')}
          whileHover={{ scale: 1.01 }}
        >
          <BongoCatThumbnail/>
        </motion.div>

        <motion.div
          className="md:col-span-6 shadow-md"
          onClick={() => setSelectedProject('jamcave')}
          whileHover={{ scale: 1.01 }}
        >
          <JamcaveThumbnail/>
        </motion.div>
        <motion.div
          className="md:col-span-6 shadow-md"
          onClick={() => setSelectedProject('wordle')}
          whileHover={{ scale: 1.01 }}
        >
          <WordleThumbnail/>
        </motion.div>

        {/* <motion.div
          className="md:col-span-4 shadow-md"
          onClick={() => setSelectedProject('bongocat')}
          whileHover={{ scale: 1.01 }}
        >
          <BongoCatThumbnail/>
        </motion.div>
        <div className="hidden md:block bg-theme-primaryVariant/25 md:col-span-4 shadow-inner"></div>
        <div className="hidden md:block bg-theme-primaryVariant/25 md:col-span-4 shadow-inner"></div> */}
      </div>
    </div>

    <AnimatePresence>
      {selectedProject && <>
        <motion.div
          className="px-4 pb-12 pt-36 fixed inset-0 bg-black/20 overflow-y-auto z-40"
          onClick={() => setSelectedProject(null)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <section
            className="container max-w-3xl relative z-40"
            onClick={e => e.stopPropagation()}
          >
            <div className="bg-theme-surface/[0.97] backdrop-blur-sm drop-shadow-md rounded-xl overflow-hidden">
              <div className="h-48">
                {
                  selectedProject === 'polistat' ? <PolistatThumbnail/>
                  : selectedProject === 'stemtothesky' ? <StemtotheSkyThumbnail/>
                  : selectedProject === 'bhc' ? <BhcThumbnail/>
                  : selectedProject === 'scrapbook' ? <ScrapbookThumbnail/>
                  : selectedProject === 'codelet' ? <CodeletThumbnail/>
                  : selectedProject === 'jamcave' ? <JamcaveThumbnail/>
                  : selectedProject === 'wordle' ? <WordleThumbnail/>
                  : selectedProject === 'bongocat' ? <BongoCatThumbnail/>
                  : null
                }
              </div>

              {
                selectedProject === 'polistat' ? <PolistatContent/>
                : selectedProject === 'stemtothesky' ? <StemtotheSkyContent/>
                : selectedProject === 'bhc' ? <BhcContent/>
                : selectedProject === 'scrapbook' ? <ScrapbookContent/>
                : selectedProject === 'codelet' ? <CodeletContent/>
                : selectedProject === 'jamcave' ? <JamcaveContent/>
                : selectedProject === 'wordle' ? <WordleContent/>
                : selectedProject === 'bongocat' ? <BongoCatContent/>
                : null
              }
            </div>

            <button
              className="p-2 absolute -top-14 right-0 text-theme-onBackground/40 hover:text-theme-primary bg-theme-surface/50 hover:bg-theme-surface/75 rounded-full z-50 transition ease-in-out duration-300"
              onClick={() => setSelectedProject(null)}
            >
              <FiX size="1.5rem" className="stroke-[2.5px]"/>
            </button>
          </section>
        </motion.div>
        
        <style jsx global>{`
        body {
          overflow: hidden;
        }
        `}</style>
      </>}
    </AnimatePresence>
  </>;
}
