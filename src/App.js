import React from "react";
import NavBar from "./components/landingpage/navbar/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route>hello </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
