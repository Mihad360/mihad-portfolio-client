import { useState, useEffect } from "react";
import { BiLogoMediumOld } from "react-icons/bi";
import { FaMoon } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
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
    <ul className="flex items-center gap-4 md:gap-10 text-xs md:text-lg text-black font-medium dark:text-white">
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
    </ul>
  );

  return (
    <div>
      {/* Navbar for tablet and desktop views */}
      <div className="hidden md:block transition duration-200 border-b-2 border-emerald-600 w-full md:w-full lg:w-[1280px] fixed z-50 backdrop-blur-md bg-zinc-50 dark:bg-neutral-900 dark:bg-opacity-80 bg-opacity-60 rounded-b-3xl px-5 dark:text-white top-0">
        <div className="flex justify-between items-center gap-20 p-4">
          <div className="flex items-center gap-5">
            <p className="text-5xl text-emerald-600">
              <BiLogoMediumOld />
            </p>
          </div>
          <div className="list-none">{links}</div>
          <div>
            <button onClick={toggledarkmode} className="text-xl ">
              <FaMoon className="dark:text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Navbar for mobile view */}
      <div className="md:hidden fixed bottom-0 left-0 w-full border-t-2 border-emerald-600 bg-zinc-50 dark:bg-neutral-900 dark:bg-opacity-80 bg-opacity-60 backdrop-blur-md px-2 py-3 z-50">
        <div className="flex justify-around items-center">
          {links}
          <button onClick={toggledarkmode} className="text-xl dark:text-white">
            <FaMoon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
