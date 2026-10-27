import Navbar from "../HomePage/Navbar";
import AboutHeader from "../AboutComponents/AboutHeader";
import ProfileSection from "../AboutComponents/ProfileSection";
import SkillsSection from "../AboutComponents/SkillsSection";
import FooterSection from "../AboutComponents/FooterSection";


function About() {
  return (
    <>
      <Navbar activePage="about" />
      <AboutHeader />
      <ProfileSection />
      <SkillsSection />
      <FooterSection />
    </>
  );
}

export default About;