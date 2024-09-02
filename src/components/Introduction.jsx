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
      {/* salute & picture container */}
      <article className="flex items-center justify-center gap-5 mx-2">
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
            className="md:hidden h-32 w-auto pt-3 pl-2 bg-slate-800 rounded-full z-10"
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
      {/* end salute & picture container */}

      {/* contact and location container */}
      <article className="flex flex-col w-1/2 items-center mt-3 py-4">
        <Contact />

        {/* location container */}
        <a
          target="_blank"
          href="https://maps.app.goo.gl/Ffa1zDjBtvAHuZwo6"
          className="text-slate-800 font-bold flex gap-3 items-center mt-3 cursor-pointer w-max
        "
        >
          <FaMapLocationDot size={28} />
          <p>Bandung, West Java, Indonesia</p>
        </a>
        {/* end location container */}
      </article>
      {/* end contact and location container */}
    </section>
    // end parent container
  );
}
