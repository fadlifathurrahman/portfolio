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
  { id: 14, name: "GitHub", icon: github },
];

export default function Expertise() {
  return (
    <section id="today-i-learn" className="flex-col justify-between p-4 mt-20">
      {/* title container */}
      <article
        className="text-white text-lg bg-cyan-950 bg-opacity-70 p-4 font-bold mt-20
          lg:text-2xl
          md:text-1xl
          sm:text-1xl"
      >
        Today I Learn
      </article>

      {/* expertise container */}
      <article className="flex flex-wrap justify-around content-center py-8 gap-5">
        {myExpertise.map((expertise) => (
          <div
            key={expertise.name}
            className="flex items-center gap-2 min-w-[100px]
          py-3 px-4
          rounded-lg bg-slate-200 "
          >
            <img src={expertise.icon} className="w-7"></img>
            <p className="text-sm font-semibold">{expertise.name}</p>
          </div>
        ))}
      </article>
    </section>
  );
}
