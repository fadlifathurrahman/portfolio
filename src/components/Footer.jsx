import EmailForm from "./EmailForm";
import emailIcon from "/assets/images/title-icons/email.png";
import emailJsIcon from "/assets/images/icons/emailjs.png";

export default function Footer() {
  return (
    // parent container
    <footer id="footer" className="flex flex-col max-w-screen items-center justify-center p-5 bg-slate-900 mt-10">
      {/* header container */}
      <div className="flex items-end gap-5">
        <img src={emailIcon} className="w-16 -mt-24 lg:w-20" />
        <div className="flex flex-col gap-2">
          <p
            className="text-white text-2xl font-bold
          md:text-3xl
          lg:text-4xl"
          >
            Get in touch
          </p>
          <p
            className="text-white text-sm flex gap-2 justify-center items-center
              md:text-lg"
          >
            By:
            <a href="https://www.emailjs.com/" target="_blank" rel="noreferrer" className="underline flex gap-1 px-3 py-1 items-center rounded-md
            hover:text-slate-800
            hover:bg-slate-100">
              <img src={emailJsIcon} className="w-7"></img>
              EmailJS
            </a>
          </p>
        </div>
      </div>
      {/* end header container */}

      {/* email form */}
      <EmailForm />
    </footer>
    // end parent container
  );
}
