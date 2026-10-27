// const ContactHeader = () => {
//   return (
//     <section className="bg-[#111111] py-8 px-8">
//       <div className="w-[90%] max-w-7xl mx-auto bg-[#1A1D24] rounded-lg py-10">
//         <h1 className="text-center text-white text-6xl font-black">
//           CONTACT
//         </h1>
//       </div>
//     </section>
//   );
// };

// export default ContactHeader;

import React from "react";

const ContactHeader: React.FC = () => {
  return (
    <section className="bg-[#111111] px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <div
        className="
          mx-auto
          w-full
          max-w-7xl
          rounded-lg
          bg-[#1A1D24]
          px-4
          py-8
          sm:px-6
          sm:py-10
          md:py-12
          lg:py-14
        "
      >
        <h1
          className="
            text-center
            text-3xl
            font-black
            tracking-wide
            text-white
            sm:text-4xl
            md:text-5xl
            lg:text-6xl
          "
        >
          CONTACT
        </h1>
      </div>
    </section>
  );
};

export default ContactHeader;
