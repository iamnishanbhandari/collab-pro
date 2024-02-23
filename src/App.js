import React from "react";
import NavBar from "./components/landingpage/navbar/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/landingpage/LandingPage";
import SignUp from "./components/signup/SignUp";
import SignIn from "./components/signin/InfluencerSignIn";
import InfluencerDashboard from "./components/influencer/InfluencerDashboard";
import PostBox from "./components/influencer/PostBox";
import InfluencerChat from "./components/influencer/InfluencerChat";
import InfluencerCampaings from "./components/influencer/InfluencerCampaings";
import BrandSignin from "./components/signin/BrandSignIn";
import BrandSignup from "./components/signup/BrandSignup";
import BrandCampaings from "./components/brand/BrandCampaings";
import BrandAddCampaings from "./components/brand/BrandAddCampaing";
import BrandAllCampaings from "./components/brand/BrandAllCampaings";
import BrandChat from "./components/brand/BrandChat";
import BrandDashboard from "./components/brand/BrandDashboard";
import { AuthProvider } from "./components/context/AuthContext";

const App = () => {
  return (
    <>
      <AuthProvider>
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
            <Route path="/BrandSignin" element={<BrandSignin />}></Route>
            <Route path="/BrandSignup" element={<BrandSignup />}></Route>
            <Route path="/BrandCampaings" element={<BrandCampaings />}></Route>
            <Route
              path="/BrandAddCampaings"
              element={<BrandAddCampaings />}
            ></Route>
            <Route
              path="/BrandAllCampaings"
              element={<BrandAllCampaings />}
            ></Route>

            <Route path="/BrandChat" element={<BrandChat />}></Route>
            <Route path="/BrandDashboard" element={<BrandDashboard />}></Route>
          </Routes>
        </Router>
      </AuthProvider>
    </>
  );
};

export default App;
