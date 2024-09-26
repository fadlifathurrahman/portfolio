import Education from "../components/Education";
import Scholarship from "../components/Scholarship";
import Planning from "../components/Planning";
import Organization from "../components/Organization";
import aboutMe from "/assets/images/title-icons/about-me.png";

export default function AboutMe() {
  return (
    // parent container
    <section id="about-me" className="p-4 pt-20">
      {/* header container */}
      <article className="flex items-end gap-5 bg-slate-500 bg-opacity-100 px-4 py-3">
        <img className="w-16 -mt-16
        md:w-20" src={aboutMe} alt="" />
        <p
          className="text-white font-bold text-3xl md:text-3xl
      lg:text-4xl"
        >
          About Me
        </p>
      </article>
      {/* end header container */}

      {/* point container */}
      <section
        className="grid gap-8 mt-6
      lg:grid-cols-2
      sm:grid-cols-1
      md:grid-cols-1"
      >
        <Education />
        <Organization />
        <Scholarship />
        <Planning />
      </section>
      {/* end point container */}
    </section>
  );
}
