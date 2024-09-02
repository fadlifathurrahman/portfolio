import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import whiteLogo from "/assets/images/white-logo.png";
import { BsPersonVcard, BsFileEarmarkPerson } from "react-icons/bs";
import { FaComputer } from "react-icons/fa6";
import { MdOutlineTouchApp } from "react-icons/md";
import { RiContactsLine } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";

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
      <article className="flex gap-7">
        {/* hamburger menu */}
        <div className="">
          <button
            onClick={toggleNav}
            className="focus:outline-none bg-slate-100 text-slate-800 p-2 rounded-md"
          >
            {navOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <nav
          className={`${navOpen ? "block" : "hidden"} 
        ${scroll ? " top-16 " : " top-20 "}
        absolute left-0 w-1/2 h-screen opacity-90 bg-slate-800 text-white z-40 shadow-xl
        md:w-1/4`}
        >
          <div className="flex flex-col items-center ">
            <a
              className={`px-4 py-5 w-full border-b-[0.5px] flex items-center gap-5 hover:bg-slate-700`}
              href="#about-me"
            >
              <BsFileEarmarkPerson size={30} />
              About Me
            </a>
            <a
              href="#today-i-learn"
              onClick={toggleNav}
              className={`px-4 py-5 w-full border-b-[0.5px] flex items-center gap-5 hover:bg-slate-700`}
            >
              <FaComputer size={30} />
              Today I Learn
            </a>
            <a
              className={`px-4 py-5 w-full border-b-[0.5px] flex items-center gap-5 hover:bg-slate-700`}
              href="#project"
              onClick={toggleNav}
            >
              <MdOutlineTouchApp size={30} />
              Project
            </a>
            <a
              className={`px-4 py-5 w-full border-b-[0.5px] flex items-center gap-5 hover:bg-slate-700`}
              href="#top"
              onClick={toggleNav}
            >
              <RiContactsLine size={30} />
              Contact
            </a>
            <a
              className={`px-4 py-5 w-full border-b-[0.5px] flex items-center gap-5 hover:bg-slate-700`}
              href="#footer"
              onClick={toggleNav}
            >
              <MdOutlineEmail size={30} />
              Get in Touch
            </a>
          </div>
        </nav>
        {/* end hamburger menu */}

        <a href="#top">
          {/* name container */}
          <div
            className={`text-sm flex items-center font-semibold 
          sm:text-md
          md:text-lg
          lg:text-2xl`}
          >
            <img className="w-10 h-10 mr-2" src={whiteLogo} alt="" />
            <p>Fadli_</p>
          </div>
          {/* end name container */}
        </a>
      </article>

      <a
        href="https://drive.google.com/file/d/1P-OxtP7xyIfDTduFpWAmJINFdVi9SWXV/view?usp=sharing"
        target="_blank"
        className="flex items-center gap-2 h-full px-4
      hover:bg-slate-200 hover:text-slate-800"
      >
        <BsPersonVcard size={24} />
        <p className="text-xl">Resume</p>
      </a>
    </header>
    // end parent container
  );
}
