/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import MyComponent from "react-fast-marquee";
import { FaDotCircle, FaGithubSquare } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { GrLocation, GrWaypoint } from "react-icons/gr";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { MdCastForEducation, MdEmail, MdOutlineEmail, MdPhonelinkRing } from "react-icons/md";
import TextTransition, { presets } from "react-text-transition";

const texts = ['Hi There!!', 'Hello!!', 'Hey all!!'];

const Aboutbanner = () => {

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000, // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div className="container mx-auto px-4">
      <div className="pt-8 md:pt-32 flex flex-col md:flex-row-reverse justify-center gap-6 pb-6">
        <div className="border-2 rounded-lg border-gray-300 p-5">
          <img
            className="rounded-lg w-full"
            src="https://i.ibb.co/dMhpYG3/Mihad-bc-03.png"
            alt="Montasir Mihad"
          />
          <h1 className="text-2xl md:text-4xl font-bold text-emerald-600 pb-3 text-center pt-3">
            Montasir Mihad
          </h1>
          <p className="flex items-center bg-gradient-to-b from-emerald-500 to-warm-gray-300 text-black p-2 w-full md:w-56 rounded-lg mx-auto text-base md:text-xl dark:text-white">
            <Marquee className="flex gap-5 items-center" speed={50}>
              <div className="pr-5">Frontend Developer</div>
              <div>MERN Stack Developer</div>
            </Marquee>
          </p>
          <p className="border border-emerald-600 mt-6"></p>
          <div className="flex items-center gap-3 pt-6">
            <p className="text-emerald-600 text-4xl">
              <MdOutlineEmail />
            </p>
            <div>
              <p className="text-lg text-black font-semibold dark:text-white">
                Email
              </p>
              <p className="font-medium tracking-widest dark:text-gray-300 text-xs md:text-base">
                ahmedmihad962@gmail.com
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 pt-6">
            <p className="text-emerald-600 text-4xl">
              <MdPhonelinkRing />
            </p>
            <div>
              <p className="text-lg text-black font-semibold dark:text-white">
                Phone
              </p>
              <p className="font-medium tracking-widest dark:text-gray-300 text-xs md:text-base">
                +8801979053892
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 pt-6">
            <p className="text-emerald-600 text-4xl">
              <GrLocation />
            </p>
            <div>
              <p className="text-lg text-black font-semibold dark:text-white">
                Location
              </p>
              <p className="font-medium tracking-widest dark:text-gray-300 text-xs md:text-base">
                Narayangonj, Dhaka-Bangladesh
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 pt-6">
            <p className="text-emerald-600 text-4xl">
              <LiaBirthdayCakeSolid />
            </p>
            <div>
              <p className="text-lg text-black font-semibold dark:text-white">
                Birthday
              </p>
              <p className="font-medium tracking-widest dark:text-gray-300 text-xs md:text-base">
                7th November 2004
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-6 pt-5 text-emerald-600 font-bold">
            <a
              className="text-4xl hover:scale-150 duration-300 ease-in-out transition-all"
              target="_blank"
              href="mailto:ahmedmihad962@gmail.com">
              <MdEmail />
            </a>
            <a
              className="text-3xl hover:scale-150 duration-300 ease-in-out transition-all"
              target="_blank"
              href="https://www.facebook.com/miyad.ahammed.3">
              <FaSquareFacebook />
            </a>
            <a
              className="text-3xl hover:scale-150 duration-300 ease-in-out transition-all"
              target="_blank"
              href="https://github.com/Mihad360">
              <FaGithubSquare />
            </a>
          </div>
        </div>
        <div className="border-2 border-gray-300 p-5 rounded-lg">
          <h1 className="text-emerald-600 text-3xl font-semibold">
            <TextTransition springConfig={presets.wobbly}>
              {texts[index % texts.length]}
            </TextTransition>
          </h1>
          <p className="md:text-lg text-black tracking-wide pt-5 text-justify dark:text-white">
            I'm a student developer living in the bustling city of Narayanganj,
            Dhaka. Fueled by coffee-tea and late nights, I'm obsessed with
            building beautiful and intuitive user interfaces that come alive
            with the power of the MERN Stack (MongoDB, Express.js, React.js,
            Node.js). Every pixel matters to me, and I love crafting seamless
            user experiences that make the web a joy to navigate. My journey's
            just beginning, and I'm constantly pushing the boundaries of
            frontend development. Dive into my portfolio and witness the
            transformation of a passionate developer in the making!
          </p>
          <h1 className="text-emerald-600 font-semibold text-3xl pt-7 flex items-center gap-5">
            <span>Education</span>
            <MdCastForEducation className="text-4xl" />
          </h1>

          <div className="p-5 pt-7 flex flex-col md:flex-row">
            <ol className="w-full md:w-[50%] pr-6 mb-10 md:mb-0">
              <li className="mb-10">
                <h3 className="mb-1 text-2xl font-semibold text-black dark:text-white">
                  Diploma in Computer Science & Technology (Present)
                </h3>
                <h3 className="mb-1 text-lg font-semibold text-gray-500 dark:text-white">
                  Dhaka Polytechnic Institute <br />
                  Dhaka-Bangladesh
                </h3>
                <time className="block mb-2 text-lg font-medium leading-none text-emerald-500 dark:text-gray-500 pt-2">
                  2023-2026
                </time>
                <p className="text-base font-normal text-black dark:text-gray-400 tracking-wide">
                  At Present I am studying at the CST department of Dhaka
                  Polytechnic Institute
                </p>
              </li>
            </ol>
            <ol className="relative border-s border-emerald-400 border-l-2 dark:border-gray-700 w-full md:w-[50%]">
              <li className="mb-10 ms-6">
                <span className="absolute flex items-center justify-center p-2 -left-4 text-2xl bg-emerald-400 rounded-full dark:ring-gray-900 dark:bg-blue-900 text-black">
                  <FaDotCircle className="animate-pulse" />
                </span>
              </li>
              <li className="pl-10">
                <span className="absolute flex items-center justify-center p-2 -left-4 text-2xl bg-emerald-400 rounded-full dark:ring-gray-900 dark:bg-blue-900 mt-0 md:mt-48 text-black">
                  <GrWaypoint />
                </span>
                <h3 className="mb-1 text-2xl font-semibold text-black dark:text-white pt-20 md:pt-48">
                  Secondary School Certificate
                </h3>
                <h3 className="mb-1 text-lg font-semibold text-gray-500 dark:text-white">
                  Merchant Workers High School, Narayanganj-Bangladesh
                </h3>
                <time className="block mb-2 text-lg font-medium leading-none text-emerald-500 dark:text-gray-500 pt-2">
                  2020-2022
                </time>
                <p className="text-base font-normal text-black dark:text-gray-400 tracking-wide">
                  After junior school passing I cleared my SSC (Secondary School
                  Certificate) from this school.
                </p>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutbanner;