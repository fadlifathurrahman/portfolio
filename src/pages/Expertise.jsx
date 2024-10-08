import c from "/assets/images/icons/c.png";
import cpp from "/assets/images/icons/cpp.png";
import mysql from "/assets/images/icons/mysql.png";
import html from "/assets/images/icons/html.png";
import css from "/assets/images/icons/css.png";
import javascript from "/assets/images/icons/javascript.png";
import nodejs from "/assets/images/icons/nodejs.png";
import expressjs from "/assets/images/icons/expressjs.png";
import java from "/assets/images/icons/java.png";
import javaswing from "/assets/images/icons/javaswing.png";
import javaspringboot from "/assets/images/icons/javaspringboot.png";
import reactjs from "/assets/images/icons/reactjs.png";
import tailwindcss from "/assets/images/icons/tailwindcss.png";
import github from "/assets/images/icons/github.png";
import php from "/assets/images/icons/php.png";
import bootstrap from "/assets/images/icons/bootstrap.png";
import sass from "/assets/images/icons/sass.png";
import computer from "/assets/images/title-icons/computer.png";

export const myExpertise = [
  { id: 1, name: "C", icon: c },
  { id: 2, name: "C++", icon: cpp },
  { id: 3, name: "MySQL", icon: mysql },
  { id: 4, name: "HTML", icon: html },
  { id: 5, name: "CSS", icon: css },
  { id: 6, name: "JavaScript", icon: javascript },
  { id: 7, name: "NodeJS", icon: nodejs },
  { id: 8, name: "ExpressJS", icon: expressjs },
  { id: 9, name: "Java", icon: java },
  { id: 10, name: "Java Swing", icon: javaswing },
  { id: 11, name: "Java Spring Boot", icon: javaspringboot },
  { id: 12, name: "ReactJS", icon: reactjs },
  { id: 13, name: "TailwindCSS", icon: tailwindcss },
  { id: 14, name: "GitHub", icon: github, },
  { id: 15, name: "PHP", icon: php, },
  { id: 16, name: "Bootstrap", icon: bootstrap, },
  { id: 17, name: "SASS", icon: sass, },
];

export default function Expertise() {
  return (
    // parent container
    <section id="today-i-learn" className="flex-col justify-between p-4 mt-20">
      {/* header container */}
      <article className="flex items-end gap-5 bg-slate-500 bg-opacity-100 px-4 py-3">
        <img className="w-16 -mt-16
        md:w-20" src={computer} alt="" />
        <p
          className="text-white font-bold text-3xl md:text-3xl
      lg:text-4xl"
        >
          Expertise
        </p>
      </article>
      {/* end header container */}

      {/* content container */}
      <article className="flex flex-wrap justify-between content-justif py-8 gap-5">
        {myExpertise.map((expertise) => (
          <div
            key={expertise.name}
            className="flex items-center gap-2 min-w-[100px]
          py-3 px-4
          rounded-lg bg-slate-200 "
          >
            <img src={expertise.icon} className="w-7"></img>
            <p
              className="text-sm font-semibold
            md:text-lg"
            >
              {expertise.name}
            </p>
          </div>
        ))}
      </article>
      {/* end content container */}
    </section>
    // end parent container
  );
}
