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
import dakotaRentalMobil from "/assets/images/project-view/dakota-rental-mobil.png";
import visitJawaBarat from "/assets/images/project-view/visit-jawa-barat.png";
import project from "/assets/images/title-icons/project.png";

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
      demoUrl: "https://integer-store-l4pdq0ao8-fadlifathurrahmans-projects.vercel.app/",
      view: integerStore,
      expertise: [myExpertise[6].id, myExpertise[11].id, myExpertise[12].id],
    },
    {
      name: "Caruban Tourism",
      desc: "Cirebon tourism and culinary website",
      githubUrl: "https://github.com/fadlifathurrahman/tugas-react-4.git",
      demoUrl: "",
      view: carubanTourism,
      expertise: [myExpertise[2].id, myExpertise[7].id, myExpertise[11].id, myExpertise[12].id],
    },
    {
      name: "Dakota Rental Mobil",
      desc: "Car rental website",
      githubUrl: "https://github.com/fadlifathurrahman/dakota-rental",
      demoUrl: "",
      view: dakotaRentalMobil,
      expertise: [myExpertise[14].id, myExpertise[15].id],
    },
    {
      name: "Visit Jawa Barat",
      desc: "Tourism promotion website for West Java province",
      githubUrl: "https://github.com/fadlifathurrahman/visit-jawa-barat",
      demoUrl: "",
      view: visitJawaBarat,
      expertise: [myExpertise[3].id, myExpertise[4].id, myExpertise[15].id, myExpertise[16].id],
    },
  ];

  return (
    // parent container
    <section id="project" className="min-h-screen flex-col justify-between p-4">
      {/* header container */}
      <article className="flex items-end gap-5 bg-slate-500 bg-opacity-100 px-4 py-3">
        <img
          className="w-16 -mt-16
        md:w-20"
          src={project}
          alt=""
        />
        <p
          className="text-white font-bold text-3xl md:text-3xl
      lg:text-4xl"
        >
          Projects
        </p>
      </article>
      {/* end header container */}

      {/* content container */}
      <article className="flex flex-wrap pt-5 gap-6 justify-center">
        {/* project iterator */}
        {myProject.map((project) => (
          <div key={project.name} className="bg-slate-300 flex flex-col justify-between w-full sm:w-2/5 lg:w-1/4 px-4 py-4 gap-y-3 rounded-lg shadow-md">
            <div className="flex flex-col gap-4">
              {/* project name */}
              <p className="text-lg font-bold text-center">{project.name}</p>

              {/* project image */}
              <img src={project.view} className="w-full rounded-t-sm object-contain" />
            </div>

            {/* project description */}
            <p className="text-justify font-mono text-sm">{project.desc}</p>

            {/* project expertise list with iterator */}
            <div className="flex flex-wrap gap-2 justify-center bg-slate-50 py-2 rounded-lg">
              {project.expertise.map((expertise) => (
                <div key={myExpertise[expertise - 1].name} className="flex items-center rounded-lg min-w-max gap-2 py-2 px-3 bg-slate-300">
                  <img src={myExpertise[expertise - 1].icon} className="h-4"></img>
                  <p className="text-xs">{myExpertise[expertise - 1].name}</p>
                </div>
              ))}
            </div>
            {/* end project expertise list */}

            {/* github & demo button */}
            <div className="flex justify-around w-full">
              {project.githubUrl && (
                <Link to={project.githubUrl} target="_blank" className="text-cyan-700">
                  <button className="bg-sky-800 text-white py-2 w-[100px] rounded-md flex items-center justify-center gap-x-2 hover:bg-sky-600">
                    <BsGithub />
                    <p>Github</p>
                  </button>
                </Link>
              )}
              {project.demoUrl && (
                <Link to={project.demoUrl} target="_blank" className="text-cyan-700">
                  <button className="bg-sky-800 text-white py-2 w-[90px] rounded-md flex items-center justify-center gap-x-2 hover:bg-sky-600">
                    <MdPageview className="w-5" />
                    <p>Demo</p>
                  </button>
                </Link>
              )}
            </div>
            {/* end github & demo button */}
          </div>
        ))}
        {/* end project iterator */}
      </article>
      {/* end content container */}
    </section>
    // end parent container
  );
}
