import Introduction from "../components/Introduction";
import ScrollTopButton from "../components/ScrollTopButton";
import Contact from "./Contact";
import Expertise from "./Expertise";
import Project from "./Project";

export default function Home() {
  return (
    <div>
      <Introduction />
      <Expertise />
      <Project />
      <ScrollTopButton />
    </div>
  );
}
