import Portrait from "/assets/images/portrait.png";

export default function Introduction() {
  return (
    <section
      className="min-h-screen flex items-center justify-center gap-10 -mt-16
      "
    >
      {/* salute container */}
      <article
        className="text-cyan-700 text-sm flex flex-col gap-2 font-semibold
        sm:text-lg
        md:text-xl
        lg:text-2xl"
      >
        <div>
          <p>Hello there!</p>
          <p className="flex gap-2">
            I&apos;m
            <span className="text-slate-800 font-bold">
              Muhammad Fadli Fathurrahman
            </span>
          </p>
          <p>a web developer enthusiast</p>
        </div>
      </article>
      {/* end salute container */}

      {/* picture container */}
      <article className="flex">
        <img
          src={Portrait}
          alt="Muhammad Fadli Fathurrahman"
          className="h-60 pt-3 pl-2 bg-slate-800 absolute z-10"
        />
        <div className="h-60 w-36 ml-7 -mt-7 -mr-10 z-0 relative border-2 border-slate-800"></div>
      </article>
      {/* end picture container */}
    </section>
  );
}
