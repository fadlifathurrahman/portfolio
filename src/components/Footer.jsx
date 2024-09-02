import { useState } from "react";
import emailjs from "emailjs-com";

export default function Footer() {
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
          from_name: name, // Sending sender's name
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
    <footer id="footer"
    className="flex flex-col max-w-screen items-center justify-center p-5 bg-slate-900 mt-10">
      <p className="text-white text-2xl font-bold
      md:text-3xl
      lg:text-4xl">
        Get in touch
      </p>
      
      {/* Email form */}
      <form onSubmit={sendEmail} className="flex flex-col mt-4 space-y-2">
        <label htmlFor="name" className="text-white">
          Name:
        </label>
        <input
          id="name"
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-3 rounded-md w-80 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <label htmlFor="email" className="text-white">
          Email:
        </label>
        <input
          id="email"
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-3 rounded-md w-80 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

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
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-md transition duration-300"
        >
          Send
        </button>
      </form>
    </footer>
  );
}
