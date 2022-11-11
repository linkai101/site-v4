
export default function Wordle() {
  return <div className="h-full py-4 bg-neutral-200/50 flex justify-center items-center relative overflow-hidden">
    <img
      src="/assets/portfolio/wordle.png"
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-8"
    />
    <img
      src="/assets/portfolio/wordle-icon.png"
      className="h-36 opacity-10"
    />
  </div>;
}
