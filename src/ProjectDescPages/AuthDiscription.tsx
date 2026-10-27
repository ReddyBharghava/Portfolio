import Navbar from "../HomePage/Navbar";
import BackButton from "../ProjectDescriptionComponents/BackButton";
import AuthInfo from "../ProjectDescriptionComponents/AuthInfo";
import FeaturesSection from "../ProjectDescriptionComponents/FeaturesSection";
import FooterSection from "../AboutComponents/FooterSection";

const AuthDiscription = () => {
  return (
    <div className="min-h-screen bg-[#111111]">
      <Navbar activePage="projects" />

      <main>
        <BackButton />

        <AuthInfo />

        <FeaturesSection />
      </main>

      <FooterSection />
    </div>
  );
};

export default AuthDiscription;
