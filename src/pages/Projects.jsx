
const Projects = () => {

    // bg-gradient-to-r from-emerald-400 via-cyan-500 to-emerald-700

    return (
      <div>
        <div
          className="bg-gradient-to-r from-emerald-400 to-warm-gray-300 pt-24 flex items-center justify-center gap-20 px-16 rounded-b-lg h-[700px]">
          <div className="">
            <h1 className="text-2xl text-black font-medium pb-3">
              Hey!! I'm{" "}
              <span className="text-3xl font-bold text-black tracking-wide">
                Montasir Mihad
              </span>{" "}
              <br />
              Here you can see some of my Projects
            </h1>
            <p className="text-black tracking-widest">
              Explore my projects to see how I turn ideas into real-world
              solutions. <br /> Each project showcases my skills and dedication.
              I hope they inspire you!
            </p>
          </div>
          <div>
            <img
              src="https://i.ibb.co/CBP9Cdt/3460022-removebg-preview.png"
              alt=""
            />
          </div>
        </div>
      </div>
    );
};

export default Projects;