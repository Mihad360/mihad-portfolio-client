import { BiLogoMediumOld } from "react-icons/bi";
import { FaGithub, FaFacebook, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10 dark:bg-neutral-900 ">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
          <p className="text-5xl text-black dark:text-white">
            <BiLogoMediumOld />
          </p>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
            Montasir Mihad-Portfolio
          </h1>
          <p className="text-gray-600 mt-2 text-center md:text-left dark:text-gray-300">
            A portfolio is identy for a developer for a programmer. So make it
            attractive to showcase a good and simple overview of self.
          </p>
        </div>
        <div className="flex flex-col items-center md:items-start mb-6 md:mb-0 dark:text-white">
          <h2 className="text-xl font-semibold text-gray-800 mb-2 dark:text-white">
            Technologies Used
          </h2>
          <ul className="text-gray-600 dark:text-gray-300">
            <li>React</li>
            <li>Tailwind CSS</li>
            <li>JavaScript</li>
            <li>HTML & CSS</li>
            <li>And more</li>
          </ul>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-xl font-semibold text-gray-800 mb-2 dark:text-white">
            Connect with Me
          </h2>
          <div className="flex space-x-4">
            <a
              href="https://github.com/Mihad360"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-300 dark:text-white">
              <FaGithub size="1.5em" />
            </a>
            <a
              href="https://www.facebook.com/MontasirMihad360"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-300 dark:text-white">
              <FaFacebook size="1.5em" />
            </a>
            <a
              href="mailto:ahmedmihad962@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-300 dark:text-white">
              <FaEnvelope size="1.5em" />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-6 text-center text-gray-600 dark:text-gray-400">
        &copy; 2024 Montasirltd. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
