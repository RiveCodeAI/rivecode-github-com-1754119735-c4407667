import React from 'react';
import Navbar from './components/layout/Navbar';
import HeroSection from './components/hero/HeroSection';
import CopilotDemo from './components/copilot/CopilotDemo';
import CustomerLogos from './components/customers/CustomerLogos';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0D1117]">
      <div className="gradient-bg">
        <Navbar />
        <HeroSection />
      </div>
      <CopilotDemo />
      <CustomerLogos />
      <Footer />
    </div>
  );
}

export default App;