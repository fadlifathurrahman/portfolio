import { useContext } from "react";
import { ThemeContext } from "../App";
import Landing from "./home/Landing";
import Project from "./home/Project";
import ScrollTopButton from "./ScrollTopButton";

export default function Content() {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={
        theme === "dark" ? "bg-zinc-900 text-white pt-6 pb-1" : "bg-white"
      }
    >
      <div id="top" className="h-4 absolute top-0"></div>
      <Landing />
      <Project />
      <ScrollTopButton />
    </div>
  );
}
