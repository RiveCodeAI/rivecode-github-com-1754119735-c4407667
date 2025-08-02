import React, { useState } from 'react';

const EmailSignup = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signup logic
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
      <div className="flex-1">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full px-4 py-3 rounded-md bg-white bg-opacity-10 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-gray-400"
          required
        />
      </div>
      <div className="flex gap-4">
        <button
          type="submit"
          className="px-6 py-3 bg-[#2EA44F] text-white font-semibold rounded-md hover:bg-opacity-90 transition-colors"
        >
          Sign up for GitHub
        </button>
        <button
          type="button"
          className="px-6 py-3 bg-white bg-opacity-10 text-white font-semibold rounded-md hover:bg-opacity-20 transition-colors"
        >
          Try GitHub Copilot
        </button>
      </div>
    </form>
  );
};

export default EmailSignup;