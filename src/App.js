import React from "react";
import NavBar from "./components/landingpage/navbar/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/landingpage/LandingPage";
import SignUp from "./components/signup/SignUp";
import SignIn from "./components/signin/SignIn";
import InfluencerDashboard from "./components/influencer/InfluencerDashboard";
import PostBox from "./components/influencer/PostBox";
import InfluencerChat from "./components/influencer/InfluencerChat";
import InfluencerCampaings from "./components/influencer/InfluencerCampaings";

const App = () => {
  return (
    <>
      {/* <InfluencerChat /> */}
      {/* <InfluencerCampaings /> */}
      {/* <InfluencerDashboard /> */}
      {/* <PostBox /> */}
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/SignUp" element={<SignUp />}></Route>
          <Route path="/SignIn" element={<SignIn />}></Route>
          <Route
            path="/InfluencerDashboard"
            element={<InfluencerDashboard />}
          ></Route>
          <Route path="/InfluencerChat" element={<InfluencerChat />}></Route>
          <Route
            path="/InfluencerCampaings"
            element={<InfluencerCampaings />}
          ></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
