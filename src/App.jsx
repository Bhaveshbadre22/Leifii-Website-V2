import React, { useEffect } from "react";
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
import BrandingGallery from "./pages/Services/Branding/BrandingGallery";

const App = () => {
  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <div className="w-full min-h-screen overflow-x-hidden">
        {!isMobile && <CustomCursor />}
        {/* <ScrollToTop /> */}
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesMain />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/influencer" element={<Influencer />} />

          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:id" element={<BlogDetail />} />

          <Route path="/services/branding" element={<Branding />} />
          <Route path="/services/branding1" element={<BrandingGallery />} />
          <Route path="/services/photography" element={<Photography />} />
          <Route path="/services/marketing" element={<Marketing />} />
          <Route path="/services/space" element={<Spaces />} />
          {/* <Route path="/services/web" element={<Web />} />*/}
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;
