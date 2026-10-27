import Navbar from "../HomePage/Navbar";
import BackButton from "../ProjectDescriptionComponents/BackButton";
import Playlist from "../ProjectDescriptionComponents/PlaylistInfo";
import FeaturesSection from "../ProjectDescriptionComponents/FeaturesSection";
import FooterSection from "../AboutComponents/FooterSection";

const PlaylistDiscription = () => {
  return (
    <div className="min-h-screen bg-[#111111]">
      <Navbar activePage="projects" />

      <main>
        <BackButton />

        <Playlist />

        <FeaturesSection />
      </main>

      <FooterSection />
    </div>
  );
};

export default PlaylistDiscription;