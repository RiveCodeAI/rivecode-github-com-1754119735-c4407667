import React from 'react';
import { XMarkIcon as XIcon } from '@heroicons/react/24/outline';

const FooterBottom = () => {
  return (
    <div className="mt-12 pt-8 border-t border-gray-800">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
          <span>© 2025 GitHub, Inc.</span>
          <a href="#" className="hover:text-white">Terms</a>
          <a href="#" className="hover:text-white">Privacy (Updated 02/2024)</a>
          <a href="#" className="hover:text-white">Sitemap</a>
          <a href="#" className="hover:text-white">What is Git?</a>
          <button className="hover:text-white">Manage cookies</button>
          <button className="hover:text-white">Do not share my personal information</button>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex gap-3">
            <a href="#" className="text-gray-400 hover:text-white">
              <img src="https://cdn.simpleicons.org/linkedin/718096" alt="LinkedIn" className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <img src="https://cdn.simpleicons.org/instagram/718096" alt="Instagram" className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <img src="https://cdn.simpleicons.org/youtube/718096" alt="YouTube" className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <XIcon className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <img src="https://cdn.simpleicons.org/tiktok/718096" alt="TikTok" className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <img src="https://cdn.simpleicons.org/twitch/718096" alt="Twitch" className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <img src="https://cdn.simpleicons.org/github/718096" alt="GitHub" className="h-6 w-6" />
            </a>
          </div>
          <div className="border-l border-gray-800 pl-4">
            <select className="bg-transparent text-gray-400 hover:text-white focus:outline-none">
              <option value="en">English</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;