'use client';

import React from 'react';
import Link from 'next/link';
// import { motion } from 'framer-motion';

import Polistat from './Polistat';
import StemtotheSky from './StemtotheSky';
import BhcSite from './BhcSite';
import BhcScrapbook from './BhcScrapbook';
import Codelet from './Codelet';
import Jamcave from './Jamcave';
import Wordle from './Wordle';
import BongoCat from './BongoCat';

import { FiX } from 'react-icons/fi';


const projects: { [id:string]: any; } = {
  polistat: {
    title: "ORACLE of Blair",
    description: "",
    links: [
      { label: "website", href: "https://polistat.mbhs.edu" },
      { label: "github", href: "https://github.com/polistat/site-2022" },
    ]
  },
  stemtothesky: {
    title: "STEM to the Sky website",
    description: ""
  },
  bhcsite: {
    title: "Blair Hack Club",
    description: ""
  },
  bhcscrapbook: {
    title: "Blair Hack Club's Scrapbook",
    description: ""
  },
  codelet: {
    title: "Codelet",
    description: ""
  },
  jamcave: {
    title: "Jamcave",
    description: ""
  },
  wordle: {
    title: "Wordle Archive",
    description: ""
  },
  bongocat: {
    title: "Bongo Cat",
    description: ""
  },
}


export default function PortfolioPage() {
  const [selectedProject, setSelectedProject] = React.useState<string|null>(null);

  return <>
    <div className="p-6 container max-w-4xl">
      <div className="flex">
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
      </div>

      <h1 className="text-4xl font-bold font-display mt-6">
        Portfolio
      </h1>
    </div>
    
    <div className="px-6 pt-8 pb-16 container max-w-4xl">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-8 shadow-md" onClick={() => setSelectedProject('polistat')}><Polistat/></div>
        <div className="col-span-4 shadow-md" onClick={() => setSelectedProject('stemtothesky')}><StemtotheSky/></div>

        <div className="col-span-3 shadow-md" onClick={() => setSelectedProject('bhcsite')}><BhcSite/></div>
        <div className="col-span-6 shadow-md" onClick={() => setSelectedProject('bhcscrapbook')}><BhcScrapbook/></div>
        <div className="col-span-3 shadow-md" onClick={() => setSelectedProject('codelet')}><Codelet/></div>

        <div className="col-span-6 shadow-md" onClick={() => setSelectedProject('jamcave')}><Jamcave/></div>
        <div className="col-span-6 shadow-md" onClick={() => setSelectedProject('wordle')}><Wordle/></div>

        <div className="col-span-4 shadow-md" onClick={() => setSelectedProject('bongocat')}><BongoCat/></div>
        <div className="bg-theme-primaryVariant/25 col-span-4 shadow-inner"></div>
        <div className="bg-theme-primaryVariant/25 col-span-4 shadow-inner"></div>
      </div>
    </div>


    {selectedProject && <>
      <div
        className="px-8 pb-12 pt-36 fixed inset-0 bg-black/20 overflow-y-auto z-40"
        onClick={() => setSelectedProject(null)}
      >
        <section
          className="container max-w-3xl relative z-40"
          onClick={e => e.stopPropagation()}
        >
          <div className="bg-theme-surface/[0.97] backdrop-blur-sm drop-shadow-md rounded-xl overflow-hidden">
            <div className="h-48">
              {
                selectedProject === 'polistat' ? <Polistat/>
                : selectedProject === 'stemtothesky' ? <StemtotheSky/>
                : selectedProject === 'bhcsite' ? <BhcSite/>
                : selectedProject === 'bhcscrapbook' ? <BhcScrapbook/>
                : selectedProject === 'codelet' ? <Codelet/>
                : selectedProject === 'jamcave' ? <Jamcave/>
                : selectedProject === 'wordle' ? <Wordle/>
                : selectedProject === 'bongocat' ? <BongoCat/>
                : null
              }
            </div>

            <div className="p-8">
              <div className="flex items-end gap-4">
                <h2 className="flex-1 text-2xl font-bold">
                  {projects[selectedProject].title}
                </h2>
                <div className="flex gap-2.5">
                  {projects[selectedProject].links?.map((link: { label: string; href: string; }) => 
                    <Link href={link.href} target="_blank" rel="noopener noreferrer">
                      <div className="px-2 py-1 text-xs text-theme-primary font-semibold hover:underline border-2 decoration-[1.5px] decoration-theme-primary border-theme-primary rounded-full" key={link.label}>
                        <span>{link.label}</span>
                      </div>
                    </Link>
                  )}
                </div>
              </div>
              <p className="text-md font-light">
                {projects[selectedProject].description}
              </p>

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
            </div>
          </div>

          <button
            className="p-2 absolute -top-14 right-0 text-theme-onBackground/40 hover:text-theme-primary bg-theme-surface/50 hover:bg-theme-surface/75 rounded-full transition ease-in-out duration-300"
            onClick={() => setSelectedProject(null)}
          >
            <FiX size="1.5rem" className="stroke-[2.5px]"/>
          </button>
        </section>
      </div>
      
      <style jsx global>{`
      body {
        overflow: hidden;
      }
      `}</style>
    </>}
  </>;
}
