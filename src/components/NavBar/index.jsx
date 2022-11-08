import { useState } from "react";
import Logo from "../Logo";
import "./style.css"; // hamburger menu

export default function NavBar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="flex items-center justify-between py-8">
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 left-8 self-start	 py-8 "
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col self-start m-16 ">
              <li className=" my-8">
                <a href="/characters">Characters</a>
              </li>
              <li className="">
                <a href="/favorites">Favorites</a>
              </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden text-white space-x-8 lg:flex">
          <li>
            <a href="/about">Characters</a>
          </li>
          <li>
            <a href="/portfolio">Favorites</a>
          </li>
        </ul>
      </nav>
      <a href="/">
        <Logo />
      </a>
    </div>
  );
}
