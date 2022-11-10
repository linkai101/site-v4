import { FaAngleDown, FaRegStar } from 'react-icons/fa';


export default function Home() {
  return <>
    <div>
      <div
        className="
          min-h-screen px-4 pt-8 pb-32
          flex flex-col items-center justify-center gap-12
          sticky top-0
        "
      >
        <div className="h-64 w-64 flex justify-center items-center bg-gradient-to-br from-theme-primary to-theme-primaryVariant rounded-full overflow-hidden">
          <img
            src="/assets/memoji.png"
          />
        </div>

        <div className="flex flex-col items-center">
          <h1 className="text-5xl font-black drop-shadow-xl">
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

    <div className="px-8 relative">
      <div
        className="
          container max-w-4xl
          bg-theme-surface text-theme-onSurface rounded-t-xl shadow-2xl overflow-hidden
          -mt-40
        "
      >
        <div className="flex gap-4 bg-black/5">
          <div className="p-4 flex items-center gap-1.5">
            <div className="h-3 w-3 rounded-full bg-red-400"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
            <div className="h-3 w-3 rounded-full bg-green-400"></div>
          </div>
        
          <div className="py-1.5 flex gap-2.5">
            <div className="px-2.5 py-1 flex items-center gap-1.5 text-sm bg-black/10 rounded-lg">
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
          <h2 className="text-2xl font-bold">
            hey! i'm linkai.
          </h2>
          <p className="font-light mt-2">
            I'm a high school student based in Maryland at Montgomery Blair High School.
            I love to explore novel ways that people can interact with technology and use it to do great things.
            Welcome to my corner of the internet!
          </p>

          <p className="font-light mt-8">
            <br/>&gt;
            <br/>&gt;
            <br/>&gt;
            <br/>&gt;
            <br/>&gt;
            <br/>&gt;
            <br/>&gt;
            <br/>&gt;
          </p>
        </div>
      </div>
    </div>
  </>;
}