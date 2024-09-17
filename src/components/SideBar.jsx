
import { FaBars, FaTimes } from "react-icons/fa";
import {  BsFileEarmarkPerson } from "react-icons/bs";
import { FaComputer } from "react-icons/fa6";
import { MdOutlineTouchApp } from "react-icons/md";
import { RiContactsLine } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
import { useState } from "react";
import HeaderLogo from "./HeaderLogo";

export default function SideBar() {
    const toggleNav = () => {
        setNavOpen(!navOpen);
      };
      const [navOpen, setNavOpen] = useState(false);

    return (
        // parent container
        <section className={`flex gap-7
        ${navOpen ? "bg-opacity-100 text-white" : ""}`}>
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

{/* logo */}
        <HeaderLogo/>
      </section>
    );
}
