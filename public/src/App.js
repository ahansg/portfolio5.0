import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // import Router and Route components
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";

import Project1 from "./components/projects/Project1";
import Project2 from "./components/projects/Project2";
import Project3 from "./components/projects/Project3";
import Project4 from "./components/projects/Project4";
import Project5 from "./components/projects/Project5";

const App = () => {
  return (
    <Router>
      {" "}
      {/* Wrap your app in the Router */}
      <Header />
      <main className="main">
        <Routes>
          {/* Define routes for different pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />

          <Route path="/" element={<Portfolio />} />
          <Route path="/project1" element={<Project1 />} />
          <Route path="/project2" element={<Project2 />} />
          <Route path="/project3" element={<Project3 />} />
          <Route path="/project4" element={<Project4 />} />
          <Route path="/project5" element={<Project5 />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;

/*
import React from 'react'
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';



const App = () => {
  return (
    <>
    <Header />
    <main className= "main">
      <Home/>
      <About/>
      <Portfolio/>
      <Contact />

    </main>
    </>
  )
}

export default App
*/
