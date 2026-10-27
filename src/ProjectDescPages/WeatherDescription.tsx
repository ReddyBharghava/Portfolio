// import Navbar from "../HomePage/Navbar";
// import BackButton from "../ProjectDescriptionComponents/BackButton";
// import WeatherInfo from "../ProjectDescriptionComponents/WeatherInfo";

// import FeaturesSection from "../ProjectDescriptionComponents/FeaturesSection";
// import FooterSection from "../AboutComponents/FooterSection";

// const WeatherDescription = () => {
//   return (
//     <>
//       <Navbar activePage="projects" />
//       <BackButton />
//       <WeatherInfo   />
//       <FeaturesSection />
//       <FooterSection />
//     </>
//   );
// };

// export default WeatherDescription;

import Navbar from "../HomePage/Navbar";
import BackButton from "../ProjectDescriptionComponents/BackButton";
import FeaturesSection from "../ProjectDescriptionComponents/FeaturesSection";
import FooterSection from "../AboutComponents/FooterSection";
import Weatherinfo from "../ProjectDescriptionComponents/Weatherinfo";

const WeatherDescription = () => {
  return (
    <div className="min-h-screen bg-[#111111]">
      <Navbar activePage="projects" />

      <main>
        <BackButton />

        <Weatherinfo />

        <FeaturesSection />
      </main>

      <FooterSection />
    </div>
  );
};

export default WeatherDescription;