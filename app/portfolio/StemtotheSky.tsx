
export default function StemtotheSky() {
  return <div className="h-48 col-span-4 flex items-center justify-center relative shadow-md">
    <img
      src="/assets/portfolio/stts-bg.png"
      className="absolute w-full h-full object-cover object-center opacity-60 -z-10"
    />
    <img
      src="/assets/portfolio/stts.png"
      className="h-24 rounded-full"
    />
  </div>;
}
