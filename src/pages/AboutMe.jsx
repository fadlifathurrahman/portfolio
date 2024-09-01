import Education from "../components/Education";
import Organisation from "../components/Organisation";
import Scholarship from "../components/Scholarship";
import Planning from "../components/Planning";

export default function AboutMe() {
  return (
    // parent container
    <section id="about-me" className="p-4 pt-10">
      {/* title container */}
      <article
        className="text-white text-lg bg-cyan-950 bg-opacity-70 p-4 font-bold mt-20
          lg:text-2xl
          md:text-1xl
          sm:text-1xl"
      >
        About Me
      </article>
      {/* end title container */}

      {/* point container */}
      <section
        className="grid gap-8 mt-6
      lg:grid-cols-2
      sm:grid-cols-1
      md:grid-cols-1"
      >
        <Education />
        <Organisation />
        <Scholarship />
        <Planning />
      </section>
      {/* end point container */}
    </section>
  );
}
