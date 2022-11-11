
export default function BhcSite() {
  return <div className="col-span-3 flex justify-center items-center relative bg-red-500/90 shadow-md">
    {/* <img
      src="/assets/portfolio/bhc-flag.svg"
      className="absolute h-16 top-0 left-6"
    /> */}
    <img
      src="/assets/portfolio/bhc-overlay.png"
      className="absolute w-full h-full object-cover object-center"
    />
    <img
      src="/assets/portfolio/bhc.png"
      className="h-20 z-10 mt-2"
    />
  </div>;
}
