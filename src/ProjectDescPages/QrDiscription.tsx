import Navbar from "../HomePage/Navbar";
import BackButton from "../ProjectDescriptionComponents/BackButton";
import QrInfo from "../ProjectDescriptionComponents/QrInfo";
import FeaturesSection from "../ProjectDescriptionComponents/FeaturesSection";
import FooterSection from "../AboutComponents/FooterSection";

const QrDiscription = () => {
  return (
    <div className="min-h-screen bg-[#111111]">
      <Navbar activePage="projects" />

      <main>
        <BackButton />

        <QrInfo />

        <FeaturesSection />
      </main>

      <FooterSection />
    </div>
  );
};

export default QrDiscription;