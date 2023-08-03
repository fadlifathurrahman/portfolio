import { BiLogoReact } from "react-icons/bi";
import { FaJava, FaHtml5 } from "react-icons/fa";
import { Link } from "react-router-dom";
import Contact from "./Contact";
import { useContext } from "react";
import { ThemeContext } from "../../App";

export default function Project() {
  const { theme } = useContext(ThemeContext);
  const myProject = [
    {
      id: 1,
      name: "Integer Store",
      icon: <BiLogoReact size={40} />,
      desc: "CRUD React project for React training Task",
      source: "https://pertemuan-8-react.vercel.app/",
    },
    {
      id: 2,
      name: "School Scheduling",
      icon: <FaJava size={40} />,
      desc: "CRUD for school scheduling of Java training middle exam",
      source:
        "https://github.com/fadlifathurrahman/uts_pelatihan_java_lanjutan.git",
    },
    {
      id: 3,
      name: "Google Classroom UI",
      icon: <FaHtml5 size={40} />,
      desc: "Google Classroom UI for HTML and CSS training task",
      source: "https://google-classroom-ui.vercel.app/tugas04.html",
    },
    {
      id: 4,
      name: "Integer Store 2.0",
      icon: <BiLogoReact size={40} />,
      desc: "CRUD React project for React training middle exam",
      source: "https://middle-exam-react.vercel.app",
    },
    {
      id: 5,
      name: "Visit Cirebon",
      icon: <BiLogoReact size={40} />,
      desc: "React project for React training task",
      source: "https://github.com/fadlifathurrahman/tugas-react-4.git",
    },
  ];

  return (
    <section
      className="flex max-w-screen items-center justify-center flex-wrap m-6 gap-6
    lg:flex-row 
    md:items-start md:justify-between"
    >
      <div
        className="w-4/6
        max-md:w-screen"
      >
        <div>
          <img
            src="/batik-2.png"
            className="h-44 -z-10 mt-8
          max-lg:h-32
          max-md:h-28
          max-sm:h-20"
          />
          <div className="-mt-12 mb-2 z-10">
            <p
              className="text-white text-lg bg-cyan-950 bg-opacity-70 p-4 font-bold
            max-lg:text-3xl
            max-md:text-2xl
            max-sm:text-1xl"
            >
              Current Project
            </p>
          </div>
        </div>

        <div
          className={
            theme === "dark"
              ? "border-4 border-slate-100"
              : "border-4 border-slate-800"
          }
        >
          <article
            className="border-solid flex flex-wrap justify-evenly p-2 gap-1 text-white
          max-md:p-1
        "
          >
            {myProject.map((project) => (
              <Link
                className="p-4 w-80 min-h-max bg-cyan-950 bg-opacity-90 flex gap-1 flex-col flex-wrap
              hover:scale-110
              max-[1100px]:w-56
              max-md:w-52 
              max-sm:w-36"
                key={project.id}
                to={project.source}
                target="_blank"
              >
                <div className="flex items-center gap-2">
                  {project.icon}
                  <p
                    className="text-xl
                max-lg:text-[1rem]
                max-md:text-[0.8rem]"
                  >
                    {project.name}
                  </p>
                </div>
                <p
                  className="text-xs flex justify-center
                max-lg:text-[0.7rem]
                max-md:text-[0.5rem]"
                >
                  {project.desc}
                </p>
              </Link>
            ))}
          </article>
        </div>
      </div>
      <Contact />
    </section>
  );
}
