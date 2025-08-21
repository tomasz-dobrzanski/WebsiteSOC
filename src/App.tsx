import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import AIProcessing from './components/AIProcessing';
import Workflow from './components/Workflow';
import Deployment from './components/Deployment';
import Benefits from './components/Benefits';
import Footer from './components/Footer';
import PowerPointExport from './components/PowerPointExport';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <AIProcessing />
      <Workflow />
      <Deployment />
      <Benefits />
      <Footer />
      <PowerPointExport />
    </div>
  );
}

export default App;