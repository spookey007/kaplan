import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/main.png';
import '@fortawesome/fontawesome-free/css/all.css';
import '../assets/css/header.css';

const MobileHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [device, setDevice] = useState("");

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  // New function to close the menu
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    if (/iphone|ipad|ipod/.test(userAgent)) {
      setDevice("ios");
    } else if (/android/.test(userAgent)) {
      setDevice("android");
    } else if (/win/.test(userAgent)) {
      setDevice("windows");
    } else if (/mac/.test(userAgent)) {
      setDevice("mac");
    } else {
      setDevice("other");
    }
  }, []);

  const phoneNumber = "+19736948100";
  const getPhoneLink = () => {
    if (device === "ios") {
      return `facetime:${phoneNumber}`; // FaceTime on iOS
    } else if (device === "android") {
      return `tel:${phoneNumber}`; // Android Phone Dialer
    } else if (device === "windows" || device === "mac") {
      return `skype:${phoneNumber}?call`; // Skype on Windows/Mac
    } else {
      return `tel:${phoneNumber}`; // Default
    }
  };
  
  return (
    <header className="w-full shadow-md bg-white">
      {/* Top Section */}
 <div className="flex items-center justify-center w-full fixed top-0 left-0 z-50 bg-white shadow-md mb-1">

      {/* Contact Us - Red */}
      <div className="flex items-center justify-center bg-red-600 text-white px-4 py-2 w-full md:w-1/2 text-sm md:text-base">
        <i className="fas fa-envelope text-white text-sm md:text-lg mr-1"></i>
        <span className="font-bold">CONTACT US</span>
      </div>

      {/* Phone - Blue */}
      <div className="flex items-center justify-center bg-blue-800 text-white px-4 py-2 w-full md:w-1/2 text-sm md:text-base">
        <i className="fas fa-phone-alt text-white text-sm md:text-lg mr-1"></i>
        <a href="tel:+19736948100" className="font-bold text-white">
          (973) 694-8100
        </a>
      </div>
    </div>

      {/* Main Section with Logo and Nav */}
      <div className="bg-gradient-to-r from-white-500 to-gray-900 p-4 flex justify-between items-center relative mt-6">
        {/* Logo */}
        <div className="w-2/5 md:w-1/5 lg:w-1/6">
          <img src={logo} alt="Kaplan Logo" className="w-full h-auto max-w-[200px]" />
        </div>

        {/* Hamburger Menu (for mobile) */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none p-2 rounded-md bg-black text-white hover:bg-gray-700 transition duration-300"
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
          </button>
        </div>

        {/* Navigation Links */}
        <nav
          className={`md:flex md:space-x-6 items-center absolute md:relative w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none z-10 transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'block' : 'hidden'
          }`}
          style={{ top: 'calc(100% + 0rem)', left: 0 }} // Adjust the position to align below the logo
        >
          <Link
            to="/"
            onClick={closeMenu} // Close menu on click
            className="block py-4 px-6 md:py-2 md:px-4 text-black hover:text-yellow-500 text-lg transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/practice-areas"
            onClick={closeMenu} // Close menu on click
            className="block py-4 px-6 md:py-2 md:px-4 text-black hover:text-yellow-500 text-lg transition duration-300"
          >
            Practice Areas
          </Link>
          <Link
            to="/about"
            onClick={closeMenu} // Close menu on click
            className="block py-4 px-6 md:py-2 md:px-4 text-black hover:text-yellow-500 text-lg transition duration-300"
          >
            About
          </Link>
          <Link
            to="/contact"
            onClick={closeMenu} // Close menu on click
            className="block py-4 px-6 md:py-2 md:px-4 text-black hover:text-yellow-500 text-lg transition duration-300"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default MobileHeader;
