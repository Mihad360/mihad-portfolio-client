import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BiLogoMediumOld } from "react-icons/bi";
import { FaMoon } from "react-icons/fa";
import { NavLink } from "react-router-dom";
// import Tilt from 'index';
// import './TiltScale.demozap.css';

const Navbar = () => {

    const links = <>
        <div className="flex items-center gap-10 text-lg text-black font-medium">
            <li className=" hover:text-emerald-600">
                <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-emerald-600 font-bold border-2 border-emerald-600 p-2 rounded-full" : ""
                    }
                >
                    HOME
                </NavLink>
            </li>
            <li className=" hover:text-emerald-600">
                <NavLink
                    to="/projects"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-emerald-600 font-bold border-2 border-emerald-600 p-2 rounded-full" : ""
                    }
                >
                    PROJECTS
                </NavLink>
            </li>
            <li className=" hover:text-emerald-600">
                <NavLink
                    to="/about"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-emerald-600 font-bold border-2 border-emerald-600 p-2 rounded-full" : ""
                    }
                >
                    ABOUT
                </NavLink>
            </li>
        </div>
    </>
// [#57cdbe]
    return (
        <div className="border-b-2 border-emerald-600 w-[1280px] fixed z-50 backdrop-blur-md backdrop:filter bg-zinc-50 dark:bg-neutral-900 dark:bg-transparent dark:bg-opacity-80 bg-opacity-60 bg-transparent rounded-b-3xl px-5">
            <div className="flex justify-between items-center gap-20 p-5">
                <div className="flex items-center gap-5">
                    {/* <img className="w-10" src="https://i.ibb.co/nbH5Gqk/maxcdn.png" alt="" /> */}
                    <p className="text-5xl text-emerald-600"><BiLogoMediumOld />
                    </p>
                    {/* <h1 className="text-2xl font-bold text-black">MIHAD</h1> */}
                </div>
                <div className="list-none">
                    {links}
                </div>
                <div>
                    <button className="text-xl"><FaMoon />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;