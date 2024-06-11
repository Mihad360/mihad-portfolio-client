import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { IoSend } from "react-icons/io5";
import Swal from "sweetalert2";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2edvdzs",
        "template_owyg79e",
        form.current,
        "jSFNkrUxU0F-VKblX"
      )
      .then(
        (result) => {
          if (result.text === "OK") {
            form.current.reset();
            Swal.fire({
              title: "Sent",
              text: "The message sent successfully",
              icon: "success",
            });
          }
          console.log("SUCCESS!", result.text);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="pt-12 pb-20 px-5 lg:px-20">
      <h1 className="text-4xl text-emerald-600 font-semibold text-center">
        Contact me
      </h1>
      <p className="text-lg text-black pt-3 tracking-widest pb-12 dark:text-white text-center">
        Find me with an email in my Gmail account.. Have a good response!!
      </p>
      <div className="bg-emerald-300 rounded-lg p-10 dark:bg-neutral-900">
        <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8">
          <div className="flex-shrink-0">
            <img
              src="https://i.ibb.co/YBfQmLV/4289985-removebg-preview.png"
              alt=""
              className="w-72 md:w-96"
            />
          </div>
          <div className="bg-white rounded-lg flex flex-col items-center justify-center p-6 dark:bg-neutral-900">
            <form className="space-y-3" ref={form} onSubmit={sendEmail}>
              <div className="flex flex-col w-full">
                <label className="text-black text-xl font-bold pb-2 dark:text-white">
                  Name
                </label>
                <input
                  className="border-2 border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent rounded-lg shadow-md p-3 w-full lg:w-80 transition duration-300 ease-in-out transform hover:scale-105"
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="flex flex-col w-full">
                <label className="text-black text-xl font-bold pb-2 dark:text-white">
                  Email
                </label>
                <input
                  className="bg-emerald-100 border border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent rounded p-3 w-full lg:w-80"
                  type="email"
                  name="user_email"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="flex flex-col w-full">
                <label className="text-black text-xl font-bold pb-2 dark:text-white">
                  Message
                </label>
                <textarea
                  className="border-2 border-black focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent rounded p-3 w-full lg:w-80 h-32"
                  name="message"
                  placeholder="Your Message"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-emerald-400 to-emerald-600 text-black font-bold py-3 px-6 rounded hover:from-emerald-500 hover:to-emerald-700 duration-300 flex items-center gap-3 text-lg hover:scale-110 ease-in-out transition-all placeholder:text-white">
                <IoSend />
                <span>Send</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
