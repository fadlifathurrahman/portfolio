import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import whiteLogo from "/assets/images/white-logo.png";
import blackLogo from "/assets/images/black-logo.png";

export default function Header() {
  const [scroll, setScroll] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 0);
    });
  }, []);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    // parent container
    <header
      className={`w-full bg-slate-800 z-50 text-white
        ${scroll ? "h-16 " : "h-20"}
        ${navOpen ? "bg-opacity-100 text-white" : ""}
        flex items-center justify-between px-6 sticky top-0 transition duration-300 ease-in-out
        shadow-xl`}
    >
      <a href="#top">
        {/* name container */}
        <div
          className={`text-sm flex items-center font-semibold 
          sm:text-md
          md:text-lg
          lg:text-2xl`}
        >
          <img className="w-10 h-10 mr-2" src={whiteLogo} alt="" />
          <p>Muhammad Fadli Fathurrahman_</p>
        </div>
        {/* end name container */}
      </a>

      {/* navbar for desktop */}
      <nav className={`hidden lg:flex`}>
        <ul className="flex items-center">
          <li
            className={`mx-2 px-3 py-1 rounded-md
              sm:text-xs
              md:text-sm
              lg:text-md
              ${
                scroll
                  ? "hover:bg-white hover:text-slate-900"
                  : "hover:bg-cyan-700"
              }`}
          >
            <a href="#about-me">About Me</a>
          </li>
          <li
            className={`mx-2 px-3 py-1 rounded-md
              sm:text-xs
              md:text-sm
              lg:text-md
              ${
                scroll
                  ? "hover:bg-white hover:text-slate-900"
                  : "hover:bg-cyan-700"
              }`}
          >
            <a href="#today-i-learn">Today I Learn</a>
          </li>
          <li
            className={`mx-2 px-3 py-1 rounded-md
              sm:text-xs
              md:text-sm
              lg:text-md
              ${
                scroll
                  ? "hover:bg-white hover:text-slate-900"
                  : "hover:bg-cyan-700"
              }`}
          >
            <a href="#project">Project</a>
          </li>
          <li
            className={`mx-2 px-3 py-1 rounded-md
              sm:text-xs
              md:text-sm
              lg:text-md
              ${
                scroll
                  ? "hover:bg-white hover:text-slate-900"
                  : "hover:bg-cyan-700"
              }`}
          >
            <a href="#top">Contact</a>
          </li>
        </ul>
      </nav>
      {/* end navbar for desktop */}

      {/* hamburger menu for mobile */}
      <div className="lg:hidden">
        <button onClick={toggleNav} className="text-2xl focus:outline-none">
          {navOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* mobile navbar */}
      <nav
        className={`${navOpen ? "block" : "hidden"} 
        ${scroll ? " top-16 " : " top-20 "}
        absolute left-0 w-full bg-slate-800 text-white lg:hidden z-40 shadow-xl`}
      >
        <ul className="flex flex-col items-center">
          <li className={`px-4 py-3 w-full text-center hover:bg-cyan-700`}>
            <a href="#about-me">About Me</a>
          </li>
          <li className={`px-4 py-3 w-full text-center hover:bg-cyan-700`}>
            <a href="#today-i-learn" onClick={toggleNav} className="">
              Today I Learn
            </a>
          </li>
          <li className={`px-4 py-3 w-full text-center hover:bg-cyan-700`}>
            {" "}
            <a href="#project" onClick={toggleNav}>
              Project
            </a>
          </li>
          <li className={`px-4 py-3 w-full text-center hover:bg-cyan-700`}>
            {" "}
            <a href="#top" onClick={toggleNav}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
      {/* end mobile navbar */}
    </header>
    // end parent container
  );
}
