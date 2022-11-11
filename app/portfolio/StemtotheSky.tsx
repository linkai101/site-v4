
export default function StemtotheSky() {
  return <div className="h-full py-4 flex items-center justify-center relative overflow-hidden">
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
