import React from 'react';
import EmailSignup from './EmailSignup';

const HeroSection = () => {
  return (
    <div className="relative min-h-[calc(100vh-64px)] flex items-center">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://github.githubassets.com/assets/particles-de1dd20f3008.png"
          alt=""
          className="absolute w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Build and ship software on a single, collaborative platform
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12">
            Join the world's most widely adopted AI-powered developer platform.
          </p>
          <EmailSignup />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;