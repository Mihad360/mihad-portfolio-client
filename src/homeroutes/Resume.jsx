import { FaEye, FaFileDownload } from "react-icons/fa";
import { VscDebugBreakpointLog } from "react-icons/vsc";

const Resume = () => {
    return (
        <div className="pt-12">
            <h1 className="text-4xl text-emerald-600 font-semibold">MY RESUME</h1>
            <div className="pt-12 flex items-center justify-between ">
                <div>
                    <img className="" src="https://i.ibb.co/bKxbrq0/Mesa-de-trabajo-1-removebg-preview.png" alt="" />
                </div>
                <div className="w-[40%]">
                    {/* <h1 className="text-2xl text-black text-center -tracking-wide">Here is my</h1> */}
                    <p className="text-3xl text-emerald-600 font-semibold pt-2 text-center">RESUME</p>
                    <p className="text- text-lg text-black tracking-wide pt-3 font-medium dark:text-white">
                        <p className="flex gap-3 items-center">
                            <h1><VscDebugBreakpointLog /></h1>
                            <h1>Resume is one of the popular way to showcase the personal skills and development.</h1>
                        </p>
                        <p className="flex gap-3 items-center pt-2">
                            <h1><VscDebugBreakpointLog /></h1>
                            <h1>Open the Resume and explore freely. Hope it can give you good choices.</h1>
                        </p>
                        <p className="flex gap-3 items-center pt-2">
                            <h1><VscDebugBreakpointLog /></h1>
                            <h1>Download my resume to see the skills that set me apart.</h1>
                        </p>
                    </p>
                    <div className="flex items-center gap-5 justify-center pt-5">
                        <a
                            href="https://drive.google.com/file/d/1WfwWnwQrnUdPQc2j76H47wpq8pr01dDl/view?usp=sharing"
                            target="_blank"
                            className="btn hover:bg-emerald-400 text-lg text-white font-semibold bg-emerald-600 px-5 hover:scale-110 duration-300 ease-in-out transition-all hover:text-black">
                            <p><FaEye />
                            </p>
                            <p className="">Resume</p>
                        </a>
                        <a href="/Montasir Mihad's Resume (2) (1).pdf" download="MihadResume.PDF" className="btn hover:bg-emerald-400 text-lg text-white font-semibold bg-emerald-600 px-5 hover:scale-110 duration-300 ease-in-out transition-all hover:text-black">
                            <p><FaFileDownload />
                            </p>
                            <p >Download</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;