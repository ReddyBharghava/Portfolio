import SocialSection from "./SocialSection";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaFigma,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiCplusplus,
  SiQt,
} from "react-icons/si";

const skills = [
  { icon: <FaHtml5 />, color: "text-orange-500" },
  { icon: <FaCss3Alt />, color: "text-blue-500" },
  { icon: <SiJavascript />, color: "text-yellow-400" },
  { icon: <FaReact />, color: "text-cyan-400" },
  { icon: <SiTailwindcss />, color: "text-sky-400" },
  { icon: <SiCplusplus />, color: "text-blue-600" },
  { icon: <FaFigma />, color: "text-pink-500" },
  { icon: <SiQt />, color: "text-green-500" },
];

const SkillsSection = () => {
  return (
    <section className="bg-[#111111] px-8 py-1">
      <div className="w-[90%] max-w-7xl mx-auto flex flex-col lg:flex-row gap-6">

        {/* Skills Card */}
        <div className="flex-1 bg-[#1A1D24] rounded-xl p-6">

          <h2 className="text-white text-2xl font-bold mb-6">
            Skills
          </h2>

          <div className="flex flex-wrap gap-6 text-5xl">

            {skills.map((skill, index) => (
              <div
                key={index}
                className={`${skill.color} hover:scale-110 transition duration-300`}
              >
                {skill.icon}
              </div>
            ))}

          </div>

        </div>

        {/* Social Card */}
         <SocialSection />
      </div>
    </section>
  );
};

export default SkillsSection;