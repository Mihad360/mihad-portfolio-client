// import LoopText from 'react-native-loop-text';

import Marquee from "react-fast-marquee";
import MyComponent from "react-fast-marquee";

// import Ticker from "react-ticker";


const Aboutbanner = () => {
  return (
    <div>
      <div className="pt-32 flex justify-center gap-6">
        <div className="border-2 p-5">
          <h1 className="text-4xl font-bold text-emerald-600 pb-3">Montasir Mihad</h1>
          <p className="flex items-center bg-gray-600 text-white p-2 w-52 rounded-lg mx-auto">
            <Marquee className="flex gap-5 ">
              <div className="pr-5">
                Frontend Developer
              </div>
              <div>
                MERN Stack Developer
              </div>
            </Marquee>
          
          </p>
        </div>
        <div>
          <img className="w-80 rounded-lg shadow-xl" src="https://i.ibb.co/HDPL30W/Untitled-design-3.png" alt="" />
        </div>
        <div>
          <h1>oooooo</h1>
        </div>
      </div>
    </div>
  );
};

export default Aboutbanner;