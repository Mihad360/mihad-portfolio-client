/* eslint-disable react/no-unescaped-entities */
import { FaFileExport } from 'react-icons/fa';
import { FaClover } from 'react-icons/fa6';
import { GiSkills } from 'react-icons/gi';
import { IoLogoWebComponent } from 'react-icons/io5';
import { MdCenterFocusStrong } from 'react-icons/md';
import { RiFocusFill } from 'react-icons/ri';

export default function Exp_skill() {
  return (
    <div className="flex gap-6 pb-20">
      <div className="border-2 rounded-lg border-gray-300 p-5 w-[50%]">
        <h1 className="text-emerald-600 font-semibold text-3xl flex items-center gap-5">
          <p>Experience</p>
          <p>
            <FaFileExport />
          </p>
        </h1>
        <div className="pl-5">
          <h1 className="flex items-center gap-5 pt-4">
            <p className="text-2xl font-bold text-black dark:text-gray-300">
              <IoLogoWebComponent />
            </p>
            <p className="text-xl font-semibold text-black dark:text-white">
              Web Developer
            </p>
          </h1>
          <h1 className="pl-12 pt-2 text-lg text-black dark:text-white">
            2023 -{" "}
            <span className="text-emerald-600 font-semibold text-xl">
              Present
            </span>
          </h1>
          <p className="pl-12 dark:text-gray-300">
            As a junior React developer with
            <span className="text-black font-medium"> 8</span> months of course
            at Programming Hero, I've honed my skills in crafting responsive UIs
            and implementing features. Passionate about learning and
            contributing to innovative web solutions with enthusiasm and
            dedication.{" "}
            <a
              className="text-emerald-600 font-semibold underline"
              href="https://drive.google.com/file/d/1n8iP7yRxF-KFliOEAPKuVAQpakV5TZg6/view?usp=sharing"
              target="_blank">
              Achievement Letter
            </a>
          </p>
        </div>
        <h1 className="text-emerald-600 font-semibold text-3xl flex items-center gap-5 pt-8">
          <p>Currently Focused</p>
          <p>
            <MdCenterFocusStrong />
          </p>
        </h1>
        <p className=" space-y-2 pl-5 pt-5">
          <p className="flex items-center gap-3 text-lg text-black">
            <p className="dark:text-gray-300">
              <RiFocusFill />
            </p>
            <p className="dark:text-gray-300">Learning more and new things</p>
          </p>
          <p className="flex items-center gap-3 text-lg text-black">
            <p className="dark:text-gray-300">
              <RiFocusFill />
            </p>
            <p className="dark:text-gray-300">Personal Branding</p>
          </p>
          <p className="flex items-center gap-3 text-lg text-black">
            <p className="dark:text-gray-300">
              <RiFocusFill />
            </p>
            <p className="dark:text-gray-300">Building new projects/designs</p>
          </p>
        </p>
      </div>
      <div className="border-2 rounded-lg border-gray-300 p-5 w-[50%]">
        <h1 className="text-emerald-600 font-semibold text-3xl flex items-center gap-5">
          <p>Skills</p>
          <p>
            <GiSkills />
          </p>
        </h1>
        <p className="text-black pl-5 pt-5 dark:text-gray-300">
          I excel at building user-centric web interfaces with the MERN stack
          (MongoDB, Express.js, React.js, Node.js). Expert in HTML5, CSS3, and
          JavaScript (ES6+), I design beautiful, interactive experiences that
          function flawlessly across devices and browsers. My passion lies in
          crafting modern, responsive web apps that bring your vision to life.
          Let's collaborate!
        </p>
        <div>
          <h1 className="text-emerald-600 font-semibold text-3xl flex items-center gap-5 pt-8">
            <p>Love to do</p>
            <p>
              <FaClover />
            </p>
          </h1>
          <p className="text-black pl-5 pt-5 dark:text-gray-300">
            I love turning ideas into awesome websites using MERN (think
            super-powered JavaScript!). I'm an expert at HTML5, CSS3, and modern
            JavaScript, so I can design beautiful and user-friendly experiences.
            My passion is building websites that work flawlessly on any device
            and bring your vision to life. Beyond the code, I love solving
            challenges and creating something truly amazing. Let's build
            something together!
          </p>
        </div>
      </div>
    </div>
  );
}
