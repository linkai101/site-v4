
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

import { FaAngleDown, FaRegStar } from 'react-icons/fa';
import { FiMail, FiGithub, FiLinkedin, FiYoutube } from 'react-icons/fi';

export default function HomePage() {
  return <>
    <div>
      <div
        className="
          min-h-screen px-4 pt-8 pb-24
          flex flex-col items-center justify-center gap-12
          sticky top-0
        "
      >
        <div className="h-64 w-64 flex justify-center items-center bg-gradient-to-br from-theme-primary to-theme-background rounded-full overflow-hidden">
          <img
            src="/assets/linkai-transparent.png"
            // src="/assets/memoji.png"
          />
        </div>

        <div className="flex flex-col items-center">
          <h1 className="text-5xl font-black font-display drop-shadow-lg">
            Linkai Wu
          </h1>

          {/* <input
            className="w-64 px-3 pt-[0.425rem] pb-[0.325rem] text-sm bg-theme-primaryVariant/50 rounded-full mt-2"
            // placeholder="Start typing..."
          /> */}
        </div>

        <div className="absolute bottom-8 px-1 pt-[0.325rem] pb-[0.175rem] text-xl text-theme-primary bg-black/5 rounded-full">
          <FaAngleDown/>
        </div>
      </div>

      <div className="h-48"/>
    </div>

    <div className="px-8 relative -mt-40">
      <div
        className="
          container max-w-4xl
          bg-theme-surface text-theme-onSurface rounded-t-xl shadow-2xl overflow-hidden
        "
      >
        <div className="flex gap-4 bg-black/5">
          <div className="p-4 flex items-center gap-1.5">
            <div className="h-3 w-3 rounded-full bg-red-400"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
            <div className="h-3 w-3 rounded-full bg-green-400"></div>
          </div>
        
          <div className="py-1.5 flex gap-2.5">
            <div className="px-2.5 py-1 flex items-center gap-1.5 text-sm font-display bg-black/10 rounded-lg">
              ????
              <span className="mt-0.5">Welcome</span>
            </div>
            {/* <div className="px-2.5 py-1 flex items-center gap-1.5 text-sm bg-black/5 rounded-lg">
              <FaRegStar/>
              <span className="mt-0.5">Start Page</span>
            </div> */}
          </div>
        </div>

        <div className="p-12">
          <h2 className="text-2xl font-extrabold font-display">
            hey! i'm linkai.
          </h2>
          <p className="font-light mt-2">
            I'm a high school student based in Maryland at Montgomery Blair High School.
            I'm on a journey to explore ways that we can use tech to address the world's most pressing issues.
            Welcome to my corner of the internet!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="p-4 bg-theme-primaryVariant/25 rounded-md">
              <h3 className="text-xl font-bold font-display italic">
                I code.
              </h3>
              <p className="text-sm font-light mt-0.5">
                I mostly do web dev! I've also coded random projects in my free time, including bots, games, and more.
              </p>
              <p className="text-xs font-medium italic mt-1.5">
                Check out my portfolio to see some of my best projects!
              </p>

              <div className="flex gap-2 mt-2.5">
                <Link href="/portfolio">
                  <div className="px-2 py-1 text-xs text-theme-primary font-semibold hover:underline border-2 decoration-[1.5px] decoration-theme-primary border-theme-primary rounded-full">
                    <span>my portfolio</span>
                  </div>
                </Link>

                <Link href="https://github.com/linkai101" target="_blank" rel="noopener noreferrer">
                  <div className="px-2 py-1 text-xs text-theme-primary font-semibold hover:underline border-2 decoration-[1.5px] decoration-theme-primary border-theme-primary rounded-full">
                    <span>my github</span>
                  </div>
                </Link>
              </div>
            </div>

            <div className="p-4 bg-theme-primaryVariant/25 rounded-md">
              <h3 className="text-xl font-bold font-display italic">
                I teach.
              </h3>
              <p className="text-sm font-light mt-0.5">
                Only ~50% of US high schools teach CS. I'm addressing that by mentoring students and running coding workshops.
              </p>
              <p className="text-xs font-medium italic mt-1.5">
                I've started Codelet to provide free interactive resources to learn how to code.
              </p>
              <div className="flex gap-2 mt-2.5">
                <Link href="https://codelet.org" target="_blank" rel="noopener noreferrer">
                  <div className="px-2 py-1 text-xs text-theme-primary font-semibold hover:underline border-2 decoration-[1.5px] decoration-theme-primary border-theme-primary rounded-full">
                    <span>codelet</span>
                  </div>
                </Link>
              </div>
            </div>

            <div className="p-4 bg-theme-primaryVariant/25 rounded-md">
              <h3 className="text-xl font-bold font-display italic">
                I learn.
              </h3>
              <p className="text-sm font-light mt-0.5">
                I'm currently in a senior in a high school STEM program. I'm interested in pursuing CS and exploring different ways that people interact with tech, like VR/AR.
              </p>
            </div>
          </div>

          <h3 className="text-lg font-bold font-display mt-12">
            check out...
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
            <Link href="https://6.blairhacks.com" target="_blank" rel="noopener noreferrer">
              <motion.div className="p-3 flex gap-3 bg-theme-primaryVariant/25 rounded-md" whileHover={{ scale: 1.01 }}>
                <div className="flex-1">
                  <h4 className="text-sm font-semibold">
                    BlairHacks_6
                  </h4>
                  <p className="text-xs leading-4 mt-0.5">
                    A free, 24-hour hackathon for DMV high schoolers. Feb 17-18, 2023 @ Montgomery Blair HS.
                  </p>
                </div>

                <div>
                  <img
                    src="/assets/blairhacks.png"
                    className="h-10 aspect-square rounded-md"
                  />
                </div>
              </motion.div>
            </Link>

            {/* <Link href="https://blair.hackclub.com" target="_blank" rel="noopener noreferrer">
              <motion.div className="p-3 flex gap-3 bg-theme-primaryVariant/25 rounded-md" whileHover={{ scale: 1.01 }}>
                <div className="flex-1">
                  <h4 className="text-sm font-semibold">
                    Blair Hack Club
                  </h4>
                  <p className="text-xs leading-4 mt-0.5">
                    Creative coding club at MBHS. Wednesdays during lunch @ 314.
                  </p>
                </div>

                <div>
                  <img
                    src="/assets/bhc.png"
                    className="h-10 aspect-square rounded-md"
                  />
                </div>
              </motion.div>
            </Link> */}

            <Link href="https://polistat.mbhs.edu" target="_blank" rel="noopener noreferrer">
              <motion.div className="p-3 flex gap-3 bg-theme-primaryVariant/25 rounded-md" whileHover={{ scale: 1.01 }}>
                <div className="flex-1">
                  <h4 className="text-sm font-semibold">
                    ORACLE of Blair 2022
                  </h4>
                  <p className="text-xs leading-4 mt-0.5">
                    A project to predict the 2022 midterm elections. Created by '23 seniors at MBHS.
                  </p>
                </div>

                <div>
                  <img
                    src="/assets/oracle.png"
                    className="h-10 aspect-square rounded-md"
                  />
                </div>
              </motion.div>
            </Link>
            
            <Link href="https://stemtothesky.org" target="_blank" rel="noopener noreferrer">
              <motion.div className="p-3 flex gap-3 bg-theme-primaryVariant/25 rounded-md" whileHover={{ scale: 1.01 }}>
                <div className="flex-1">
                  <h4 className="text-sm font-semibold">
                    {/* ORACLE of Blair 2022 */}
                    STEM to the Sky
                  </h4>
                  <p className="text-xs leading-4 mt-0.5">
                    {/* A project to predict the 2022 midterm elections. Created by '23 seniors at MBHS. */}
                    Showcasing diverse pathways and careers in STEM through interviews and events. I designed their website!
                  </p>
                </div>

                <div>
                  <img
                    src="/assets/stts.png"
                    className="h-10 aspect-square rounded-md"
                  />
                </div>
              </motion.div>
            </Link>
          </div>

          <h3 className="text-lg font-bold font-display mt-12">
            wanna chat?
          </h3>
          <div className="flex gap-3 overflow-x-auto overflow-y-hidden mt-2">
            <Link href="mailto:linkai@linkaiwu.com">
              <div className="px-2 h-12 flex items-end justify-center gap-2.5 rounded-lg bg-theme-primaryVariant/25 hover:bg-theme-primaryVariant/40">
                <FiMail size="2.15rem" className="text-theme-primary stroke-[2.2px]"/>
                <div className="py-0.5">
                  <p className="text-xs text-theme-primary font-extrabold">
                    Contact me
                  </p>
                  <p className="text-xs text-theme-onSurface/75 font-bold -mt-0.5">
                    linkai@linkaiwu.com
                  </p>
                </div>
              </div>
            </Link>

            <Link href="https://github.com/linkai101" target="_blank" rel="noopener noreferrer">
              <div className="h-12 w-12 flex items-end justify-center rounded-lg bg-theme-primaryVariant/25 hover:bg-theme-primaryVariant/40">
                <FiGithub size="2.25rem" className="text-theme-primary stroke-[2.2px]"/>
              </div>
            </Link>

            <Link href="https://linkedin.com/in/linkaiwu" target="_blank" rel="noopener noreferrer">
              <div className="h-12 w-12 flex items-end justify-center rounded-lg bg-theme-primaryVariant/25 hover:bg-theme-primaryVariant/40">
                <FiLinkedin size="2rem" className="text-theme-primary stroke-[2.2px] mb-[0.1rem]"/>
              </div>
            </Link>
            
            <Link href="https://youtube.com/@linkai" target="_blank" rel="noopener noreferrer">
              <div className="h-12 w-12 flex items-end justify-center rounded-lg bg-theme-primaryVariant/25 hover:bg-theme-primaryVariant/40">
                <FiYoutube size="2.15rem" className="text-theme-primary stroke-[2.2px] -mb-[0.1rem]"/>
              </div>
            </Link>
          </div>

          <p className="text-xs font-light italic mt-10">
            Last updated: Dec 21, 2022
          </p>
        </div>
      </div>
    </div>
  </>;
}