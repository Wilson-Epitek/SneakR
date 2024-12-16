import React from 'react';
import { Link } from 'react-router-dom';
import { UserRoundCog } from 'lucide-react';
import { ShoppingBasket } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-green-500 p-1 flex justify-between items-center">

      <div className="flex items-center space-x-2">
        <img src="/logo.png"  alt="Logo" className="h-14 items-center mr-3" />
       <Link to="/" className="text-lime-950 hover:text-blue-300 transition duration-300">Euphoria Emporium</Link>
      </div>

      <div className="flex space-x-4">
        <Link to="/login" className="text-lime-950 hover:text-blue-300 transition duration-300">Login</Link>
        <Link to="/register" className="text-lime-950 hover:text-blue-300 transition duration-300">Register</Link>
        <Link to="/profil" className="text-lime-950 hover:text-blue-300 transition duration-300"><UserRoundCog/></Link>
        <Link to="/wishlist" className="text-lime-950 hover:text-blue-300 transition duration-300"> <ShoppingBasket /></Link>
        
      </div>
    </nav>
  );
}

export default Navbar;
