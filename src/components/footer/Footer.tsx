import React from 'react';
import FooterNewsletter from './FooterNewsletter';
import FooterNav from './FooterNav';

const Footer = () => {
  return (
    <footer className="bg-[#0D1117] pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:col-span-1">
            <FooterNewsletter />
          </div>
          <div className="lg:col-span-3">
            <FooterNav />
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <div className="flex items-center space-x-4">
              <span>© 2025 GitHub, Inc.</span>
              <a href="#" className="hover:text-white">Terms</a>
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Sitemap</a>
            </div>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">English</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;