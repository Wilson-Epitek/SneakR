import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react'; 

function Wishlist() {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    setWishlist(savedWishlist);
  }, []);

  const handleRemoveFromWishlist = (productId) => {
    const updatedWishlist = wishlist.filter((product) => product.id !== productId);
    setWishlist(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Ma Wishlist</h1>
      {wishlist.length === 0 ? (
        <p>T'as rien chef</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
          {wishlist.map((product) => (
            <div key={product.id} className="relative border rounded-lg overflow-hidden shadow-md hover:shadow-emerald-600 transition-shadow duration-300">
              
              <button 
                onClick={() => handleRemoveFromWishlist(product.id)}
                className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition duration-300"
              >
                <X size={16} />
              </button>
              {product.image?.formats?.medium?.url && (
                <img 
                  src={`http://localhost:1337${product.image.formats.medium.url}`} 
                  alt={product.name} 
                  className="w-full h-48 object-cover" 
                />
              )}
              <div className="p-4">
                <h2 className="text-lg font-semibold">{product.name}</h2>
                <p className="text-gray-600 text-sm mb-2">{product.description}</p>
                <p className="text-lime-700 font-bold">Prix: €{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Wishlist;
