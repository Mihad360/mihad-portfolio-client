import { FaGithubSquare } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse items-center justify-center md:gap-20 lg:gap-40 pt-10 md:pt-20 px-5 md:px-10 bg-emerald-200 bg-gradient-to-r from-emerald-600 to-transparent dark:bg-neutral-900 dark:bg-none lg:rounded-b-lg h-auto md:h-[700px]">
      <div className="w-full md:w-3/6 mb-10 md:mb-0">
        <img
          className="mx-auto md:mx-0"
          src="https://i.ibb.co/dMhpYG3/Mihad-bc-03.png"
          alt=""
        />
      </div>
      <div className="w-full md:w-[60%] text-center md:text-left">
        <h1 className="text-2xl font-medium text-black dark:text-white">
          Hey! I'm
        </h1>
        <p className="text-3xl md:text-5xl font-bold text-black pt-3 tracking-wide dark:text-white">
          <TypeAnimation
            sequence={["Montasir", 1000, "Montasir Mihad", 1000]}
            speed={300}
            repeat={Infinity}
          />
        </p>
        <p className="text-xl md:text-2xl font-bold pt-3 dark:text-white">
          <TypeAnimation
            sequence={[
              "Front-end Developer",
              1000,
              "MERN Stack Developer",
              1000,
            ]}
            speed={50}
            repeat={Infinity}
          />
        </p>
        <p className="pt-3 font-medium tracking-widest text-sm md:text-lg text-black dark:text-gray-300">
          Skilled MERN Stack developer passionate about crafting seamless user
          experiences and scalable solutions. Committed to continuous learning
          and innovation in web development.
        </p>
        <div className="flex justify-center md:justify-start items-center gap-4 pt-5 text-black dark:text-white pb-10 md:pb-0">
          <a
            className="text-4xl hover:scale-150 duration-300 ease-in-out transition-all"
            target="_blank"
            href="mailto:ahmedmihad962@gmail.com"
            rel="noopener noreferrer">
            <MdEmail />
          </a>
          <a
            className="text-3xl hover:scale-150 duration-300 ease-in-out transition-all"
            target="_blank"
            href="https://www.facebook.com/MontasirMihad360"
            rel="noopener noreferrer">
            <FaSquareFacebook />
          </a>
          <a
            className="text-3xl hover:scale-150 duration-300 ease-in-out transition-all"
            target="_blank"
            href="https://github.com/Mihad360"
            rel="noopener noreferrer">
            <FaGithubSquare />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
