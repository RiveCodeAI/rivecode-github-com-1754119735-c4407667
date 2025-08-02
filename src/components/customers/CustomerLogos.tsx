import React from 'react';
import LogoScroll from './LogoScroll';

const CustomerLogos = () => {
  return (
    <section className="bg-[#0D1117] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Accelerate performance
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            With GitHub Copilot embedded throughout the platform, you can simplify your toolchain, automate tasks, and improve the developer experience.
          </p>
        </div>
        <LogoScroll />
      </div>
    </section>
  );
};

export default CustomerLogos;