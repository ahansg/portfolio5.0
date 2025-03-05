import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
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

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Set scroll position to top immediately on route change
    window.scrollTo(0, 0);
  }, [location]); // Triggers on every route change

  return null; // This component does nothing except handling scroll
};

const App = () => {
  useEffect(() => {
    // Disable automatic scroll restoration in the browser
    window.history.scrollRestoration = "manual";
  }, []);

  return (
    <Router>
      <Header />
      {/* ScrollToTop ensures the page is always at the top on route changes */}
      <ScrollToTop />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
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
