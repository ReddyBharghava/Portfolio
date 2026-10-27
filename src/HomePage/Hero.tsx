// import { FaGithub, FaLinkedin } from "react-icons/fa";

// const Hero = () => 
// {
//     return (
//     <section id="home" className="relative h-550px bg-[#111111] flex justify-center items-center overflow-hidden p-7 pb-30">

//      {/* Background text */}
//      <h1 className="absolute text-[150px] font-black text-transparent uppercase tracking-tight pt-60" 
//         style={{WebkitTextStroke:"1px #253000"}}>DESIGNER UI<br/>AND DEVELOPER FRONT</h1>
        
//      {/* Center content */}
//      <div className="relative z-10 text-center">
//         <p className="text-lime-400 font-bold text-xl">Hey There I'm</p>
//         <h2 className="text-lime-400 font-black font-humane text-[150px] leading-none">RAHUL</h2>
//         <p className="text-lime-400 font-semibold">Currently Studying Computer Science <br/>and Engineering</p>
//         <div className="flex justify-center gap-6 mt-5 text-lime-400 text-3xl">
//         <FaLinkedin />
//         <FaGithub />
//         </div>
//      </div>
//     </section>
//  )
// }


// export default Hero;


import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="
        relative
        flex
        min-h-[500px]
        w-full
        items-center
        justify-center
        overflow-hidden
        bg-[#111111]
        px-4
        py-16
        sm:min-h-[550px]
        sm:px-6
        md:min-h-[600px]
        lg:min-h-[650px]
      "
    >
      {/* Background Text */}
      <h1
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          w-max
          max-w-none
          -translate-x-1/2
          -translate-y-1/2
          whitespace-nowrap
          text-center
          text-[55px]
          font-black
          uppercase
          leading-[1.1]
          tracking-tight
          text-transparent
          sm:text-[85px]
          md:text-[115px]
          lg:text-[150px]
        "
        style={{
          WebkitTextStroke: "1px #253000",
        }}
      >
        DESIGNER UI
        <br />
        AND DEVELOPER FRONT
      </h1>

      {/* Center Content */}
      <div className="relative z-10 w-full text-center">
        {/* Introduction */}
        <p className="text-base font-bold text-lime-400 sm:text-lg md:text-xl">
          Hey There I'm
        </p>

        {/* Name */}
        <h2
          className="
            mt-2
            font-humane
            text-6xl
            font-black
            leading-none
            text-lime-400
            sm:text-8xl
            md:text-[120px]
            lg:text-[150px]
          "
        >
          RAHUL
        </h2>

        {/* Description */}
        <p
          className="
            mt-3
            text-sm
            font-semibold
            leading-relaxed
            text-lime-400
            sm:text-base
            md:text-lg
          "
        >
          Currently Studying Computer Science
          <br />
          and Engineering
        </p>

        {/* Social Media Icons */}
        <div className="mt-6 flex justify-center gap-6 text-2xl text-lime-400 sm:text-3xl">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition duration-300 hover:scale-110 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime-400"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition duration-300 hover:scale-110 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime-400"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
