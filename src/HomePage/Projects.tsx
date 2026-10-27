// import ProjectCard from "./ProjectCard";

// import portfolio from "../assets/portfolio.png";
// import weather from "../assets/weather.png";
// import cred from "../assets/cred.png";

// const Projects = () => {
//   return (
//     <section className="bg-[#111111] px-8 py-10">

//       <div className="max-w-6xl mx-auto">

//         <div className="flex justify-between items-center mb-8">

//           <h2 className="text-white text-4xl font-bold">
//             Recent Projects
//           </h2>

//           <button className="text-white hover:text-[#C6FF00]">
//             See all →
//           </button>

//         </div>

//         <div
//           className="
//           grid
//           grid-cols-1
//           md:grid-cols-2
//           lg:grid-cols-3
//           gap-8
//           "
//         >

//           <ProjectCard
//             image={portfolio}
//             title="Portfolio"
//             subtitle="Personal Website"
//             description="Developed a responsive portfolio website showcasing projects and skills."
//           />

//           <ProjectCard
//             image={weather}
//             title="Weather App"
//             subtitle="React Project"
//             description="Weather forecast application using weather API and React."
//           />

//           <ProjectCard
//             image={cred}
//             title="Cred Clone"
//             subtitle="Landing Page"
//             description="Pixel-perfect clone created using React and Tailwind CSS."
//           />

//         </div>

//       </div>

//     </section>
//   );
// };

// export default Projects;

import React from "react";
import { Link } from "react-router-dom";

import ProjectCard from "./ProjectCard";

import portfolio from "../assets/portfolio.png";
import weather from "../assets/weather.png";
import cred from "../assets/cred.png";

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="bg-[#111111] px-4 py-8 sm:px-6 sm:py-10 lg:px-8"
    >
      <div className="mx-auto w-full max-w-6xl">

        {/* Section Header */}
        <div
          className="
            mb-6
            flex
            flex-col
            items-start
            justify-between
            gap-4
            sm:mb-8
            sm:flex-row
            sm:items-center
          "
        >
          <h2
            className="
              text-3xl
              font-bold
              text-white
              sm:text-4xl
              md:text-5xl
            "
          >
            Recent Projects
          </h2>

          {/* See All Button */}
          <Link
            to="/projects"
            className="
              inline-flex
              items-center
              gap-2
              text-sm
              font-medium
              text-white
              transition-colors
              duration-300
              hover:text-[#C6FF00]
              focus-visible:outline
              focus-visible:outline-2
              focus-visible:outline-offset-4
              focus-visible:outline-[#C6FF00]
              sm:text-base
            "
          >
            See all <span aria-hidden="true">→</span>
          </Link>
        </div>

        {/* Projects Grid */}
        <div
          className="
            grid
            grid-cols-1
            items-stretch
            gap-5
            sm:grid-cols-2
            sm:gap-6
            lg:grid-cols-3
            lg:gap-8
          "
        >
          {/* Portfolio Project */}
          <ProjectCard
            image={portfolio}
            title="Portfolio"
            subtitle="Personal Website"
            description="Developed a responsive portfolio website showcasing projects and skills."
          />

          {/* Weather App Project */}
          <ProjectCard
            image={weather}
            title="Weather App"
            subtitle="React Project"
            description="Weather forecast application using a weather API and React."
          />

          {/* Cred Clone Project */}
          <ProjectCard
            image={cred}
            title="Cred Clone"
            subtitle="Landing Page"
            description="Pixel-perfect landing page clone created using React and Tailwind CSS."
          />
        </div>

      </div>
    </section>
  );
};

export default Projects;
