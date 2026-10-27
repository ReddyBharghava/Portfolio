import Navbar from "../HomePage/Navbar";
import GalleryHeader from "../GalleryComponents/GalleryHeader";
import GalleryGrid from "../GalleryComponents/GalleryGrid";
import FooterSection from "../AboutComponents/FooterSection";

const Gallery = () => {
  return (
    <>
      <Navbar activePage="gallery" />
      <GalleryHeader />
      <GalleryGrid />
      <FooterSection />
    </>
  );
};

export default Gallery;