import { FaEye, FaFileDownload } from "react-icons/fa";
import { VscDebugBreakpointLog } from "react-icons/vsc";

const Resume = () => {
  return (
    <div className="pt-12 px-4 md:px-12">
      <h1 className="text-4xl text-emerald-600 font-semibold text-center md:text-left">
        MY RESUME
      </h1>
      <div className="pt-12 flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-1/2 lg:w-2/5 mb-10 md:mb-0">
          <img
            className="mx-auto md:mx-0"
            src="https://i.ibb.co/bKxbrq0/Mesa-de-trabajo-1-removebg-preview.png"
            alt=""
          />
        </div>
        <div className="w-full md:w-1/2 lg:w-2/5 text-center md:text-left">
          <p className="text-3xl text-emerald-600 font-semibold pt-2">RESUME</p>
          <div className="text-lg text-black tracking-wide pt-3 font-medium dark:text-white">
            <div className="flex gap-3 items-center justify-center md:justify-start">
              <VscDebugBreakpointLog />
              <p>
                Resume is one of the popular ways to showcase personal skills
                and development.
              </p>
            </div>
            <div className="flex gap-3 items-center pt-2 justify-center md:justify-start">
              <VscDebugBreakpointLog />
              <p>
                Open the Resume and explore freely. Hope it can give you good
                choices.
              </p>
            </div>
            <div className="flex gap-3 items-center pt-2 justify-center md:justify-start">
              <VscDebugBreakpointLog />
              <p>Download my resume to see the skills that set me apart.</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-5 justify-center md:justify-start pt-5">
            <a
              href="https://drive.google.com/file/d/1WfwWnwQrnUdPQc2j76H47wpq8pr01dDl/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 btn hover:bg-emerald-400 text-lg text-white font-semibold bg-emerald-600 px-5 py-2 hover:scale-110 duration-300 ease-in-out transition-all hover:text-black">
              <FaEye />
              <span>Resume</span>
            </a>
            <a
              href="/Montasir Mihad's Resume (2) (1).pdf"
              download="MihadResume.PDF"
              className="flex items-center gap-2 btn hover:bg-emerald-400 text-lg text-white font-semibold bg-emerald-600 px-5 py-2 hover:scale-110 duration-300 ease-in-out transition-all hover:text-black">
              <FaFileDownload />
              <span>Download</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
