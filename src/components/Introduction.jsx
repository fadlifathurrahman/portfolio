import portrait from "/assets/images/portrait.png";
import background from "/assets/images/background.jpg";
import Contact from "../pages/Contact";
import { CiLocationOn } from "react-icons/ci";

export default function Introduction() {
  return (
    // parent container
    <section
      className="min-h-screen flex items-center justify-center gap-10 -mt-16"
      style={{ backgroundImage: `url(${background})`, backgroundSize: "cover" }}
    >
      {/* salute, contact, and location container */}
      <article
        className="text-cyan-700 text-sm flex flex-col gap-2 font-semibold
        sm:text-lg
        md:text-xl
        lg:text-2xl"
      >
        {/*salute container */}
        <div>
          <p>Hello there!</p>
          <p className="flex gap-2">
            I&apos;m
            <span className="text-slate-800 font-bold">
              Muhammad Fadli Fathurrahman
            </span>
          </p>
          <p>a web developer enthusiast</p>
        </div>
        {/* end salute container */}

        {/* contact container */}
        <Contact />
        {/* end contact container */}

        {/* location container */}
        <div
          className="text-slate-800 font-bold flex gap-3 items-center mt-3
        sm:text-xs
        md:text-sm
        lg:text-lg"
        >
          <CiLocationOn />
          <p>Bandung, West Java, Indonesia</p>
        </div>
        {/* end location container */}
      </article>
      {/* end salute, contact, and location container */}

      {/* picture container */}
      <article className="flex flex-col md:flex-row">
        {/* Gambar akan muncul di mobile, bundar */}
        <img
          src={portrait}
          alt="Muhammad Fadli Fathurrahman"
          className="md:hidden h-40 w-auto pt-3 pl-2 bg-slate-800 rounded-full z-10"
        />

        {/* Gambar akan muncul di desktop, kotak */}
        <img
          src={portrait}
          alt="Muhammad Fadli Fathurrahman"
          className="hidden md:block h-60 w-auto pt-3 pl-2 bg-slate-800 absolute z-10"
        />

        <div className="hidden md:block h-60 w-36 ml-7 -mt-7 -mr-10 z-0 relative border-2 border-slate-800"></div>
      </article>
      {/* end picture container */}
    </section>
    // end parent container
  );
}
