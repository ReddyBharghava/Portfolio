import Navbar from "../HomePage/Navbar";
import ProjectGrid from "../ProjectComponents/ProjectGrid";
import ProjectHeader from "../ProjectComponents/ProjectHeader";
import FooterSection from "../AboutComponents/FooterSection";
// import BackButton from "../ProjectDescriptionComponents/BackButton";
// import ProjectInfo from "../ProjectDescriptionComponents/ProjectInfo";
// import FeaturesSection from "../ProjectDescriptionComponents/FeaturesSection";

const Projects = () => {
  return (
    <>
      <Navbar activePage="projects" />
      <ProjectHeader />
      <ProjectGrid />

      <FooterSection />
    </>
  );
};

export default Projects;