import React from "react";
import NavBar from "./components/landingpage/navbar/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/landingpage/LandingPage";
import SignUp from "./components/signup/SignUp";

const App = () => {
  return (
    <div>
      {/* <LandingPage /> */}
      <SignUp />
    </div>
  );
};

export default App;
