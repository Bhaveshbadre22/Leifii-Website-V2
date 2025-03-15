import "./App.css";
import React, { useEffect } from "react";
import { HeroParallaxDemo } from "../src/components/ui/HeroParallaxDemo.tsx";
import Landing from "./pages/Landing/landing.tsx";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ServicesMain from "./pages/Services/servicesMain.jsx";
import Photo from "./sections/Photo/photo.jsx";
import Testimonials from "./components/Testimonials/testimonials.jsx";
import { TracingBeamDemo } from "./components/ui/TracingBeamDemo.tsx";
import Work from "./pages/Work/work.jsx";
import Branding from "./sections/Branding/branding.jsx";
import About from "./pages/About/about.jsx";
import Project1 from "./sections/Branding/project1.jsx";
import Project2 from "./sections/Branding/project2.jsx";
import Project3 from "./sections/Branding/project3.jsx";
import HeroSection from "./sections/Marketing/marketing.jsx";
import Marketing from "./sections/Marketing/marketing.jsx";
import Contact from "./pages/Contact/contact.jsx";
import BlogList from "./sections/Blog/blogList.jsx";
import BlogDetail from "./sections/Blog/blogDetail.jsx";
import Web from "./sections/Web/web.tsx";
import Careers from "./pages/Careers/careers.jsx";
import Trail from "./sections/Trial/trail.jsx";
import Photography from "./sections/Photography/photography.tsx";
import Influencer from "./pages/Influencer/influencer.jsx";
import Spaces from "./sections/Spaces/spaces.jsx";
import ProjectLayout from "./pages/Projects/projectLayout.jsx";
import projectData from "./pages/Projects/projectData.jsx";
// import ServicesMain from './ServicesMain'; 
// import Contact from "./pages/Contact/contact.jsx";

function App() {
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        document.body.classList.add("no-cursor");
      } else {
        document.body.classList.remove("no-cursor");
      }
    };

    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        {/* <Route path="/work" element={<Work />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesMain />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/influencer" element={<Influencer />} />

        {/* <Route path="/blog" element={<TracingBeamDemo />} /> */}
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:id" element={<BlogDetail />} />

        <Route path="/services/photography" element={<Photography />} />
        <Route path="/services/branding" element={<Branding />} />
        <Route path="/services/marketing" element={<Marketing />} />
        <Route path="/services/web" element={<Web />} />
        <Route path="/services/space" element={<Spaces />} />

        <Route path="/project/1" element={<Project1 />} />
        <Route path="/project/2" element={<ProjectLayout />} />

        {projectData.map((project) => (
          <Route
            key={project.id}
            path={`/projects/${project.id}`}
            element={<ProjectLayout project={project} />}
          />
        ))}
      </Routes>
    </>
  );
}

export default App;
