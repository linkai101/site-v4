'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

import { Thumbnail as PolistatThumbnail, Content as PolistatContent } from './Polistat';
import { Thumbnail as StemtotheSkyThumbnail, Content as StemtotheSkyContent } from './StemtotheSky';
import { Thumbnail as BH6Thumbnail, Content as BH6Content } from './BH6';
import { Thumbnail as ScrapbookThumbnail, Content as ScrapbookContent } from './Scrapbook';
import { Thumbnail as BHMiniThumbnail, Content as BHMiniContent } from './BHMini';
import { Thumbnail as JamcaveThumbnail, Content as JamcaveContent } from './Jamcave';
import { Thumbnail as WordleThumbnail, Content as WordleContent } from './Wordle';
import { Thumbnail as BongoCatThumbnail, Content as BongoCatContent } from './BongoCat';

import { FiX } from 'react-icons/fi';

const projects: {
  [key: string]: {
    thumbnail: React.ReactNode,
    content: React.ReactNode,
  },
} = {
  polistat: {
    thumbnail: <PolistatThumbnail/>,
    content: <PolistatContent/>,
  },
  stemtothesky: {
    thumbnail: <StemtotheSkyThumbnail/>,
    content: <StemtotheSkyContent/>,
  },
  bh6: {
    thumbnail: <BH6Thumbnail/>,
    content: <BH6Content/>,
  },
  scrapbook: {
    thumbnail: <ScrapbookThumbnail/>,
    content: <ScrapbookContent/>,
  },
  bhmini: {
    thumbnail: <BHMiniThumbnail/>,
    content: <BHMiniContent/>,
  },
  jamcave: {
    thumbnail: <JamcaveThumbnail/>,
    content: <JamcaveContent/>,
  },
  wordle: {
    thumbnail: <WordleThumbnail/>,
    content: <WordleContent/>,
  },
  bongocat: {
    thumbnail: <BongoCatThumbnail/>,
    content: <BongoCatContent/>,
  },
};

// @ts-ignore
export default function PortfolioPage({ searchParams }: { searchParams: { project?: string } }) {
  const { project } = searchParams;
  const router = useRouter();

  const [selectedProject, setSelectedProject] = React.useState<string|null>(project as string);

  function handleProjectClose() {
    setSelectedProject(null);
    router.replace('/portfolio');
  }

  function handleProjectOpen(project:string) {
    setSelectedProject(project);
    router.replace(`/portfolio?project=${project}`);
  }

  return <>
    <div className="px-6 pt-20 pb-6 container max-w-4xl">
      <h1 className="text-4xl font-bold font-display">
        Portfolio
      </h1>
    </div>
    
    <div className="px-6 pt-8 pb-16 container max-w-4xl">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* ROW 1 */}
        <motion.div
          className="md:col-span-8 shadow-md"
          onClick={() => handleProjectOpen('polistat')}
          whileHover={{ scale: 1.01 }}
        >
          <PolistatThumbnail/>
        </motion.div>
        <motion.div
          className="md:col-span-4 shadow-md"
          onClick={() => handleProjectOpen('stemtothesky')}
          whileHover={{ scale: 1.01 }}
        >
          <StemtotheSkyThumbnail/>
        </motion.div>

        {/* ROW 2 */}
        <motion.div
          className="md:col-span-3 shadow-md"
          onClick={() => handleProjectOpen('bh6')}
          whileHover={{ scale: 1.01 }}
        >
          <BH6Thumbnail/>
        </motion.div>
        <motion.div
          className="md:col-span-6 shadow-md"
          onClick={() => handleProjectOpen('scrapbook')}
          whileHover={{ scale: 1.01 }}
        >
          <ScrapbookThumbnail/>
        </motion.div>
        <motion.div
          className="md:col-span-3 shadow-md"
          onClick={() => handleProjectOpen('bhmini')}
          whileHover={{ scale: 1.01 }}
        >
          <BHMiniThumbnail/>
        </motion.div>

        {/* ROW 3 */}
        <motion.div
          className="md:col-span-6 shadow-md"
          onClick={() => handleProjectOpen('wordle')}
          whileHover={{ scale: 1.01 }}
        >
          <WordleThumbnail/>
        </motion.div>
        <motion.div
          className="md:col-span-3 shadow-md"
          onClick={() => handleProjectOpen('jamcave')}
          whileHover={{ scale: 1.01 }}
        >
          <JamcaveThumbnail/>
        </motion.div>
        <motion.div
          className="md:col-span-3 shadow-md"
          onClick={() => handleProjectOpen('bongocat')}
          whileHover={{ scale: 1.01 }}
        >
          <BongoCatThumbnail/>
        </motion.div>
      </div>
    </div>

    <AnimatePresence>
      {selectedProject && <>
        <motion.div
          className="px-4 pb-12 pt-36 fixed inset-0 bg-black/20 overflow-y-auto z-40"
          onClick={handleProjectClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <section
            className="container max-w-3xl relative z-40"
            onClick={e => e.stopPropagation()}
          >
            <div className="bg-theme-background backdrop-blur-sm drop-shadow-md rounded-xl overflow-hidden">
              <div className="h-48">
                {projects[selectedProject].thumbnail}
              </div>

              {projects[selectedProject].content}
            </div>

            <button
              className="p-2 absolute -top-14 right-0 text-theme-onBackground/40 hover:text-theme-primaryVariant bg-theme-surface/50 hover:bg-theme-surface/75 rounded-full z-50 transition ease-in-out duration-300"
              onClick={handleProjectClose}
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
