import React from 'react';

const navigation = {
  Product: [
    'Features',
    'Enterprise',
    'Copilot',
    'AI',
    'Security',
    'Team',
    'Resources',
    'Roadmap',
    'Compare GitHub'
  ],
  Platform: [
    'Developer API',
    'Partners',
    'Education',
    'GitHub CLI',
    'GitHub Desktop',
    'GitHub Mobile'
  ],
  Support: [
    'Docs',
    'Community Forum',
    'Professional Services',
    'Premium Support',
    'Skills',
    'Status',
    'Contact GitHub'
  ],
  Company: [
    'About',
    'Why GitHub',
    'Customer stories',
    'Blog',
    'The ReadME Project',
    'Careers',
    'Newsroom',
    'Inclusion',
    'Social Impact',
    'Shop'
  ]
};

const FooterNav = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {Object.entries(navigation).map(([category, items]) => (
        <div key={category}>
          <h3 className="text-white font-semibold mb-4">{category}</h3>
          <ul className="space-y-2">
            {items.map((item) => (
              <li key={item}>
                <a href="#" className="text-gray-400 hover:text-white text-sm">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FooterNav;