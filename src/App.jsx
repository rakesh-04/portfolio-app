import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./index.css";
import { Navbar } from './components/Navbar';
import Portfolio from './components/Header';
import { Dashboard } from './components/Dashboard';
import { Ht } from './components/Ht';
import { Skills } from './components/Skills';
import { Resume } from './components/Resume';
import Contact from './components/Contact';
import { ProjectsPage } from './components/ProjectsPage'; // Import your Projects page

const HomePage = () => {
  return (
    <div className="space-y-12">
      <div id="home">
        <Portfolio />
      </div>
      <div id="Ht">
        <Ht />
      </div>
      <Dashboard />
      <Skills />
      <Resume />
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

const App = () => {
  return (
    
      <div className="min-h-screen bg-white p-70 max-w-7xl mx-auto">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} /> {/* Add Projects Page Route */}
          <Route path="/contact" element={<Contact />} /> {/* Add Contact Page Route */}
          <Route path="/Ht" element={<Ht />} /> {/* Add About Page Route */}
        </Routes>
      </div>
   
  );
};

export default App;
