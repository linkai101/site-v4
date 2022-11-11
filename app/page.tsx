
import Link from 'next/link';

import { FaAngleDown, FaRegStar } from 'react-icons/fa';
import { FiMail, FiGithub, FiLinkedin, FiYoutube } from 'react-icons/fi';

export default function HomePage() {
  return <>
    <div>
      <div
        className="
          min-h-screen px-4 pt-8 pb-32
          flex flex-col items-center justify-center gap-12
          sticky top-0
        "
      >
        <div className="h-64 w-64 flex justify-center items-center bg-gradient-to-br from-theme-primary to-theme-background rounded-full overflow-hidden">
          <img
            // src="/assets/linkai-transparent.png"
            src="/assets/memoji.png"
          />
        </div>

        <div className="flex flex-col items-center">
          <h1 className="text-5xl font-black font-display drop-shadow-xl">
            Linkai Wu
          </h1>

          <input
            className="w-64 px-3 pt-[0.425rem] pb-[0.325rem] text-sm bg-theme-primaryVariant/50 rounded-full mt-2"
            // placeholder="Start typing..."
          />
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
              👋
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
            I love to explore novel ways that people can interact with technology and use it to do great things.
            Welcome to my corner of the internet!
          </p>

          <h3 className="text-lg font-bold font-display italic mt-10">
            what i do
          </h3>
          <div className="grid grid-cols-3 gap-4 mt-2">
            <div className="h-28 bg-theme-primaryVariant/25 rounded-md"/>
            <div className="h-28 bg-theme-primaryVariant/25 rounded-md"/>
            <div className="h-28 bg-theme-primaryVariant/25 rounded-md"/>
          </div>

          <h3 className="text-lg font-bold font-display italic mt-10">
            check out...
          </h3>
          <div className="grid grid-cols-3 gap-4 mt-2">
            <Link href="https://mini.blairhacks.com" target="_blank" rel="noopener noreferrer">
              <div className="p-3 flex gap-3 bg-theme-primaryVariant/25 rounded-md">
                <div className="flex-1">
                  <h4 className="text-sm font-semibold">
                    BlairHacks Mini '22
                  </h4>
                  <p className="text-xs leading-4 mt-0.5">
                    A free, IRL mini hackathon. Dec 10, 2022 @ 10AM-6PM. Register now!
                  </p>
                </div>

                <div>
                  <img
                    src="/assets/blairhacks.png"
                    className="h-10 aspect-square rounded-md"
                  />
                </div>
              </div>
            </Link>

            <Link href="https://blair.hackclub.com" target="_blank" rel="noopener noreferrer">
              <div className="p-3 flex gap-3 bg-theme-primaryVariant/25 rounded-md">
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
              </div>
            </Link>

            <Link href="https://polistat.mbhs.edu" target="_blank" rel="noopener noreferrer">
              <div className="p-3 flex gap-3 bg-theme-primaryVariant/25 rounded-md">
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
              </div>
            </Link>
          </div>

          <h3 className="text-lg font-bold font-display mt-10">
            wanna chat?
          </h3>
          <div className="flex gap-3 mt-2">
            <Link href="mailto:linkai@linkaiwu.com">
              <div className="px-2 h-12 flex items-end justify-center gap-2.5 rounded-lg bg-theme-primaryVariant/25">
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
              <div className="h-12 w-12 flex items-end justify-center rounded-lg bg-theme-primaryVariant/25">
                <FiGithub size="2.25rem" className="text-theme-primary stroke-[2.2px]"/>
              </div>
            </Link>

            <Link href="https://linkedin.com/in/linkaiwu" target="_blank" rel="noopener noreferrer">
              <div className="h-12 w-12 flex items-end justify-center rounded-lg bg-theme-primaryVariant/25">
                <FiLinkedin size="2rem" className="text-theme-primary stroke-[2.2px] mb-[0.1rem]"/>
              </div>
            </Link>
            
            <Link href="https://youtube.com/@linkai" target="_blank" rel="noopener noreferrer">
              <div className="h-12 w-12 flex items-end justify-center rounded-lg bg-theme-primaryVariant/25">
                <FiYoutube size="2.15rem" className="text-theme-primary stroke-[2.2px] -mb-[0.1rem]"/>
              </div>
            </Link>
          </div>

          <p className="text-xs font-light italic mt-10">
            Last updated: Nov 11, 2022
          </p>
        </div>
      </div>
    </div>
  </>;
}