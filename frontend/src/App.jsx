import { useState } from "react";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Policies from "./pages/Policies";
import Roleplayers from "./pages/Roleplayers";
import Timeline from "./pages/Timeline";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import TimelineByYear from "./components/TimelineByYear";

function App() {
  return (
    <>
      <main className="main-content">
        <NavBar />
        <Router basename="/test-demo">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/policies" element={<Policies />} />
            <Route path="/roleplayers" element={<Roleplayers />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/timeline/:year" element={<TimelineByYear />} />
          </Routes>
        </Router>
      </main>
    </>
  );
}

export default App;
