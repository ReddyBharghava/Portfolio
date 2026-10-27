const FeaturesSection = () => {
  return (
    <section className="bg-[#111111] py-6 px-8">
      <div
        className="
        w-[90%]
        max-w-7xl
        mx-auto
        bg-[#1A1D24]
        rounded-xl
        p-8
        "
      >
        <h2 className="text-[#D8FF2F] text-3xl font-bold mb-6">
          Main Features
        </h2>

        <div className="space-y-6">

          <div>
            <h3 className="text-white text-xl font-semibold">
              • Responsive Design
            </h3>

            <p className="text-gray-400 mt-2 leading-7">
              This website is designed to be fully responsive,
              ensuring a seamless experience across various
              devices and screen sizes.
            </p>
          </div>

          <div>
            <h3 className="text-white text-xl font-semibold">
              • Modern UI/UX
            </h3>

            <p className="text-gray-400 mt-2 leading-7">
              The portfolio features a modern and clean user
              interface, providing a pleasant browsing experience
              with a consistent color scheme and typography.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;