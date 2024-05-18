import React from 'react'
import { FaFileExport } from 'react-icons/fa';
import { IoLogoWebComponent } from 'react-icons/io5';
import { MdCenterFocusStrong } from 'react-icons/md';

export default function Exp_skill() {
  return (
    <div className="flex gap-6">
      <div className="border-2 rounded-lg border-gray-300 p-5 w-[50%]">
        <h1 className="text-emerald-600 font-semibold text-3xl flex items-center gap-5">
          <p>Experience</p>
          <p>
            <FaFileExport />
          </p>
        </h1>
        <div className="pl-5">
          <h1 className="flex items-center gap-5 pt-4">
            <p className="text-2xl font-bold text-black">
              <IoLogoWebComponent />
            </p>
            <p className="text-xl font-semibold text-black">Web Developer</p>
          </h1>
          <h1 className="pl-12 pt-2 text-lg text-black">
            2023 -{" "}
            <span className="text-emerald-600 font-semibold text-xl">
              Present
            </span>
          </h1>
          <p className="pl-12">
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
          <h1 className="flex items-center gap-3">
            <p>Currently Focused</p>
            <p>
              <MdCenterFocusStrong />
            </p>
          </h1>
        </div>
      </div>
      <div className="border-2 rounded-lg border-gray-300 p-5 w-[50%]">
        <p>
          I'm a student developer living in the bustling city of Narayanganj,
          Dhaka. Fueled by coffee-tea and late nights, I'm obsessed with
          building beautiful and intuitive user interfaces that come alive with
          the power of the MERN Stack (MongoDB, Express.js, React.js, Node.js).
          Every pixel matters to me, and I love crafting seamless user
          experiences that make the web a joy to navigate. My journey's just
          beginning, and I'm constantly pushing the boundaries of frontend
          development. Dive into my portfolio and witness the transformation of
          a passionate developer in the making!
        </p>
      </div>
    </div>
  );
}
