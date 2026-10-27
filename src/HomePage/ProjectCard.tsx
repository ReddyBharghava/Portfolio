// interface ProjectCardProps 
// {
//   image: string;
//   title: string;
//   subtitle: string;
//   description: string;
// }

// const ProjectCard = ({image, title,subtitle,description,}: ProjectCardProps) => 
// {
//   return (
//     <div className="bg-[#1A1A1A] rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-all duration-300">
      
//       {/* Project Image */}
//       <img src={image} alt={title} className="w-full h-48 object-cover"/>

//       {/* Content */}
//       <div className="p-5">
//         <h3 className="text-white text-xl font-bold">{title}</h3>
//         <p className="text-[#C6FF00] text-sm mt-1">{subtitle}</p>
//         <p className="text-gray-300 text-sm mt-3 leading-6">{description}</p>

//         {/* Technology Tags */}
//         <div className="flex gap-2 mt-5">
//           <span className="bg-yellow-500 px-3 py-1 rounded text-xs font-bold">JS</span>
//           <span className="bg-blue-500 px-3 py-1 rounded text-xs font-bold">React</span>
//           <span className="bg-cyan-500 px-3 py-1 rounded text-xs font-bold">CSS</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectCard;
import React from "react";

interface ProjectCardProps {
  image: string;
  title: string;
  subtitle: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  title,
  subtitle,
  description,
}) => {
  return (
    <article
      className="
        group
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-xl
        bg-[#1A1A1A]
        shadow-lg
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-2xl
      "
    >
      {/* Project Image */}
      <div className="w-full overflow-hidden">
        <img
          src={image}
          alt={`${title} project preview`}
          loading="lazy"
          className="
            h-44
            w-full
            object-cover
            transition-transform
            duration-500
            group-hover:scale-105
            sm:h-48
            md:h-52
            lg:h-56
          "
        />
      </div>

      {/* Project Content */}
      <div className="flex flex-1 flex-col p-4 sm:p-5 md:p-6">
        {/* Project Title */}
        <h3
          className="
            break-words
            text-lg
            font-bold
            text-white
            sm:text-xl
          "
        >
          {title}
        </h3>

        {/* Project Subtitle */}
        <p className="mt-1 break-words text-sm font-medium text-[#C6FF00]">
          {subtitle}
        </p>

        {/* Project Description */}
        <p
          className="
            mt-3
            flex-1
            break-words
            text-sm
            leading-6
            text-gray-300
          "
        >
          {description}
        </p>

        {/* Technology Tags */}
        <div className="mt-5 flex flex-wrap gap-2">
          <span className="rounded bg-yellow-500 px-3 py-1 text-xs font-bold text-black">
            JS
          </span>

          <span className="rounded bg-blue-500 px-3 py-1 text-xs font-bold text-white">
            React
          </span>

          <span className="rounded bg-cyan-500 px-3 py-1 text-xs font-bold text-black">
            CSS
          </span>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
