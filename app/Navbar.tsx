import Link from 'next/link';

export default function Navbar() {
  return <nav className="fixed right-0 h-full z-50">
    <ul className="p-8 flex flex-col gap-1.5 text-right text-lg text-theme-onBackground/40">
      <Link href="/">
        <li className="hover:text-theme-primary hover:drop-shadow-sm cursor-pointer transition duration-200 ease-out hover:ease-in">
          home
        </li>
      </Link>

      <Link href="/portfolio">
        <li className="hover:text-theme-primary hover:drop-shadow-sm cursor-pointer transition duration-200 ease-out hover:ease-in">
          portfolio
        </li>
      </Link>
    </ul>
  </nav>;
}
