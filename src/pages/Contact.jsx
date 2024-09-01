import { BsGithub, BsLinkedin } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Contact() {
  const connection = [
    {
      id: 1,
      icon: <BsGithub size={20} />,
      link: "https://github.com/fadlifathurrahman",
    },
    {
      id: 2,
      icon: <BsLinkedin size={20} />,
      link: "https://www.linkedin.com/in/fadli-ft/",
    },
    {
      id: 3,
      icon: <AiFillInstagram size={20} />,
      link: "https://www.instagram.com/fadli.ft/",
    },
  ];

  return (
    <div
      id="contact"
      className="flex flex-col justify-end p-3
       "
    >
      <div className="flex flex-row pt-3 justify-evenly">
        {connection.map((acc) => (
          <Link
            key={acc.id}
            to={acc.link}
            target="_blank"
            className="text-gray-800"
          >
            {acc.icon}
          </Link>
        ))}
      </div>
    </div>
  );
}
