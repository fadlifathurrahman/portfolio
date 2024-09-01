import portrait from "/assets/images/portrait.png";
import background from "/assets/images/background.jpg";
import Contact from "../pages/Contact";
import { FaMapLocationDot } from "react-icons/fa6";

export default function Introduction() {
  return (
    // parent container
    <section
      className="min-h-screen flex flex-col justify-center items-center -mt-8"
      style={{ backgroundImage: `url(${background})`, backgroundSize: "cover" }}
    >
      <article className="flex items-center justify-center gap-10 ">
        {/* salute container */}
        <article
          className="text-cyan-700 text-sm flex flex-col gap-2 font-semibold
        sm:text-lg
        md:text-xl
        lg:text-2xl"
        >
          <p>Hello there!</p>
          <p className="flex gap-2">
            I&apos;m
            <span className="text-slate-800 font-bold">
              Muhammad Fadli Fathurrahman
            </span>
          </p>
          <p>a web developer enthusiast</p>
        </article>
        {/* end salute container */}

        {/* picture container */}
        <article className="flex flex-col md:flex-row">
          {/* mobile size view */}
          <img
            src={portrait}
            alt="Muhammad Fadli Fathurrahman"
            className="md:hidden h-40 w-auto pt-3 pl-2 bg-slate-800 rounded-full z-10"
          />
          {/* laptop size view */}
          <img
            src={portrait}
            alt="Muhammad Fadli Fathurrahman"
            className="hidden md:block h-60 w-auto pt-3 pl-2 bg-slate-800 absolute z-10"
          />
          <div className="hidden md:block h-60 w-36 ml-7 -mt-7 -mr-10 z-0 relative border-2 border-slate-800"></div>
        </article>
        {/* end picture container */}
      </article>

      {/* contact and location container */}
      <article className="flex flex-col w-1/2 items-center mt-3 py-4">
        <Contact />

        {/* location container */}
        <div
          className="text-slate-800 font-bold flex gap-3 items-center mt-3
        "
        >
          <FaMapLocationDot size={28} />
          <p>Bandung, West Java, Indonesia</p>
        </div>
        {/* end location container */}
      </article>
    </section>
    // end parent container
  );
}
