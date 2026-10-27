import {
  FaInstagram,
  FaYoutube,
  FaBehance,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa6";

const SocialSection = () => {
  return (
    <div
      className="
      lg:w-[320px]
      bg-[#1A1D24]
      rounded-xl
      flex
      justify-center
      items-center
      px-6
      py-6
      "
    >
      <div className="flex items-center gap-5 text-[#D8FF2F] text-3xl">
        <FaInstagram className="cursor-pointer hover:scale-110 transition duration-300" />
        <FaYoutube className="cursor-pointer hover:scale-110 transition duration-300" />
        <FaBehance className="cursor-pointer hover:scale-110 transition duration-300" />
        <FaLinkedin className="cursor-pointer hover:scale-110 transition duration-300" />
        <FaGithub className="cursor-pointer hover:scale-110 transition duration-300" />
      </div>
    </div>
  );
};

export default SocialSection;