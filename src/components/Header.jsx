import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import whiteLogo from "/assets/images/white-logo.png";
import { BsPersonVcard, BsFileEarmarkPerson } from "react-icons/bs";
import { FaComputer } from "react-icons/fa6";
import { MdOutlineTouchApp } from "react-icons/md";
import { RiContactsLine } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import english from "/assets/images/english.png";
import indonesian from "/assets/images/indonesia.png";

export default function Header() {
  const [scroll, setScroll] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 0);
    });
  }, []);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  const toggleResume = () => {
    setResumeOpen(!resumeOpen);
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
      {/* hamburger & logo container */}
      <article className="flex gap-7">
        {/* hamburger button */}
        <div className="">
          <button
            onClick={toggleNav}
            className="focus:outline-none bg-slate-100 text-slate-800 p-2 rounded-md"
          >
            {navOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        {/* end hamburger button */}

        {/* menu container */}
        <nav
          className={`${navOpen ? "block" : "hidden"} 
        ${scroll ? " top-16 " : " top-20 "}
        absolute left-0 w-1/2 h-screen opacity-90 bg-slate-800 text-white z-40 shadow-xl
        md:w-1/4`}
        >
          <div className="flex flex-col items-center ">
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
              href="#footer"
              onClick={toggleNav}
            >
              <MdOutlineEmail size={30} />
              Get in Touch
            </a>
          </div>
          {/* end menu container */}
        </nav>
        {/* end hamburger container */}

        {/* logo container */}
        <a href="#top">
          {/* name container */}
          <div className={`text-sm flex items-center font-semibold`}>
            <img
              className="w-8 mr-2
            md:w-10"
              src={whiteLogo}
              alt=""
            />
            <p
              className="text-xl
              md:text-2xl
              lg:text-3xl"
            >
              Fadli_
            </p>
          </div>
        </a>
        {/* end logo container */}
      </article>
      {/* end hamburger & logo container */}

      {/* resume container */}
      <div className="relative">
        <button
          onClick={toggleResume}
          className={`flex items-center gap-2 h-full px-4 py-3 hover:bg-slate-200 hover:text-slate-800
          ${
            resumeOpen ? "bg-white text-slate-800" : "rounded-br-lg"
          } rounded-t-lg rounded-bl-lg`}
        >
          <BsPersonVcard size={24} />
          <p className="text-xl">Resume</p>
          {resumeOpen ? (
            <RiArrowDropUpLine size={24} />
          ) : (
            <RiArrowDropDownLine size={24} />
          )}
        </button>

        {/* language container */}
        {resumeOpen && (
          <div className="absolute right-0 w-max bg-white shadow-lg z-50">
            <a
              href="https://drive.google.com/file/d/1P-OxtP7xyIfDTduFpWAmJINFdVi9SWXV/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 flex items-center border-y-2 text-gray-800 hover:bg-gray-200"
            >
              <img src={english} className="w-6 mr-2" />
              English
            </a>
            <a
              href="https://drive.google.com/file/d/18GkfCsQtlb7Iei2AKaBFOxYU0jjhH8y2/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 flex items-center text-gray-800 hover:bg-gray-200"
            >
              <img src={indonesian} className="w-6 mr-2" />
              Indonesian
            </a>
          </div>
          // end language container
        )}
      </div>
      {/* end resume container */}
    </header>
    // end parent container
  );
}
