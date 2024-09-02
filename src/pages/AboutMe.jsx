import Education from "../components/Education";
import Scholarship from "../components/Scholarship";
import Planning from "../components/Planning";
import Organization from "../components/Organization";

export default function AboutMe() {
  return (
    // parent container
    <section id="about-me" className="p-4 pt-20">
      {/* header container */}
      <article
        className="text-white text-2xl bg-cyan-950 bg-opacity-70 p-4 font-semibold
      md:text-3xl
      lg:text-4xl"
      >
        About Me
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
