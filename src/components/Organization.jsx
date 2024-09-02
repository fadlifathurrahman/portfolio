import { useState } from "react";
import { FaPeopleGroup } from "react-icons/fa6";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { PiChalkboardTeacher } from "react-icons/pi";
import { FaGoogleDrive } from "react-icons/fa";

export default function Organisation() {
  const [showOrganisation, setShowOrganisation] = useState(false);
  const organisationList = [
    {
      title: "Logic and Algorithms with C Programming",
      meetings: 16,
      date: "September 2022 - January 2023",
    },
    {
      title: "Data Structures with C Programming",
      meetings: 16,
      date: "February 2023 - June 2023",
    },
    {
      title: "Database with MySQL",
      meetings: 16,
      date: "February 2023 - June 2023",
    },
    {
      title: "Web Development with HTML, CSS, & JavaScript",
      meetings: 16,
      date: "July 2023 - August 2023",
    },
    {
      title: "Node.js",
      meetings: 16,
      date: "August 2023 - December 2023",
    },
  ];
  return (
    // parent container
    <article className="shadow-lg rounded-lg p-4 h-fit border">
      {/* organisation header container */}
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setShowOrganisation(!showOrganisation)}
      >
        <div className="flex items-center gap-3">
          <FaPeopleGroup className="text-cyan-600" size={28} />
          <p className="font-bold  text-xl lg:text-2xl">Organization</p>
        </div>
        {/* show or hide organisation content */}
        {showOrganisation ? (
          <BsChevronUp className="text-cyan-600" size={24} />
        ) : (
          <BsChevronDown className="text-cyan-600" size={24} />
        )}
      </div>
      {/* end of organisation title */}

      {showOrganisation && (
        // show organisation content
        <div className="text-cyan-800 bg-slate-200 p-4 rounded-lg mt-3">
          {/* organisation title */}
          <div className="flex items-center gap-3 mb-4">
            <PiChalkboardTeacher className="text-cyan-600" size={28} />
            <p className="font-bold text-md lg:text-lg text-black">
              Lead & Instructor of Programming Training Division
            </p>
          </div>
          {/* end of organisation title */}

          {/* organisation content */}
          <p className="text-base text-black lg:text-lg text-justify indent-9">
          Lead Programming Training Division at{" "}
            <a
              href="https://www.pubpasim.org/"
              className="text-sky-700 underline italic"
            >
              Pemberdayaan Umat Berkelanjutan (PUB)
            </a>{" "}
            for programming training program and also Training Instructor of:
          </p>
          <ul className="list-none list-inside mt-3 space-y-2 text-base lg:text-lg">
            {organisationList.map((item, index) => (
              <li key={index} className="bg-white px-4 py-3 rounded-md hover:bg-slate-200">
                <p className="font-semibold text-black">{item.title}</p>
                <p>{item.meetings} meetings</p>
                <p>{item.date}</p>
              </li>
            ))}
          </ul>
          <a
            href="https://drive.google.com/drive/folders/11362l4YPckso4hfw0DPF929qTMQ60kKw?usp=sharing"
            className="mt-3 flex items-center justify-center w-full text-base lg:text-lg"
            target="_blank"
          >
            <button className="flex items-center gap-3 bg-slate-700 text-white p-3 rounded-md hover:bg-slate-600">
              <FaGoogleDrive />
              View certificates
            </button>
          </a>
        </div>
        // end of organisation content
      )}
    </article>
    // end of parent container
  );
}
