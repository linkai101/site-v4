
export default function Codelet() {
  return <div className="h-48 col-span-3 flex items-center justify-center relative shadow-md">
    <img
      src="/assets/portfolio/codelet-bg.png"
      className="absolute w-full h-full object-cover object-center -z-10"
    />
    <img
      src="/assets/portfolio/codelet.png"
      className="h-32"
    />
  </div>;
}
