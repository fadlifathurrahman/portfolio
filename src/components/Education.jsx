import { PiGraduationCapLight } from "react-icons/pi";
import { LiaUniversitySolid } from "react-icons/lia";
import { IoBookOutline } from "react-icons/io5";
import { useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { FaGoogleDrive } from "react-icons/fa";

export default function Education() {
  const [showEducation, setShowEducation] = useState(false);
  const informalEducation = [
    {
      title: "Fullstack Web Development with React.js & Node.js (Express.js)",
      meetings: 16,
      date: "March 2023 - July 2023",
    },
    {
      title: "GitHub",
      meetings: 4,
      date: "February 2023",
    },
    {
      title: "Advanced with Java Spring Boot",
      meetings: 16,
      date: "October 2022 - February 2023",
    },
    {
      title: "Java Fundamentals with Java Swing",
      meetings: 16,
      date: "September 2022 - January 2023",
    },
    {
      title: "Web Development with HTML, CSS, & JavaScript",
      meetings: 16,
      date: "July 2022 - September 2022",
    },
    {
      title: "Database with MySQL",
      meetings: 16,
      date: "February 2022 - June 2022",
    },
    {
      title: "Data Structures with C Programming",
      meetings: 16,
      date: "February 2022 - June 2022",
    },
    {
      title: "Logic and Algorithms with C Programming",
      meetings: 16,
      date: "September 2021 - January 2022",
    },
  ];

  return (
    // parent container
    <article className=" shadow-lg rounded-lg p-4 h-fit border ">
      {/* header & show button container */}
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setShowEducation(!showEducation)}
      >
        {/* header container */}
        <div className="flex items-center gap-3">
          <PiGraduationCapLight className="text-cyan-600" size={28} />
          <p className="font-bold text-xl lg:text-2xl">Education</p>
        </div>
        {/* header container */}

        {/* show button container */}
        {showEducation ? (
          <BsChevronUp className="text-cyan-600" size={24} />
        ) : (
          <BsChevronDown className="text-cyan-600" size={24} />
        )}
        {/* end show button container */}
      </div>
      {/* header & show button container */}

      {showEducation && (
        // formal & informal education container
        <div className="bg-slate-200 p-3 rounded-lg mt-3">
          {/* formal education container */}
          <div className="mb-6 bg-white p-4 rounded-lg">
            {/* formal education header container */}
            <div className="flex items-center gap-3 mb-2">
              <LiaUniversitySolid className="text-cyan-600" size={24} />
              <p className="font-bold text-lg lg:text-xl">Formal Education</p>
            </div>
            {/* end formal education header container */}

            {/* formal education content container */}
            <p className="text-base lg:text-lg text-justify indent-9">
              Bachelor's student in Informatics Engineering at{" "}
              <a
                href="https://www.pasim.ac.id/"
                className="text-sky-700 underline"
              >
                Universitas Nasional Pasim
              </a>
              , fully funded by the{" "}
              <a
                href="https://www.pubpasim.org/"
                className="text-sky-700 underline italic"
              >
                Pemberdayaan Umat Berkelanjutan (PUB)
              </a>{" "}
              scholarship program.
            </p>
            {/* end formal education content container */}
          </div>
          {/* end formal education container */}

          {/* informal education container */}
          <div className="mb-6 bg-white p-4 rounded-lg">
            {/* informal education title container */}
            <div className="flex items-center gap-3 mb-2">
              <IoBookOutline className="text-cyan-600" size={24} />
              <p className="font-bold text-lg lg:text-xl">Informal Education</p>
            </div>
            {/* end informal education title container */}

            {/* informal education content container */}
            <p className="text-base lg:text-lg indent-9 text-justify">
              Throughout my scholarship journey, I have participated in several
              programming courses organized by the{" "}
              <a
                href="https://www.pubpasim.org/"
                className="text-sky-700 underline italic"
              >
                Pemberdayaan Umat Berkelanjutan (PUB)
              </a>{" "}
              program, including:
            </p>
            {/* end informal education content container */}

            {/* informal education list */}
            <ul className="list-none list-inside mt-3 space-y-2 text-base lg:text-lg">
              {informalEducation.map((education) => (
                <li
                  key={education.title}
                  className="bg-slate-200 py-2 px-4 rounded-md hover:bg-slate-100"
                >
                  <p className="font-semibold">{education.title}</p>
                  <p>{education.meetings} meetings</p>
                  <p>{education.date}</p>
                </li>
              ))}
            </ul>
            {/* end informal education list */}

            {/* certificate button */}
            <a
              href="https://drive.google.com/drive/folders/1INuC4oaECGPl1GpWyw8fn6l8fWtW5esQ?usp=sharing"
              className="mt-3 flex items-center justify-center w-full text-base lg:text-lg"
              target="_blank"
            >
              <button className="flex items-center gap-3 bg-slate-700 text-white p-3 rounded-md hover:bg-slate-600">
                <FaGoogleDrive />
                View certificates
              </button>
            </a>
            {/* end certificate button */}
          </div>
          {/* end informal education container */}
        </div>
        // end formal & informal education container
      )}
    </article>
  );
}
