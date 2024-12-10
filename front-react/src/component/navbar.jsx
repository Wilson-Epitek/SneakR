import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-amber-100 p-1 flex justify-between items-center">
      {/* Logo et nom à gauche */}
      <div className="flex items-center space-x-2">
        <img 
          src="/logo.png"  // L'image se trouve directement dans le dossier public
          alt="Logo"
          className="w-12 h-12"  // Taille du logo
        />
       <Link to="/" className="text-lime-950 hover:text-gray-300">Euphoria Emporium</Link>
      </div>

     

      {/* Liens Login et Register à droite */}
      <div className="flex space-x-4">
        <Link to="/login" className="text-lime-950 hover:text-gray-300">Login</Link>
        <Link to="/register" className="text-lime-950 hover:text-gray-300">Register</Link>
      </div>
    </nav>
  );
}

export default Navbar;
