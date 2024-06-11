import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { BiLogoMediumOld } from "react-icons/bi";
import { FaMoon } from "react-icons/fa";
import { NavLink } from "react-router-dom";
// import Tilt from 'index';
// import './TiltScale.demozap.css';

const Navbar = () => {
  // Initialize dark mode state based on localStorage value or default to false
  const [darkmode, setDarkmode] = useState(() => {
    const savedMode = localStorage.getItem("darkmode");
    return savedMode ? JSON.parse(savedMode) : false;
  });

  const toggledarkmode = () => {
    setDarkmode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("darkmode", JSON.stringify(newMode));
      return newMode;
    });
  };

  useEffect(() => {
    if (darkmode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkmode]);

  const links = (
    <div className="flex items-center gap-10 text-lg text-black font-medium dark:text-white">
      <li className="hover:text-emerald-600 dark:hover:text-emerald-400">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-emerald-600 font-bold border-2 border-emerald-600 p-2 rounded-full dark:text-emerald-400 dark:border-emerald-400"
              : ""
          }>
          HOME
        </NavLink>
      </li>
      <li className="hover:text-emerald-600 dark:hover:text-emerald-400">
        <NavLink
          to="/projects"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-emerald-600 font-bold border-2 border-emerald-600 p-2 rounded-full dark:text-emerald-400 dark:border-emerald-400"
              : ""
          }>
          PROJECTS
        </NavLink>
      </li>
      <li className="hover:text-emerald-600 dark:hover:text-emerald-400">
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-emerald-600 font-bold border-2 border-emerald-600 p-2 rounded-full dark:text-emerald-400 dark:border-emerald-400"
              : ""
          }>
          ABOUT
        </NavLink>
      </li>
    </div>
  );

  return (
    <div>
      <div className="transition duration-200 border-b-2 border-emerald-600 w-[1280px] fixed z-50 backdrop-blur-md backdrop:filter bg-zinc-50 dark:bg-neutral-900 dark:bg-opacity-80 bg-opacity-60 bg-transparent rounded-b-3xl px-5 dark:text-white">
        <div className="flex justify-between items-center gap-20 p-4">
          <div className="flex items-center gap-5">
            {/* <img className="w-10" src="https://i.ibb.co/nbH5Gqk/maxcdn.png" alt="" /> */}
            <p className="text-5xl text-emerald-600">
              <BiLogoMediumOld />
            </p>
            {/* <h1 className="text-2xl font-bold text-black">MIHAD</h1> */}
          </div>
          <div className="list-none">{links}</div>
          <div>
            <button onClick={toggledarkmode} className="text-xl">
              <FaMoon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
