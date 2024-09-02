import { useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { TbTargetArrow } from "react-icons/tb";

export default function Planning() {
  const [showPlanning, setShowPlanning] = useState(false);

  return (
    // parent container
    <article className="bg-white shadow-lg rounded-lg h-fit p-5 border text-justify">
      {/* header container */}
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setShowPlanning(!showPlanning)}
      >
        <div className="flex items-center gap-3 mb-2">
          <TbTargetArrow  className="text-cyan-600" size={28} />
          <p className="font-bold text-xl lg:text-2xl">
            Future Planning
          </p>
        </div>
        {showPlanning ? (
          <BsChevronUp className="text-cyan-600" size={24} />
        ) : (
          <BsChevronDown className="text-cyan-600" size={24} />
        )}
      </div>
      {/* end header container */}

      {/* content container */}
      {showPlanning && (
        <div className="text-gray-700">
          <p className="text-base indent-9 lg:text-lg">
            In the future, I plan to work in the field of information
            technology, especially in backend development. At the same time, I
            want to contribute to the development of the student community at{" "}
            <a
              href="https://www.pasim.ac.id/"
              className="text-sky-700 underline"
            >
              Universitas Nasional Pasim
            </a>{" "}
            through teaching and organizing student activities related to
            programming and software development.
          </p>
        </div>
      )}
      {/* end content container */}
    </article>
    // end parent container
  );
}
