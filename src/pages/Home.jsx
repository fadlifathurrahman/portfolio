import Introduction from "../components/Introduction";
import ScrollTopButton from "../components/ScrollTopButton";
import AboutMe from "./AboutMe";
import Expertise from "./Expertise";
import Project from "./Project";

export default function Home() {
  return (
    <div>
      <Introduction />
      <AboutMe />
      <Expertise />
      <Project />
      <ScrollTopButton />
    </div>
  );
}
