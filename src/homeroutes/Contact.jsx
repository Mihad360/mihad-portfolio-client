import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { IoSend } from "react-icons/io5";

export default function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_2edvdzs", "template_owyg79e", form.current, {
        publicKey: "jSFNkrUxU0F-VKblX",
      })
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div>
      <h1 className="text-4xl text-emerald-600 font-semibold">Contact me</h1>
      <p className="text-lg text-black pt-3 tracking-widest pb-12">
        Find me with a mail in my gmail account.. Have a good response!!
      </p>
      <div className="bg-emerald-200 rounded-lg p-10">
        <div>
          <div className="bg-white rounded-lg flex items-center justify-evenly">
            <div>
              <img
                src="https://i.ibb.co/YBfQmLV/4289985-removebg-preview.png"
                alt=""
              />
            </div>
            <div>
              <form className="space-y-3" ref={form} onSubmit={sendEmail}>
                <div className="flex flex-col">
                  <label className="text-black text-xl font-bold pb-2">
                    Name
                  </label>
                  <input
                    className="border-2 border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent rounded-lg shadow-md p-2 w-80 transition duration-300 ease-in-out transform hover:scale-105 "
                    type="text"
                    name="user_name"
                    placeholder="Write here.."
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-black text-xl font-bold pb-2">
                    Email
                  </label>
                  <input
                    className="bg-emerald-100 border border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent rounded p-2 w-80"
                    type="email"
                    name="user_email"
                    placeholder="Write here.."
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-black text-xl font-bold pb-2">
                    Message
                  </label>
                  <textarea
                    className="border-2 border-black focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent rounded p-2 w-80 h-32"
                    name="message"
                    placeholder="Write here.."
                  />
                </div>
                  <button className="bg-gradient-to-r from-emerald-400 to-emerald-600 text-black font-bold py-2 px-4 rounded hover:from-emerald-500 hover:to-emerald-700 duration-300 flex items-center gap-3 text-lg hover:scale-110 ease-in-out transition-all">
                    <IoSend />
                    <input
                      className="hover:cursor-pointer"
                      type="submit"
                      value="Send"
                    />
                  </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
