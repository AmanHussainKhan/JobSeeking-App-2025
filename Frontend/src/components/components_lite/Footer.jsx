import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaGlobe } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-8 mt-16">
      <div className="max-w-6xl mx-auto px-6 md:flex md:justify-between items-center">
        {/* Left - Info */}
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h2 className="text-xl font-semibold">Aman Hussain Khan</h2>
          <p className="text-sm">© {new Date().getFullYear()} All rights reserved.</p>
          <p className="text-sm">
            Built with 💻 by <a href="mailto:amanhussainkhan3@gmail.com" className="underline">Aman</a>
          </p>
        </div>

        {/* Center - Links */}
        <div className="flex flex-col items-center gap-2 text-sm">
          <Link to="/PrivacyPolicy" className="hover:underline">Privacy Policy</Link>
          <Link to="/TermsofService" className="hover:underline">Terms of Service</Link>
        </div>

        {/* Right - Social Icons */}
        <div className="flex justify-center mt-4 md:mt-0 gap-4">
          <a href="https://www.linkedin.com/in/amanhussainkhan" target="_blank" rel="noreferrer">
            <FaLinkedin size={24} className="hover:text-blue-400" />
          </a>
          <a href="https://github.com/amanhussainkhan" target="_blank" rel="noreferrer">
            <FaGithub size={24} className="hover:text-gray-300" />
          </a>
          <a href="https://amanhussainkhan.com" target="_blank" rel="noreferrer">
            <FaGlobe size={24} className="hover:text-green-400" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
