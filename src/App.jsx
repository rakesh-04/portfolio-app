import React from 'react';
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import { Navbar } from './components/Navbar';
import Header from './components/Header';
import { Dashboard } from './components/Dashboard';
import { Ht } from './components/Ht';
import { Skills } from './components/Skills';
import { Resume } from './components/Resume';

const App = () => {
  return (
    <div className="min-h-screen bg-white p-70 max-w-7xl mx-auto">
       <Navbar />
    <div className="space-y-12">
      <Header />
      <Ht />
      <Dashboard />
      <Skills />
      <Resume />
    </div>
  </div>
);
}

const root = createRoot(document.getElementById("root"));
root.render(
  <Router>
    <App />
  </Router>
);

export default App;