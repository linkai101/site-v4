
export default function BongoCat() {
  return <div className="h-full py-12 bg-stone-800 flex items-center justify-center relative overflow-hidden">
    <img
      src="/assets/portfolio/bongocat-overlay.png"
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-2 h-16 opacity-25"
    />
    <img
      src="/assets/portfolio/bongocat.png"
      className="h-24 z-10"
    />
  </div>;
}
