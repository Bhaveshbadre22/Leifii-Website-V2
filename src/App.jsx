import React, { useEffect, useRef, createContext } from "react";
import { isMobile } from "react-device-detect";
import CustomCursor from "./utils/CustomCursor/CustomCursor";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Nav/Navbar/index";
import LandingPage from "./pages/LandingPage";
import Photography from "./pages/Services/Photography/Photography";
import Lenis from "lenis";
import Contact from "./pages/Contact/contact";
import ServicesMain from "./pages/ServicesMain/servicesMain";
import Footer from "./components/Footer/Footer";
import About from "./pages/About/About";
import Branding from "./pages/Services/Branding/branding";
import Marketing from "./pages/Services/Marketing/marketing";
// import Web from "./pages/Services/Web/web";
import Careers from "./pages/Careers/careers";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Spaces from "./pages/Services/Spaces/spaces";
import Influencer from "./pages/Influencer/influencer";
import BlogList from "./components/Blog/BlogList";
import BlogDetail from "./components/Blog/blogDetail";
import ProjectLayout from "./pages/Projects/projectLayout";
import projectData from "./pages/Projects/projectData";
import Gallery from "./pages/Services/Photography/Gallery";

export const LenisContext = createContext(null);

const App = () => {
  const lenisRef = useRef(null);

  useEffect(() => {
    lenisRef.current = new Lenis();

    const raf = (time) => {
      lenisRef.current.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, []);

  const hideNavbar = location.pathname === "/gallery"; // adjust if using `/web/xyz` etc.
  const hideFooter = location.pathname === "/gallery"; // adjust if using `/web/xyz` etc.

  return (
    <LenisContext.Provider value={lenisRef}>
      <div className="w-full min-h-screen overflow-x-hidden">
        {!isMobile && <CustomCursor />}
        {/* <ScrollToTop /> */}
        {!hideNavbar && <Navbar />}
        <Routes>
          <Route path="/" element={<LandingPage />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesMain />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/influencer" element={<Influencer />} />

          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:id" element={<BlogDetail />} />

          {/* <Route path="/services/branding1" element={<BrandingGallery />} /> */}
          <Route path="/services/branding" element={<Branding />} />
          <Route path="/services/photography" element={<Photography />} />
          <Route path="/services/marketing" element={<Marketing />} />
          <Route path="/services/space" element={<Spaces />} />
          {/* <Route path="/services/web" element={<Web />} />*/}

          {/* <Route path="/projects/1" element={<Project1 />} /> */}
          {/* <Route path="/projects/2" element={<Project2 />} /> */}
          <Route path="/gallery" element={<Gallery />} />

          {projectData.map((project) => (
            <Route
              key={project.id}
              path={`/projects/${project.id}`}
              element={<ProjectLayout project={project} />}
            />
          ))}
        </Routes>
        {!hideFooter && <Footer />}
      </div>
    </LenisContext.Provider>
  );
};

export default App;
