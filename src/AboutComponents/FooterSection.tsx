// import logo from "../assets/logo.png";

// const FooterSection = () => {
//   return (
//     <footer className="bg-[#111111] pt-6 pb-8 px-8">
//       <div
//         className="
//         w-[90%]
//         max-w-7xl
//         mx-auto
//         bg-[#1A1D25]
//         rounded-xl
//         px-10
//         py-10
//         gap-x-10
//         flex
//         items-center
//         justify-between
//         "
//       >
//         {/* Logo */}
//         <div>
//           <img
//             src={logo}
//             alt="Logo"
//             className="w-40 md:w-52"
//           />
//         </div>

//         {/* Right Text */}
//         <div className="text-right">

//           <h2
//             className="
//             font-black
//             uppercase
//             leading-none
//             text-[55px]
//             "
//           >
//             <span className="text-gray-500">Designing the </span>

//             <span className="text-[#D8FF2F]">
//               extraordinary
//             </span>

//             <br />

//             <span className="text-gray-500">one </span>

//             <span className="text-[#D8FF2F]">
//               pixel
//             </span>

//             <span className="text-gray-500">
//               {" "}at a time.
//             </span>

//           </h2>

//           <p className="text-gray-500 text-sm mt-4">
//             Portfolio v2.3 © 2024 Rahul
//           </p>

//         </div>

//       </div>
//     </footer>
//   );
// };

// export default FooterSection;

import React from "react";
import logo from "../assets/logo.png";

const FooterSection: React.FC = () => {
  return (
    <footer className="bg-[#111111] px-4 pb-6 pt-6 sm:px-6 sm:pb-8 lg:px-8">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-7xl
          flex-col
          items-center
          justify-between
          gap-8
          rounded-xl
          bg-[#1A1D25]
          px-5
          py-8
          sm:px-8
          sm:py-10
          md:flex-row
          md:gap-6
          lg:px-10
        "
      >
        {/* Logo */}
        <div className="flex w-full justify-center md:w-auto md:justify-start">
          <img
            src={logo}
            alt="Rahul's Portfolio Logo"
            className="w-32 object-contain sm:w-40 md:w-44 lg:w-52"
          />
        </div>

        {/* Right Text */}
        <div className="w-full text-center md:w-auto md:max-w-[70%] md:text-right">
          <h2
            className="
              text-3xl
              font-black
              uppercase
              leading-tight
              tracking-tight
              sm:text-4xl
              md:text-4xl
              lg:text-[48px]
              xl:text-[55px]
            "
          >
            <span className="text-gray-500">
              Designing the{" "}
            </span>

            <span className="text-[#D8FF2F]">
              extraordinary
            </span>

            <br className="hidden sm:block" />

            <span className="text-gray-500">
              one{" "}
            </span>

            <span className="text-[#D8FF2F]">
              pixel
            </span>

            <span className="text-gray-500">
              {" "}at a time.
            </span>
          </h2>

          {/* Copyright */}
          <p className="mt-4 text-xs text-gray-500 sm:text-sm">
            Portfolio v2.3 © 2024 Rahul
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
