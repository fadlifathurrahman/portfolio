import { useEffect, useState } from "react";

import SideBar from "./SideBar";
import ResumeButton from "./ResumeButton";

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
      className={`w-full bg-slate-800 z-50 text-white
        ${scroll ? "h-16 " : "h-20"}
        flex items-center justify-between px-6 sticky top-0 transition duration-300 ease-in-out
        shadow-xl`}
    >
      {/* sidebar & icon */}
      <SideBar/>

      {/* resume */}
      <ResumeButton/>

    </header>
    // end parent container
  );
}
