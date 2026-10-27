import portfolio from "../assets/portfolio.png";

import techStack from "../assets/techStack.png";

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";



const ProjectInfo = () => {
  return (
    <section className="bg-[#111111] py-6 px-8">
      <div
        className="
        w-[90%]
        max-w-7xl
        mx-auto
        bg-[#1A1D24]
        rounded-xl
        p-8
        flex
        flex-col
        lg:flex-row
        gap-8
        "
      >
        {/* Left Side */}
        <div className="lg:w-1/2">
          <img
            src={portfolio}
            alt="Portfolio"
            className="w-full rounded-lg"
          />
        </div>

        {/* Right Side */}
        <div className="lg:w-1/2 text-white">

          <h2 className="text-4xl font-bold mb-2">
            Portfolio
          </h2>

          <p className="text-[#D8FF2F] font-semibold mb-4">
            Frontend
          </p>

          <p className="text-gray-300 leading-7 mb-6">
            This project is a portfolio website developed using React.
            It showcases projects, skills, and contact information with
            a modern, responsive UI built using Tailwind CSS.
          </p>

          {/* Tech Stack */}
          <h3 className="font-semibold mb-3">
            Tech Stack
          </h3>

          <div className="flex gap-3 mb-6">
              <img
                src={techStack}
                alt="Tech Stack"
                className="w-170px object-contain mb-6"
              />
          </div>

          {/* Buttons */}
          <div className="flex gap-4">

            <button
              className="
              bg-[#D8FF2F]
              text-black
              px-6
              py-2
              rounded-md
              flex
              items-center
              gap-2
              hover:scale-105
              transition
              "
            >
              <FaExternalLinkAlt />
              Demo
            </button>

            <button
              className="
              bg-[#D8FF2F]
              text-black
              px-6
              py-2
              rounded-md
              flex
              items-center
              gap-2
              hover:scale-105
              transition
              "
            >
              <FaGithub />
              GitHub
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ProjectInfo;