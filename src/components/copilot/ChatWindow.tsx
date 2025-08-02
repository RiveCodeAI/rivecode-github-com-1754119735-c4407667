import React from 'react';

const ChatWindow = () => {
  return (
    <div className="rounded-lg overflow-hidden bg-[#0D1117] border border-gray-700 h-full">
      <div className="p-4 border-b border-gray-700">
        <div className="flex items-center gap-2">
          <img
            src="https://github.githubassets.com/favicons/favicon.svg"
            alt="GitHub Copilot"
            className="w-6 h-6"
          />
          <span className="font-medium text-white">GitHub Copilot</span>
        </div>
      </div>
      <div className="p-4 space-y-4">
        <div className="bg-gray-800 rounded-lg p-4">
          <p className="text-gray-300">
            Hi, how can I help you?
          </p>
        </div>
        <div className="text-sm text-gray-400">
          I'm powered by AI, so surprises and mistakes are possible. Make sure to verify any generated code or suggestions, and share feedback so that we can learn and improve.
        </div>
      </div>
      <div className="p-4 border-t border-gray-700">
        <input
          type="text"
          placeholder="Ask a question or type '/' for commands"
          className="w-full px-4 py-2 bg-gray-800 rounded-md text-white placeholder-gray-400 focus:outline-none"
        />
      </div>
    </div>
  );
};

export default ChatWindow;