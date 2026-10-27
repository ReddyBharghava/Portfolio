import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Project from "./Pages/Project";
import ProjectDescription from "./ProjectDescPages/ProjectDescription";
import Gallery from "./Pages/Gallery";
import Contact from "./Pages/Contact";
import WeatherDescription from "./ProjectDescPages/WeatherDescription";
import AuthDiscription from "./ProjectDescPages/AuthDiscription";
import CredDiscription from "./ProjectDescPages/CredDiscription";
import TodoDiscription from "./ProjectDescPages/TodoDiscription";
import QrDiscription from "./ProjectDescPages/QrDiscription";
import PlaylistDiscription from "./ProjectDescPages/PlaylistDiscription";
function App() {
  return (
    <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/projects" element={<Project />} />

  {/* Project Description */}
  <Route
    path="/projects/portfolio"element={<ProjectDescription />} />
    <Route path="/projects/weather" element={<WeatherDescription />} />
    <Route path="/projects/cred" element={<CredDiscription />} />
     <Route path="/projects/todo" element={<TodoDiscription />} />
 <Route path="/projects/qr" element={<QrDiscription />} />
  <Route path="/projects/playlist" element={<PlaylistDiscription />} />
  <Route path="/projects/auth" element={<AuthDiscription />} />



  <Route path="/gallery" element={<Gallery />} />
  <Route path="/contact" element={<Contact />} />

 
</Routes>
  )
}

export default App;