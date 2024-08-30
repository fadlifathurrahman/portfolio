import Contact from "../pages/Contact";

export default function Footer() {
  return (
    <footer
      className="flex flex-col max-w-screen items-center justify-center 
    bg-slate-900"
    >
      <Contact />
      <p
        className="text-white text-sm
      md:text-lg
      lg:text-xl"
      >
        @2024
      </p>
    </footer>
  );
}
