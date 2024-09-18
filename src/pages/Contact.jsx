import { BsGithub, BsLinkedin } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";

export default function Contact() {
  const connection = [
    {
      id: 1,
      icon: <HiOutlineMail size={24} />,
      username: "fadlifathurrahmanm@gmail.com",
      link: "#footer",
    },
    {
      id: 2,
      icon: <BsGithub size={24} />,
      username: "fadlifathurrahman",
      link: "https://github.com/fadlifathurrahman",
    },
    {
      id: 3,
      icon: <BsLinkedin size={24} />,
      username: "fadli-ft",
      link: "https://www.linkedin.com/in/fadli-ft/",
    },
    {
      id: 4,
      icon: <AiFillInstagram size={24} />,
      link: "https://www.instagram.com/fadli.ft/",
      username: "fadli.ft",
    },
  ];

  return (
    // parent container
    <div id="contact" className="md:mt-10">
      {/* contact container */}
      <div className="">
        {connection.map((acc) => (
          <a
            key={acc.id}
            href={acc.link}
            target={acc.link === "#footer" ? "_self" : "_blank"}
            rel="noreferrer"
            className="text-gray-800 py-2 px-3 rounded-md
            flex gap-2
             hover:bg-gray-500 hover:text-white items-center"
          >
            {acc.icon}
            <p className="text-sm">{acc.username}</p>
          </a>
        ))}
      </div>
      {/* end contact container */}
    </div>
    // end parent container
  );
}
