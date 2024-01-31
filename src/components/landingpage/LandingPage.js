import React from "react";
import Home from "./home/Home";
import ObjectiveSection from "./ObjectiveSection";
import Blog from "./blog/Blog";
import Footer from "./footer/Footer";
import NavBar from "./navbar/NavBar";

const LandingPage = () => {
  return (
    <>
      <NavBar />
      <Home />
      <ObjectiveSection />
      <Blog />
      <Footer />
    </>
  );
};

export default LandingPage;
