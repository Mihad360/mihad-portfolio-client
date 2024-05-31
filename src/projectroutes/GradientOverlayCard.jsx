const GradientOverlayCard = ({ item }) => {
  const { image, title, features, demoLink, skills } = item;

  return (
    <div className="pt-10">
      <div className="relative  rounded-lg overflow-hidden  shadow-lg transform transition-transform duration-300 hover:scale-105">
        <div className="w-full  relative">
          <img className="w-full h-80 object-cover" src={image} alt={title} />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex items-end p-4 text-white font-bold opacity-0 transition-opacity duration-300 hover:opacity-100">
            <h2 className="text-3xl font-bold">{title}</h2>
          </div>
        </div>
        <div className="w-full bg-white p-4 flex flex-col justify-between">
          <div>
            <h1 className="text-xl text-black font-semibold pb-3">Features:</h1>
              <ul className="list-disc pl-4 text-black text-lg tracking-wider">
                <li>{features[0]}</li>
                <li>{features[1]}</li>
                <li>{features[2]}</li>
              </ul>
            <h3 className=" font-semibold  mb-2 pt-5 pb-3">
              <span className="flex flex-wrap items-center gap-2">
                {" "}
                <span className="text-black text-xl">Technologies:</span>
                <p className="border py-[2px] px-[5px] rounded-full border-gray-400 text-emerald-600 text-base">
                  {skills[0]}
                </p>
                <p className="border py-[2px] px-[5px] rounded-full border-gray-400 text-emerald-600 text-base">
                  {skills[1]}
                </p>
                <p className="border py-[2px] px-[5px] rounded-full border-gray-400 text-emerald-600 text-base">
                  {skills[2]}
                </p>
                <p className="border py-[2px] px-[5px] rounded-full border-gray-400 text-emerald-600 text-base">
                  {skills[3]}
                </p>
                <p className="border py-[2px] px-[5px] rounded-full border-gray-400 text-emerald-600 text-base">
                  {skills[4]}
                </p>
                <p className="border py-[2px] px-[5px] rounded-full border-gray-400 text-emerald-600 text-base">
                  {skills[5]}
                </p>
              </span>
            </h3>
          </div>
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 px-6 bg-emerald-600 text-white text-lg rounded-md hover:bg-emerald-700 transition-colors self-end cursor-pointer">
            Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default GradientOverlayCard;
