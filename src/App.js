import React from "react";
import NavBar from "./components/landingpage/navbar/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/landingpage/LandingPage";

const App = () => {
  return (
    <div>
      <LandingPage />
    </div>
  );
};

export default App;
