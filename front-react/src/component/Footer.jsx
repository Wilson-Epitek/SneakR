import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <nav className="bg-green-500  flex justify-center items-center">
      
      <div className="flex items-center space-x-2">
        <img src="/logo.png" alt="Logo" className="h-14 mr-3" />
        <Link to="/" className="text-lime-950 text-2xl font-semibold hover:text-blue-300">
          Euphoria Emporium
        </Link>
      </div>
    </nav>
  );
};

export default Footer;
