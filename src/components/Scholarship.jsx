import { useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { SiSemanticscholar } from "react-icons/si";
import { BsHouses } from "react-icons/bs";
import { TbPigMoney } from "react-icons/tb";
import { MdCastForEducation } from "react-icons/md";
import { IoCodeSlash } from "react-icons/io5";
import { GiOrganigram } from "react-icons/gi";

export default function Scholarship() {
  const [showScholarship, setShowScholarship] = useState(false);

  return (
    // parent container
    <article className="bg-white shadow-lg h-fit rounded-lg p-5 border">
      {/* header & show button container */}
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setShowScholarship(!showScholarship)}
      >
        <div className="flex items-center gap-3">
          <SiSemanticscholar className="text-cyan-600" size={28} />
          <p className="font-bold text-xl lg:text-2xl">Scholarship</p>
        </div>
        {showScholarship ? (
          <BsChevronUp className="text-cyan-600" size={24} />
        ) : (
          <BsChevronDown className="text-cyan-600" size={24} />
        )}
      </div>
      {/* end header & show button container */}

      {/* point container */}
      {showScholarship && (
        <div className="mt-3">
          <p className="text-base lg:text-lg text-justify indent-9">
            While I was studying through the{" "}
            <a
              href="https://www.pubpasim.org/"
              className="text-sky-700 underline italic"
            >
              Pemberdayaan Umat Berkelanjutan (PUB)
            </a>{" "}
            Scholarship Program, this scholarship program provided me with:
          </p>

          <ul className=" mt-3 space-y-2 text-base lg:text-lg">
            <li className="bg-slate-100 p-2 rounded-md flex items-center gap-3 hover:bg-slate-50">
              <BsHouses />
              Dormitory for students
            </li>
            <li className="bg-slate-100 p-2 rounded-md flex items-center gap-3 hover:bg-slate-50">
              <TbPigMoney /> Free living costs and tuition fees
            </li>
            <li className="bg-slate-100 p-2 rounded-md flex items-center gap-3 hover:bg-slate-50">
              <MdCastForEducation size={32} /> Providing short semesters at the
              University thereby reducing the study period by a year (Bachelor's
              degree to 3 years and Diploma to 2 years)
            </li>
            <li className="bg-slate-100 p-2 rounded-md flex items-center gap-3 hover:bg-slate-50">
              <IoCodeSlash />
              Holding programming training
            </li>
            <li className="bg-slate-100 p-2 rounded-md flex items-center gap-3 hover:bg-slate-50">
              <GiOrganigram /> Involve students in scholarship organizations
              voluntarily
            </li>
          </ul>
        </div>
      )}
      {/* end point container */}
    </article>
    // end parent container
  );
}
