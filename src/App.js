import React from "react";
import NavBar from "./components/landingpage/navbar/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/landingpage/LandingPage";
import SignUp from "./components/signup/SignUp";
import SignIn from "./components/signin/SignIn";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/SignUp" element={<SignUp />}></Route>
          <Route path="/SignIn" element={<SignIn />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
