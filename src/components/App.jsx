import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Project from "../pages/Project";
import Resume from "../pages/Resume";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
