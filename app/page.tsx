import Link from 'next/link';

import { FaAngleDown, FaRegStar } from 'react-icons/fa';
import { FiMail, FiGithub, FiLinkedin, FiYoutube } from 'react-icons/fi';

import Ragdoll from 'components/Ragdoll/Ragdoll';

export default function HomePage() {
  return <>
    <div>
      <div
        className="
          min-h-screen px-4 pt-8 pb-24
          flex flex-col items-center justify-center
          sticky top-0
          bg-theme-primary text-theme-onPrimary
          overflow-hidden
        "
      >
        <p className="absolute top-0 text-[19.5vw] whitespace-nowrap font-black uppercase opacity-10 select-none -z-20">
          Linkai Wu
        </p>

        <div className="absolute top-36 bottom-0 inset-x-0 w-full">
          <Ragdoll/>
        </div>
        {/* <div className="absolute inset-0 w-full flex justify-center">
          <img src="/assets/linkai-transparent.png" className="absolute h-2/3 bottom-0"/>
        </div> */}

        <div className="absolute bottom-24 px-1 pt-[0.325rem] pb-[0.175rem] flex items-center gap-0.5 text-theme-onPrimary/25 bg-theme-primaryVariant/10 rounded-full select-none">
          <FaAngleDown className="text-xl"/>
          <span className="text-xs font-bold pr-1">
            scroll!
          </span>
        </div>
      </div>

      <div className="h-20"/>
    </div>

    <div className="px-4 relative -mt-40">
      <div
        className="
          container max-w-4xl
          bg-theme-background text-theme-onBackground rounded-t-xl shadow-2xl overflow-hidden
        "
      >
        <div className="flex gap-4 bg-theme-surface">
          <div className="p-4 flex items-center gap-1.5">
            <div className="h-3 w-3 rounded-full bg-red-400"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
            <div className="h-3 w-3 rounded-full bg-green-400"></div>
          </div>
        
          <div className="py-1.5 flex gap-2.5">
            <div className="px-2.5 py-1 flex items-center gap-1.5 text-sm font-display bg-black/10 rounded-lg">
              👋
              <span className="mt-0.5">Welcome</span>
            </div>
            {/* <div className="px-2.5 py-1 flex items-center gap-1.5 text-sm bg-black/5 rounded-lg">
              <FaRegStar/>
              <span className="mt-0.5">Start Page</span>
            </div> */}
          </div>
        </div>

        <div className="p-8 md:p-12">
          <div className="flex gap-4 sm:gap-8">
            <div>
              <h2 className="text-2xl font-extrabold font-display">
                Hey! I&apos;m Linkai. <span className="text-theme-onBackground/30 text-base">(he/him)</span>
              </h2>
              <p className="font-light mt-2">
                I&apos;m a student currently based in Maryland. (Montgomery Blair HS &apos;23)
                Welcome to my corner of the internet!
              </p>
            </div>
            <img
              src="/assets/linkai.png"
              className="h-24 aspect-square rounded-full object-cover"
            />
          </div>

          <h3 className="text-lg font-bold font-display mt-12">
            Check out...
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
            <Link href="/portfolio">
              <div className="p-3 flex gap-3 bg-theme-surface/75 rounded-md hover:scale-[1.01] transition duration-200 ease-out hover:ease-in">
                <div className="flex-1">
                  <h4 className="text-sm font-semibold">
                    Portfolio
                  </h4>
                  <p className="text-xs leading-4 mt-0.5">
                    A showcase of my best projects. Check out what I&apos;ve been up to!
                  </p>
                </div>

                <div>
                  <span className="text-4xl">💼</span>
                </div>
              </div>
            </Link>

            <Link href="https://polistat.mbhs.edu" target="_blank" rel="noopener noreferrer">
              <div className="p-3 flex gap-3 bg-theme-surface/75 rounded-md hover:scale-[1.01] transition duration-200 ease-out hover:ease-in">
                <div className="flex-1">
                  <h4 className="text-sm font-semibold">
                    ORACLE of Blair 2022
                  </h4>
                  <p className="text-xs leading-4 mt-0.5">
                    A project to predict the 2022 midterm elections. Created by &apos;23 seniors at MBHS.
                  </p>
                </div>

                <div>
                  <img
                    src="/assets/oracle.png"
                    className="h-10 aspect-square rounded-md"
                    alt="ORACLE of Blair 2022"
                  />
                </div>
              </div>
            </Link>
            
            <Link href="https://stemtothesky.org" target="_blank" rel="noopener noreferrer">
              <div className="p-3 flex gap-3 bg-theme-surface/75 rounded-md hover:scale-[1.01] transition duration-200 ease-out hover:ease-in">
                <div className="flex-1">
                  <h4 className="text-sm font-semibold">
                    STEM to the Sky
                  </h4>
                  <p className="text-xs leading-4 mt-0.5">
                    Showcasing diverse pathways and careers in STEM through interviews and events. I designed their website!
                  </p>
                </div>

                <div>
                  <img
                    src="/assets/stts.png"
                    className="h-10 aspect-square rounded-md"
                    alt="STEM to the Sky"
                  />
                </div>
              </div>
            </Link>
          </div>

          <h3 className="text-lg font-bold font-display mt-12">
            Wanna chat?
          </h3>
          <div className="flex gap-3 overflow-x-auto overflow-y-hidden mt-2">
            <Link href="mailto:linkai@linkaiwu.com">
              <div className="px-2 h-12 flex items-end justify-center gap-2.5 rounded-lg bg-theme-surface/75 hover:bg-theme-surface">
                <FiMail size="2.15rem" className="text-theme-primaryVariant stroke-[2.2px]"/>
                <div className="py-0.5">
                  <p className="text-xs text-theme-primaryVariant font-extrabold">
                    Contact me
                  </p>
                  <p className="text-xs text-theme-onSurface/75 font-bold -mt-0.5">
                    linkai@linkaiwu.com
                  </p>
                </div>
              </div>
            </Link>

            <Link href="https://github.com/linkai101" target="_blank" rel="noopener noreferrer">
              <div className="h-12 w-12 flex items-end justify-center rounded-lg bg-theme-surface/75 hover:bg-theme-surface">
                <FiGithub size="2.25rem" className="text-theme-primaryVariant stroke-[2.2px]"/>
              </div>
            </Link>

            <Link href="https://linkedin.com/in/linkaiwu" target="_blank" rel="noopener noreferrer">
              <div className="h-12 w-12 flex items-end justify-center rounded-lg bg-theme-surface/75 hover:bg-theme-surface">
                <FiLinkedin size="2rem" className="text-theme-primaryVariant stroke-[2.2px] mb-[0.1rem]"/>
              </div>
            </Link>
            
            <Link href="https://youtube.com/@linkai" target="_blank" rel="noopener noreferrer">
              <div className="h-12 w-12 flex items-end justify-center rounded-lg bg-theme-surface/75 hover:bg-theme-surface">
                <FiYoutube size="2.15rem" className="text-theme-primaryVariant stroke-[2.2px] -mb-[0.1rem]"/>
              </div>
            </Link>
          </div>

          <p className="text-xs font-light italic mt-10">
            Last updated: Apr 26, 2023
          </p>
        </div>
      </div>
    </div>
  </>;
}