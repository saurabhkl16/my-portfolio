import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Education from "./pages/education/Education.jsx";
import Home from "./pages/home/Home.jsx";
import Experience from "./pages/experience/Experience.jsx";
import Projects from "./pages/projects/Projects.jsx";
import OpenSource from "./pages/open source/OpenSource.jsx";
import Contact from "./pages/contact/Contact.jsx";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="routes">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/opensource" element={<OpenSource />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
