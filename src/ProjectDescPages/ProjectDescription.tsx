import Navbar from "../HomePage/Navbar";
import BackButton from "../ProjectDescriptionComponents/BackButton";
import ProjectInfo from "../ProjectDescriptionComponents/ProjectInfo";

import FeaturesSection from "../ProjectDescriptionComponents/FeaturesSection";
import FooterSection from "../AboutComponents/FooterSection";

const ProjectDescription = () => {
  return (
    <>
      <Navbar activePage="projects" />
      <BackButton />
      <ProjectInfo />
      
      <FeaturesSection />
      <FooterSection />
    </>
  );
};

export default ProjectDescription;