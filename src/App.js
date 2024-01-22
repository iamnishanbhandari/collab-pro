import React from "react";
import NavBar from "./components/landingpage/navbar/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="">hello </Route>
          <Route path="">hello </Route>
          <Route path="">hello </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
