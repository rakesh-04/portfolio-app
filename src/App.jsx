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
      <div id="home" className=""> {/* Adds padding-bottom */}
        <Portfolio />
      </div>
      <div id="Ht" className="mt-10 md:mt-20"> {/* Adds margin-top */}
        <Ht />
      </div>
      <div className="mt-10 md:mt-20"> {/* Adds margin-top */}
        <Dashboard />
      </div>
      <div className="mt-10 md:mt-20"> {/* Adds margin-top */}
        <Skills />
      </div>
      <div className="mt-10 md:mt-20"> {/* Adds margin-top */}
        <Resume />
      </div>
      <div id="contact" className="mt-10 md:mt-20"> {/* Adds margin-top */}
        <Contact />
      </div>
    </div>
  );
};

const App = () => {
  return (
   
      <div
        className="min-h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/src/assets/background.jpg')" }} // Update with the correct path to your image
      >
        <div className="min-h-screen bg-white bg-opacity-80 p-4 md:p-10 max-w-7xl mx-auto">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} /> {/* Add Projects Page Route */}
          </Routes>
        </div>
      </div>
   
  );
};

export default App;
