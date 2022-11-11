
export default function Polistat() {
  return <div
    className="h-full py-2 flex items-center justify-center relative bg-gradient-to-br from-blue-500/10 to-red-500/10 overflow-hidden"
  >
    <img
      src="/assets/portfolio/polistat.svg"
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-12"
    />
    <img
      src="/assets/portfolio/polistat-overlay.svg"
      className="h-44"
    />
  </div>;
}
