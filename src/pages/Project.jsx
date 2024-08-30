import { Link } from "react-router-dom";
import { myExpertise } from "./Expertise";
import { BsGithub } from "react-icons/bs";
import { MdPageview } from "react-icons/md";
import travelGallery from "/assets/images/project-view/travel-gallery.png";
import classroom from "/assets/images/project-view/classroom.png";
import tiketGo from "/assets/images/project-view/tiketgo.png";
import berkahMart from "/assets/images/project-view/berkah-mart.png";
import integerStore from "/assets/images/project-view/integer-store.png";
import carubanTourism from "/assets/images/project-view/caruban-tourism.png";

export default function Project() {
  const myProject = [
    {
      name: "Travel Gallery",
      desc: "Collection of personal travel photos",
      githubUrl: "https://github.com/fadlifathurrahman/google-classroom-ui.git",
      demoUrl: "https://travel-gallery.vercel.app/",
      view: travelGallery,
      expertise: [myExpertise[3].id, myExpertise[4].id],
    },
    {
      name: "Google Classroom UI",
      desc: "Inspired by Google Classroom website",
      githubUrl: "https://github.com/fadlifathurrahman/google-classroom-ui.git",
      demoUrl: "https://google-classroom-two.vercel.app/",
      view: classroom,
      expertise: [myExpertise[3].id, myExpertise[4].id],
    },
    {
      name: "Berkah Mart",
      desc: "Desktop based app for inventory management",
      githubUrl: "https://github.com/fadlifathurrahman/berkah-mart.git",
      demoUrl: "",
      view: berkahMart,
      expertise: [myExpertise[2].id, myExpertise[8].id, myExpertise[9].id],
    },
    {
      name: "TiketGo",
      desc: "Book cinema tickets online",
      githubUrl: "https://github.com/fadlifathurrahman/tiketgo.git",
      demoUrl: "",
      view: tiketGo,
      expertise: [myExpertise[2].id, myExpertise[8].id, myExpertise[10].id],
    },
    {
      name: "Integer Store",
      desc: "CRUD React project for React training Task",
      githubUrl: "https://github.com/fadlifathurrahman/integer-store.git",
      demoUrl:
        "https://integer-store-l4pdq0ao8-fadlifathurrahmans-projects.vercel.app/",
      view: integerStore,
      expertise: [myExpertise[6].id, myExpertise[11].id, myExpertise[12].id],
    },
    {
      name: "Caruban Tourism",
      desc: "Cirebon tourism and culinary website",
      githubUrl: "https://github.com/fadlifathurrahman/tugas-react-4.git",
      demoUrl: "",
      view: carubanTourism,
      expertise: [
        myExpertise[2].id,
        myExpertise[7].id,
        myExpertise[11].id,
        myExpertise[12].id,
      ],
    },
  ];

  return (
    // parent project container
    <section id="project" className="min-h-screen flex-col justify-between p-4">
      {/* title container */}
      <article
        className="text-white text-lg bg-cyan-950 bg-opacity-70 p-4 font-bold mt-20
          lg:text-2xl
          md:text-1xl
          sm:text-1xl"
      >
        Current Project
      </article>
      {/* end title container */}

      {/* projects main container */}
      <article className="flex flex-wrap pt-5  gap-8 justify-center">
        {myProject.map((project) => (
          // project iteration container
          <div
            key={project.name}
            className="bg-slate-300 flex flex-col justify-between w-1/4 px-6 py-4 gap-y-3"
          >
            {/* project name & view container */}
            <div className="flex flex-col gap-4">
              {/* project name container */}
              <p
                className="text-xl font-bold text-center
                max-lg:text-[1rem]
                max-md:text-[0.8rem]"
              >
                {project.name}
              </p>
              {/* end project name container */}

              {/* project view container */}
              <img
                src={project.view}
                className="w-full h-40 rounded-t-sm"
              ></img>
              {/* end project view container */}
            </div>
            {/* end project name & view container */}

            {/* project desc container */}
            <p
              className="text-justify font-mono
                max-lg:text-[0.7rem]
                max-md:text-[0.5rem]"
            >
              {project.desc}
            </p>
            {/* end project desc container */}

            {/* project expertise container */}
            <div className="flex flex-wrap gap-2 justify-center bg-slate-50 py-2 rounded-lg">
              {project.expertise.map((expertise) => (
                <div
                  key={myExpertise[expertise - 1].name}
                  className="flex items-center rounded-lg 
                  min-w-max gap-2 py-2 px-3
                 bg-slate-300 "
                >
                  {/* expertise icon */}
                  <img
                    src={myExpertise[expertise - 1].icon}
                    className="h-4"
                  ></img>
                  {/* end expertise icon */}

                  {/* expertise name */}
                  <p className="text-xs">{myExpertise[expertise - 1].name}</p>
                  {/* end expertise name */}
                </div>
              ))}
            </div>

            {/* project button container */}
            <div className="flex justify-around w-full">
              {/* github button container */}
              {project.githubUrl && (
                <Link
                  to={project.githubUrl}
                  target="_blank"
                  className="text-cyan-700
                max-lg:text-[0.7rem]
                max-md:text-[0.5rem]"
                >
                  <button
                    className="bg-sky-800 text-white py-2 w-[100px] rounded-md flex items-center justify-center gap-x-2
                  hover:bg-sky-600"
                  >
                    <BsGithub />
                    <p>Github</p>
                  </button>
                </Link>
              )}
              {/* end github buttons container */}

              {/* demo button container */}
              {project.demoUrl && (
                <Link
                  to={project.demoUrl}
                  target="_blank"
                  className="text-cyan-700
                  max-lg:text-[0.7rem]
                  max-md:text-[0.5rem]"
                >
                  <button
                    className="bg-sky-800 text-white py-2 w-[90px] rounded-md flex items-center justify-center gap-x-2
                  hover:bg-sky-600"
                  >
                    <MdPageview className="w-5" />
                    <p>Demo</p>
                  </button>
                </Link>
              )}
              {/* end demo button container */}
            </div>
            {/*end project buttons container */}
          </div>
        ))}
      </article>
      {/* end projects main container */}
    </section>
    // end parent project container
  );
}
