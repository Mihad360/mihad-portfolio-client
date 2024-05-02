import { FaGithubSquare } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
    // https://i.ibb.co/CBDhVXM/mihad-bc-01.png
    // https://i.ibb.co/7JfpxMQ/Mihad-BC-023.png
// https://i.ibb.co/dMhpYG3/Mihad-bc-03.png


    return (
        <div className="flex flex-row-reverse items-center justify-center gap-40 pt-32 ">
            <div className="w-3/6">
                <img className=" " src="https://i.ibb.co/dMhpYG3/Mihad-bc-03.png" alt="" />
            </div>
            <div className="w-[60%]">
                <h1 className="text-2xl font-medium text-black">Hey! I'm</h1>
                <p className="text-5xl font-bold text-emerald-600 pt-3 tracking-wide">
                    <TypeAnimation
                        sequence={[
                            'Montasir',
                            1000,
                            'Montasir Mihad',
                            1000,
                        ]}
                        speed={300}
                        style={{ fontSize: '' }}
                        repeat={Infinity}
                    />
                </p>
                <p className="text-2xl font-bold pt-3">
                    <TypeAnimation
                        sequence={[
                            'Front-end Developer',
                            1000,
                            'MERN Stack Developer',
                            1000,
                        ]}
                        speed={50}
                        style={{ fontSize: '' }}
                        repeat={Infinity}
                    />
                </p>
                <p className="pt-3 font-medium tracking-widest text-lg">Skilled MERN Stack developer passionate about crafting seamless user experiences and scalable solutions. Committed to continuous learning and innovation in web development.</p>
                <p className="flex items-center gap-4 pt-5 text-emerald-600">
                    <a className="text-4xl hover:scale-150 duration-300 ease-in-out transition-all" target="_blank" href="mailto:ahmedmihad962@gmail.com">
                        <MdEmail />
                    </a>
                    <a className="text-3xl hover:scale-150 duration-300 ease-in-out transition-all" target="_blank" href="https://www.facebook.com/miyad.ahammed.3">
                        <FaSquareFacebook />
                    </a>
                    <a className="text-3xl hover:scale-150 duration-300 ease-in-out transition-all" target="_blank" href="https://github.com/Mihad360">
                        <FaGithubSquare />
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Banner;