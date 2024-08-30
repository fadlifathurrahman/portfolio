import { useEffect } from "react";
import { useState } from "react";
import whiteLogo from "/assets/images/white-logo.png";
import blackLogo from "/assets/images/black-logo.png";

export default function Header() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 0);
    });
  }, []);

  return (
    // parent container
    <header
      className={`max-w-screen  bg-slate-800 z-50
        ${scroll ? "text-slate-800 bg-opacity-30 h-16" : "text-white h-20"}
      flex flex-row items-center justify-between 
      px-8 top-0 sticky transition duration-300 ease-in-out
      shadow-md`}
    >
      {/* name container */}
      <div
        className={`text-sm flex flex-row items-center content-center font-semibold 
      sm:text-md
      md:text-lg
      lg:text-2xl`}
      >
        <img
          className="w-10 h-10 mr-2"
          src={`${scroll ? blackLogo : whiteLogo}`}
          alt=""
        />
        <p>Muhammad Fadli Fathurrahman_</p>
      </div>
      {/* end name container */}

      {/* navbar container */}
      <nav
        className="hidden
            lg:flex
      "
      >
        <ul className={`flex flex-row items-center content-center`}>
          <li
            className={`mx-2 px-3 py-1 rounded-md
            sm:text-xs
            md:text-sm
            lg:text-md
            ${scroll ? "hover:bg-white" : "hover:bg-cyan-700"}`}
          >
            <a href="#today-i-learn"> Today I Learn </a>
          </li>

          <li
            className={`mx-2 px-3 py-1 rounded-md
            sm:text-xs
            md:text-sm
            lg:text-md
            ${scroll ? "hover:bg-white" : "hover:bg-cyan-700"}`}
          >
            {" "}
            <a href="#project"> Project </a>
          </li>

          <li
            className={`mx-2 px-3 py-1 rounded-md
            sm:text-xs
            md:text-sm
            lg:text-md
            ${scroll ? "hover:bg-white" : "hover:bg-cyan-700"}`}
          >
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      {/* end navbar container */}
    </header>
    // end parent container
  );
}
