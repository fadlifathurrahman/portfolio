import { BsGithub, BsLinkedin } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Contact() {
  const connection = [
    {
      id: 1,
      icon: <BsGithub size={24} />,
      username:"fadlifathurrahman",
      link: "https://github.com/fadlifathurrahman",
    },
    {
      id: 2,
      icon: <BsLinkedin size={24} />,
      username:"fadli-ft",
      link: "https://www.linkedin.com/in/fadli-ft/",
    },
    {
      id: 3,
      icon: <AiFillInstagram size={24} />,
      link: "https://www.instagram.com/fadli.ft/",
      username:"fadli.ft",
    },
  ];

  return (
    <div
      id="contact"
      className="flex flex-col justify-end w-max 
       "
    >
      <div className="flex flex-row pt-3 justify-evenly items-end">
        {connection.map((acc) => (
          <Link
            key={acc.id}
            to={acc.link}
            target="_blank"
            className="text-gray-800 py-2 px-3 rounded-md hover:bg-gray-500 hover:text-white flex flex-col items-center"
          >
            {acc.icon}
            <p className="text-sm">{acc.username}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
