/* eslint-disable react/no-unescaped-entities */

import { useEffect, useState } from "react";
import GradientOverlayCard from "../projectroutes/GradientOverlayCard";

const Projects = () => {
  // bg-gradient-to-r from-emerald-400 via-cyan-500 to-emerald-700

  const [project, setProject] = useState([]);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => {
        setProject(data);
      });
  }, []);

  console.log(project);

  return (
    <div>
      <div className="bg-gradient-to-r from-emerald-400 to-warm-gray-300 pt-24 flex items-center justify-center gap-20 px-16 rounded-b-lg h-[700px] dark:bg-neutral-900 dark:bg-none">
        <div className="">
          <h1 className="text-2xl text-black font-medium pb-3 dark:text-white">
            Hey!! I'm{" "}
            <span className="text-3xl font-bold text-black tracking-wide dark:text-white">
              Montasir Mihad
            </span>{" "}
            <br />
            Here you can see some of my Projects
          </h1>
          <p className="text-black tracking-widest dark:text-gray-300">
            Explore my projects to see how I turn ideas into real-world
            solutions. <br /> Each project showcases my skills and dedication. I
            hope they inspire you!
          </p>
        </div>
        <div>
          <img
            src="https://i.ibb.co/CBP9Cdt/3460022-removebg-preview.png"
            alt=""
          />
        </div>
      </div>

      <div className="pt-10 pb-12">
        <h1 className="text-4xl text-emerald-600 font-semibold">My projects</h1>
        <div className="flex justify-center">
          <div className="grid grid-cols-2 gap-6  px-4">
            {project.map((item) => (
              <GradientOverlayCard
                key={item.id}
                item={item}></GradientOverlayCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
