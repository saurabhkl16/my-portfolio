import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Spinner from "./Components/spinner/spinner.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";

const Home = lazy(() => import("./pages/home/Home.jsx"));
const Education = lazy(() => import("./pages/education/Education.jsx"));
const Experience = lazy(() => import("./pages/experience/Experience.jsx"));
const Projects = lazy(() => import("./pages/projects/Projects.jsx"));
const Contact = lazy(() => import("./pages/contact/Contact.jsx"));

// import OpenSource from "./pages/open source/OpenSource.jsx";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="routes">
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/education" element={<Education />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            {/* <Route path="/opensource" element={<OpenSource />} /> */}
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
