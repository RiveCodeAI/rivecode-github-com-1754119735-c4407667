import React, { useState } from 'react';

const FooterNewsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div>
      <h3 className="text-white text-lg font-semibold mb-4">
        Subscribe to our developer newsletter
      </h3>
      <p className="text-gray-400 text-sm mb-4">
        Get tips, technical guides, and best practices. Twice a month.
      </p>
      <form onSubmit={handleSubmit}>
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 border border-gray-700 rounded-md text-sm font-medium text-white hover:bg-gray-800 transition-colors"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default FooterNewsletter;