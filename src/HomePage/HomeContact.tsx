// import { FaInstagram, FaYoutube, FaBehance, FaLinkedin, FaGithub } from "react-icons/fa6";

// const Contact = () => {
//   return (
//     <section className="bg-[#111111] py-10 px-6">
//       <div
//         className="
//         max-w-6xl
//         mx-auto
//         bg-[#D8FF2F]
//         rounded-xl
//         p-10
//         flex
//         flex-col
//         md:flex-row
//         justify-between
//         items-center
//         gap-8
//         "
//       >
//         {/* Left Side */}
//         <div>
//           <h2 className="text-6xl font-black text-black mb-4">
//             Get in Touch
//           </h2>

//           <p className="text-black leading-7 max-w-md">
//             If you are interested in my work or want to provide feedback
//             about this website, I am open to exchanging ideas.
//           </p>
//         </div>

//         {/* Right Side */}
//         <div className="text-center md:text-right">
//           <p className="font-semibold text-black mb-4">
//             Follow me on
//           </p>

//           <div className="flex justify-center md:justify-end gap-5 text-3xl text-black mb-6">
//             <FaInstagram className="hover:scale-110 hover:text-pink-600 transition-all cursor-pointer" />

//             <FaYoutube className="hover:scale-110 hover:text-red-600 transition-all cursor-pointer" />

//             <FaBehance className="hover:scale-110 hover:text-blue-600 transition-all cursor-pointer" />

//             <FaLinkedin className="hover:scale-110 hover:text-blue-800 transition-all cursor-pointer" />

//             <FaGithub className="hover:scale-110 transition-all cursor-pointer" />
//           </div>

//           <button
//             className="
//             bg-[#111111]
//             text-white
//             px-6
//             py-3
//             rounded-lg
//             hover:bg-black
//             transition
//             "
//           >
//             Contact Me →
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

import React from "react";
import {
  FaInstagram,
  FaYoutube,
  FaBehance,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa6";

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="bg-[#111111] px-4 py-8 sm:px-6 sm:py-10 lg:px-8"
    >
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-6xl
          flex-col
          items-center
          justify-between
          gap-8
          rounded-xl
          bg-[#D8FF2F]
          p-6
          sm:p-8
          md:flex-row
          md:items-center
          md:gap-10
          lg:p-10
        "
      >
        {/* Left Side */}
        <div className="w-full text-center md:w-1/2 md:text-left">
          <h2
            className="
              mb-4
              text-4xl
              font-black
              leading-tight
              text-black
              sm:text-5xl
              lg:text-6xl
            "
          >
            Get in Touch
          </h2>

          <p
            className="
              mx-auto
              max-w-md
              text-sm
              leading-7
              text-black
              sm:text-base
              md:mx-0
            "
          >
            If you are interested in my work or want to provide feedback
            about this website, I am open to exchanging ideas.
          </p>
        </div>

        {/* Right Side */}
        <div className="w-full text-center md:w-1/2 md:text-right">
          <p className="mb-4 text-base font-semibold text-black sm:text-lg">
            Follow me on
          </p>

          {/* Social Media Icons */}
          <div
            className="
              mb-6
              flex
              flex-wrap
              items-center
              justify-center
              gap-5
              text-2xl
              text-black
              sm:gap-6
              sm:text-3xl
              md:justify-end
            "
          >
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="transition-all duration-300 hover:scale-110 hover:text-pink-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-black"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="transition-all duration-300 hover:scale-110 hover:text-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-black"
            >
              <FaYoutube />
            </a>

            <a
              href="https://www.behance.net/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Behance"
              className="transition-all duration-300 hover:scale-110 hover:text-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-black"
            >
              <FaBehance />
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="transition-all duration-300 hover:scale-110 hover:text-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-black"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="transition-all duration-300 hover:scale-110 hover:text-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-black"
            >
              <FaGithub />
            </a>
          </div>

          {/* Contact Button */}
          <button
            type="button"
            onClick={() => {
              window.location.href = "mailto:your-email@example.com";
            }}
            className="
              inline-flex
              items-center
              justify-center
              gap-2
              rounded-lg
              bg-[#111111]
              px-6
              py-3
              text-sm
              font-semibold
              text-white
              transition-all
              duration-300
              hover:bg-black
              hover:shadow-lg
              focus-visible:outline
              focus-visible:outline-2
              focus-visible:outline-offset-2
              focus-visible:outline-black
              active:scale-95
              sm:text-base
            "
          >
            Contact Me <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
