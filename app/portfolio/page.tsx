
import Polistat from './Polistat';
import StemtotheSky from './StemtotheSky';
import BhcSite from './BhcSite';
import BhcScrapbook from './BhcScrapbook';
import Codelet from './Codelet';
import Jamcave from './Jamcave';
import Wordle from './Wordle';
import BongoCat from './BongoCat';

export default function PortfolioPage() {
  return <>
    <div className="p-6 container max-w-4xl">
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

      <h1 className="text-4xl font-bold font-display mt-6">
        Portfolio
      </h1>
    </div>
    
    <div className="px-6 pt-8 pb-16 container max-w-4xl">
      <div className="grid grid-cols-12 gap-6">
        <Polistat/>
        <StemtotheSky/>

        <BhcSite/>
        <BhcScrapbook/>
        <Codelet/>

        <Jamcave/>
        <Wordle/>

        <BongoCat/>
        <div className="bg-theme-primaryVariant/25 col-span-4 shadow-inner"></div>
        <div className="bg-theme-primaryVariant/25 col-span-4 shadow-inner"></div>
      </div>
    </div>
  </>;
}
