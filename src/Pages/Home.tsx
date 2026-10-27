import Navbar from "../HomePage/Navbar";
import Hero from "../HomePage/Hero";
import AboutSection from "../HomePage/AboutSection";
import Projects from "../HomePage/Projects";
import Contact from "../HomePage/HomeContact";
import Footer from "../HomePage/Footer";

function Home() {
  return (
    <>
      <Navbar activePage="home" />
      <Hero />
      <AboutSection />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;