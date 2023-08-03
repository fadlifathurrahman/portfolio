import { useContext } from "react";
import BackgroundS2 from "/batik-fill-2.png";
import { ThemeContext } from "../../App";

// const myName = document.querySelector("#landing"); // elemen teratas halaman
// const backToTopButton = document.querySelector("#back-to-top-button");
// backToTopButton.onclick = () => input.scrollIntoView({ behavior: "smooth" });

export default function Landing() {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={
        theme === "dark"
          ? "border-4 border-slate-100 mx-6"
          : "border-4 border-slate-800 m-6"
      }
    >
      <section
        className="h-2/5 flex items-center justify-center gap-10 p-2
      border-solid 
      xl:p-5 xl:m-4 xl:gap-8
      lg:p-4 lg:m-3 lg:gap-6
      md:p-3 md:m-2 md:gap-4
      sm:p-2 sm:m-1 sm:gap-2 
      "
      >
        <article
          id="landing"
          className="bg-contain bg-right hidden
        sm:inline"
        >
          <img
            src={BackgroundS2}
            className="h-44
            xl:h-28
            lg:h-24
            sm:h-20"
          />
          <img
            src="./IMG_0103.JPG"
            alt="Muhammad Fadli Fathurrahman"
            className="rounded-ee-3xl rounded-ss-3xl
            h-60 w-30 -mt-20 ml-24
            lg:h-44 lg:-mt-12 lg:ml-12 
            md:h-36
            sm:h-28"
          />
          <div
            className="bg-slate-900 bg-opacity-90 h-56 w-30 rounded-ee-3xl rounded-ss-3xl 
            -mt-48 mr-16 ml-14
            lg:h-44 lg:-mt-36 lg:mr-12 lg:ml-4 
            md:h-36 md:-mt-32 md:mr-8 md:ml-6
            sm:h-28 sm:-mt-24 sm:mr-2 sm:ml-8"
          ></div>
        </article>
        <article
          className="text-cyan-700 text-sm flex flex-col gap-2 font-semibold
        sm:text-lg
        md:text-xl
        lg:text-2xl"
        >
          <div className={theme === "dark" ? "text-white " : "bg-white "}>
            <p>Hello there!</p>
            <p className="flex gap-2">
              I&apos;m
              <span
                className={
                  theme === "dark"
                    ? "text-white font-bold"
                    : "text-slate-800 font-bold"
                }
              >
                Muhammad Fadli Fathurrahman
              </span>
            </p>
            <p>a web developer enthusiast</p>
          </div>
        </article>
      </section>
    </div>
  );
}
