import { useState } from "react";
import emailjs from "emailjs-com";

export default function EmailForm() {
  const [name, setName] = useState(""); // State for sender's name
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    // Send email using EmailJS
    emailjs
      .send(
        "service_0e977f7", // service_id
        "template_vsqarcj", // template_id
        {
          from_name: name,
          from_email: email,
          message: message,
        },
        "E3PDbs7Ma00TOyV4B" // user_id
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Email sent successfully!");
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log(error.text);
          setStatus("Failed to send email.");
        }
      );
    alert(status);
  };
  return (
    <form onSubmit={sendEmail} className="flex flex-col md:flex-row md:gap-5 items-start">
      {/* name and email container */}
      <div className="flex flex-col gap-2 mt-5">
        {/* name input */}
        <label htmlFor="name" className="text-white">
          Name:
        </label>
        <input id="name" type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} className="p-3 rounded-md w-80 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
        {/* end name input */}

        {/* email input */}
        <label htmlFor="email" className="text-white">
          Email:
        </label>
        <input id="email" type="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} className="p-3 rounded-md w-80 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
        {/* end email input */}
      </div>
      {/* end name and email container */}

      {/* message container */}
      <div className="flex flex-col gap-2 mt-5">
        {/* message input */}
        <label htmlFor="message" className="text-white">
          Message:
        </label>
        <textarea
          id="message"
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="p-3 rounded-md w-80 h-40 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-md transition duration-300 mt-3 mb-10">
          Send
        </button>
        {/* end message input */}
      </div>
      {/* end message container */}
    </form>
  );
}
