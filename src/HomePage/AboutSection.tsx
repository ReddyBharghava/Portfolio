


import React from "react";

const AboutSection: React.FC = () => {
  return (
    <section className="flex justify-center bg-[#111111] px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
      <div
        className="
          w-full
          max-w-6xl
          rounded-xl
          bg-[#D8FF2F]
          px-5 py-7
          sm:px-8 sm:py-9
          md:px-10 md:py-10
          lg:px-12 lg:py-12
        "
      >
        {/* Heading */}
        <h2
          className="
            mb-6
            text-center
            text-3xl
            font-black
            text-black
            sm:mb-8 sm:text-4xl
            md:text-5xl
          "
        >
          About
        </h2>

        {/* Content */}
        <p
          className="
            text-justify
            text-sm
            leading-7
            text-black
            sm:text-base
            sm:leading-8
            md:text-lg
          "
        >
          Hi there! I'm Rahul, a third-year Computer Science student at SRM
          Institute with a passion for crafting user-centric experiences. I
          specialize in UI/UX design, front-end development, and graphic design,
          with expertise in HTML, CSS, JavaScript, React, Node.js, Tailwind CSS,
          QML, and C++. I thrive on collaboration and bring experience in agile
          scrum methodologies. Beyond coding, I enjoy photography, graphic
          design, and exploring music. Let's connect and bring your digital
          visions to life.
        </p>

        {/* Button */}
        <div className="mt-6 flex justify-end sm:mt-8">
          <button
            type="button"
            className="
              rounded-md
              bg-[#1A1A1A]
              px-5 py-2.5
              text-sm
              font-semibold
              text-white
              transition-all
              duration-300
              hover:bg-black
              hover:shadow-lg
              focus:outline-none
              focus:ring-2
              focus:ring-black
              focus:ring-offset-2
              focus:ring-offset-[#D8FF2F]
              active:scale-95
              sm:px-6 sm:text-base
            "
          >
            More...
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
