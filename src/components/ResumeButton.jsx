import { BsPersonVcard } from "react-icons/bs";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import english from "/assets/images/english.png";
import indonesian from "/assets/images/indonesia.png";
import { useState } from "react";

export default function ResumeButton(){
    const [resumeOpen, setResumeOpen] = useState(false);

    const toggleResume = () => {
        setResumeOpen(!resumeOpen);
    };
    
    return(
        // parent container
        <div className="relative">
        <button
          onClick={toggleResume}
          className={`flex items-center gap-2 h-full px-4 py-3 hover:bg-slate-200 hover:text-slate-800
          ${
            resumeOpen ? "bg-white text-slate-800" : "rounded-br-lg"
          } rounded-t-lg rounded-bl-lg`}
        >
          <BsPersonVcard size={24} />
          <p className="text-xl">Resume</p>
          {resumeOpen ? (
            <RiArrowDropUpLine size={24} />
          ) : (
            <RiArrowDropDownLine size={24} />
          )}
        </button>

        {/* language container */}
        {resumeOpen && (
          <div className="absolute right-0 w-max bg-white shadow-lg z-50">
            <a
              href="https://drive.google.com/file/d/1P-OxtP7xyIfDTduFpWAmJINFdVi9SWXV/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 flex items-center border-y-2 text-gray-800 hover:bg-gray-200"
            >
              <img src={english} className="w-6 mr-2" />
              English
            </a>
            <a
              href="https://drive.google.com/file/d/18GkfCsQtlb7Iei2AKaBFOxYU0jjhH8y2/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 flex items-center text-gray-800 hover:bg-gray-200"
            >
              <img src={indonesian} className="w-6 mr-2" />
              Indonesian
            </a>
          </div>
          // end language container
        )}
      </div>
    );
}