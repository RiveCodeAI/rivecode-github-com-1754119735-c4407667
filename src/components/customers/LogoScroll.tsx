import React from 'react';

const logos = [
  {
    src: "https://images.ctfassets.net/8aevphvgewt8/2xNJHobFMxrvAwj534sNMo/753fcd3beb5fd223d1d2ed918b868a5f/figma.svg",
    alt: "Figma"
  },
  {
    src: "https://images.ctfassets.net/8aevphvgewt8/55wg5e2VhUvAbJBG0coTRy/9ced78d7b1f86bc72f214401ad57e69e/mercedes-benz.svg",
    alt: "Mercedes-Benz"
  },
  {
    src: "https://images.ctfassets.net/8aevphvgewt8/1kTDnd4nwOET5gPSpPk5z9/dc7d84e7c31e4ece4a9db441728c8e97/mercado-libre.svg",
    alt: "Mercado Libre"
  }
];

const LogoScroll = () => {
  return (
    <div className="flex justify-center items-center space-x-16 py-8">
      {logos.map((logo, index) => (
        <div key={index} className="grayscale hover:grayscale-0 transition-all duration-300">
          <img
            src={logo.src}
            alt={logo.alt}
            className="h-8 w-auto"
          />
        </div>
      ))}
    </div>
  );
};

export default LogoScroll;