import { useEffect, useState } from "react";
import GradientOverlayCard from "../projectroutes/GradientOverlayCard";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
      });
  }, []);

  return (
    <div className="bg-gradient-to-r from-emerald-400 to-warm-gray-300 min-h-screen pb-6 lg:pb-12 dark:bg-neutral-900 dark:bg-none">
      <div className="py-10 md:py-24 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="max-w-md">
          <h1 className="text-3xl md:text-4xl text-black font-medium pb-4 dark:text-white">
            Hey!! I'm{" "}
            <span className="text-4xl md:text-4xl font-bold text-black tracking-wide dark:text-white">
              Montasir Mihad
            </span>{" "}
          </h1>
          <p className="text-base md:text-lg text-black tracking-wider dark:text-gray-300">
            Here you can see some of my Projects. Explore my projects to see how
            I turn ideas into real-world solutions. Each project showcases my
            skills and dedication. I hope they inspire you!
          </p>
        </div>
        <div className="">
          <img
            src="https://i.ibb.co/CBP9Cdt/3460022-removebg-preview.png"
            alt="Montasir Mihad"
            className="w-80 md:w-96"
          />
        </div>
      </div>

      <div className="pb-12 px-6 md:px-16">
        <h1 className="text-4xl md:text-5xl text-emerald-600 font-semibold mb-8">
          My Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <GradientOverlayCard key={project.id} item={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
