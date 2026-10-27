import profile from "../assets/profile.png";
import { FaFileDownload } from "react-icons/fa";

const ProfileSection = () => {
  return (
    <section className="bg-[#111111] py-10 px-7">
      <div
        className="max-w-7xl mx-auto bg-[#1A1D24] rounded-xl p-8 flex flex-col lg:flex-row gap-10 items-center">
        {/* Left Side - Profile Image */}
        <div className="lg:w-2/5 w-full">
          <img src={profile} alt="Profile" className="w-full rounded-xl object-cover"/>
        </div>

        {/* Right Side - Description */}
        <div className="lg:w-3/5 w-full text-white">
          <p className="leading-8 text-[16px] text-gray-300">
             I'm a Computer Science student at
            <span className="text-[#D8FF2F] font-semibold">{" "} SRM Institute of Science and Technology. </span>  
             My passion lies in building user-friendly solutions that enhance overall user experiences. I am currently focused on
            <span className="text-[#D8FF2F] font-semibold">{" "} React Native, Expo, Firebase, and React, </span>
            leveraging these technologies to create responsive and functional applications. One of my ongoing projects is Rescue Paws, a mobile app designed to facilitate the rescue and adoption of stray and pet dogs. The app will soon be published on the
            <span className="text-[#D8FF2F] font-semibold">{" "} Play Store and App Store, </span> 
            and it incorporates AI-driven features to guide users through the adoption process. In addition to app development, I’ve led the design and development of platforms like the GitHub Community SRM website, which serves as an all-in-one platform for the community. I’ve also organized and managed events such as hackathons and workshops, mentoring others in UI/UX and graphic design. I thrive in 
            <span className="text-[#D8FF2F] font-semibold">{" "} Agile Scrum environments </span>
            and believe collaboration and teamwork are essential to delivering successful projects. I’m always eager to work on impactful projects that challenge me to grow while also contributing to meaningful outcomes. So, whether you're
            <span className="text-[#D8FF2F] font-semibold">{" "} looking for a dedicated developer, a creative designer, or a collaborative team member, </span> 
            I’m here to help bring ideas to life. Let’s connect and create innovative solutions together!
            
          </p>

          <button className="mt-8 flex items-center gap-2 bg-[#D8FF2F] text-black font-semibold px-6 py-3 rounded-md hover:scale-105 transition-all duration-300">
            <FaFileDownload /> Download Resume
          </button>

        </div>
      </div>
    </section>
  );
};

export default ProfileSection