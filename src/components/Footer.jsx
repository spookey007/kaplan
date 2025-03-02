import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Footer Text */}
        <p className="text-center md:text-left">
          &copy; {new Date().getFullYear()} Kaplan & Kaplan. All Rights Reserved.
        </p>
        
        {/* Social Links */}
        <div className="flex gap-4 mt-4 md:mt-0 justify-center md:justify-end">
          <a href="#" className="text-yellow-400 hover:text-yellow-500 transition-colors duration-300">Facebook</a>
          <a href="#" className="text-yellow-400 hover:text-yellow-500 transition-colors duration-300">Instagram</a>
          <a href="#" className="text-yellow-400 hover:text-yellow-500 transition-colors duration-300">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
