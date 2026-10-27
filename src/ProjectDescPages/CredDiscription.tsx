import Navbar from "../HomePage/Navbar";
import BackButton from "../ProjectDescriptionComponents/BackButton";
import CredInfo from "../ProjectDescriptionComponents/CredInfo";
import FeaturesSection from "../ProjectDescriptionComponents/FeaturesSection";
import FooterSection from "../AboutComponents/FooterSection";

const CredDiscription = () => {
  return (
    <div className="min-h-screen bg-[#111111]">
      <Navbar activePage="projects" />

      <main>
        <BackButton />

        <CredInfo />

        <FeaturesSection />
      </main>

      <FooterSection />
    </div>
  );
};

export default CredDiscription;