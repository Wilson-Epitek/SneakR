import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';

function Home() {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); 

  useEffect(() => {
    fetch('http://localhost:1337/api/products?populate=image')
      .then((res) => res.json())
      .then((data) => setProducts(data.data));
  }, []);

  const handleAddToWishlist = (product) => {
    const savedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    savedWishlist.push(product);
    localStorage.setItem('wishlist', JSON.stringify(savedWishlist));
    alert("Produit ajouté à la wishlist, chef !");
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-4">
      
      <div className="mb-4 flex justify-center">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Rechercher un produit..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"/>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="border rounded-lg overflow-hidden shadow-md hover:shadow-emerald-600 transition-shadow duration-300 flex flex-col justify-between h-full">
            {product.image?.formats?.medium?.url && (
              <img src={`http://localhost:1337${product.image.formats.medium.url}`}alt={product.name}className="w-full h-48 object-cover"/>)}
            <div className="p-4 flex flex-col flex-grow">
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-gray-600 text-sm mb-2 flex-grow">{product.description}</p>
              <p className="text-lime-700 font-bold">Prix: {product.price}€</p>
              <button onClick={() => handleAddToWishlist(product)}className="mt-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-blue-300 transition duration-300">Ajouter à la wishlist</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
