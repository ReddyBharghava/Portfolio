// import { Link } from "react-router-dom";
// import ProjectCard from "../HomePage/ProjectCard";

// import portfolio from "../assets/portfolio.png";
// import weather from "../assets/weather.png";
// import cred from "../assets/cred.png";
// import auth from "../assets/auth.png";
// import todo from "../assets/todo.png";
// import qr from "../assets/QRcode.png";
// import playlist from "../assets/Playlist.png";

// const projects = [
//   {
//     image: portfolio,
//     title: "Portfolio",
//     subtitle: "Frontend",
//     description:
//       "Responsive personal portfolio website built with React and Tailwind CSS.",
//       link: "/projects/portfolio"
//   },
//   {
//     image: weather,
//     title: "Weather App",
//     subtitle: "Full Stack",
//     description:
//       "Weather application using weather API with responsive UI.",
//       link: "/projects/weather"
//   },
//   {
//     image: cred,
//     title: "Cred Clone",
//     subtitle: "Frontend",
//     description:
//       "Responsive clone of the CRED landing page.",
//       link: "/projects/cred"
//   },
//   {
//     image: auth,
//     title: "User Authentication System",
//     subtitle: "Full Stack",
//     description:
//       "Login and registration system with authentication.",
//   },
//   {
//     image: todo,
//     title: "Todo List",
//     subtitle: "Frontend",
//     description:
//       "Task management application with CRUD operations.",
//   },
//   {
//     image: qr,
//     title: "QR Scanner",
//     subtitle: "Frontend",
//     description:
//       "QR code scanner built using React.",
//   },
//   {
//     image: playlist,
//     title: "Playlist Generator",
//     subtitle: "Full Stack",
//     description:
//       "Music playlist recommendation application.",
//   },
// ];

// const ProjectsGrid = () => {
//   return (
//     <section className="bg-[#111111] py-10 px-8">
//       <div className="w-[90%] max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {projects.map((project, index) => (
//             project.title === "Portfolio" ? (
//               <Link
//                 key={index}
//                 to="/projects/portfolio"
//                 className="block hover:scale-[1.02] transition duration-300"
//               >
//                 <ProjectCard
//                   image={project.image}
//                   title={project.title}
//                   subtitle={project.subtitle}
//                   description={project.description}
//                 />
//               </Link>
//             ) : (
//               <ProjectCard
//                 key={index}
//                 image={project.image}
//                 title={project.title}
//                 subtitle={project.subtitle}
//                 description={project.description}
//               />
//             )
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProjectsGrid;

import { Link } from "react-router-dom";
import ProjectCard from "../HomePage/ProjectCard";

import portfolio from "../assets/portfolio.png";
import weather from "../assets/weather.png";
import cred from "../assets/cred.png";
import auth from "../assets/auth.png";
import todo from "../assets/todo.png";
import qr from "../assets/QRcode.png";
import playlist from "../assets/Playlist.png";

const projects = [
  {
    image: portfolio,
    title: "Portfolio",
    subtitle: "Frontend",
    description:
      "Responsive personal portfolio website built with React and Tailwind CSS.",
    link: "/projects/portfolio",
  },
  {
    image: weather,
    title: "Weather App",
    subtitle: "Full Stack",
    description:
      "Weather application using weather API with responsive UI.",
    link: "/projects/weather",
  },
  {
    image: cred,
    title: "Cred Clone",
    subtitle: "Frontend",
    description: "Responsive clone of the CRED landing page.",
    link: "/projects/cred",
  },
  {
    image: auth,
    title: "User Authentication System",
    subtitle: "Full Stack",
    description:
      "Login and registration system with authentication.",
    link: "/projects/auth",
  },
  {
    image: todo,
    title: "Todo List",
    subtitle: "Frontend",
    description:
      "Task management application with CRUD operations.",
    link: "/projects/todo",
  },
  {
    image: qr,
    title: "QR Scanner",
    subtitle: "Frontend",
    description: "QR code scanner built using React.",
    link: "/projects/qr",
  },
  {
    image: playlist,
    title: "Playlist Generator",
    subtitle: "Full Stack",
    description:
      "Music playlist recommendation application.",
    link: "/projects/playlist",
  },
];

const ProjectsGrid = () => {
  return (
    <section className="bg-[#111111] py-10 px-4 sm:px-8">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link
              key={project.title}
              to={project.link}
              className="block hover:scale-[1.02] transition-transform duration-300"
            >
              <ProjectCard
                image={project.image}
                title={project.title}
                subtitle={project.subtitle}
                description={project.description}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;
