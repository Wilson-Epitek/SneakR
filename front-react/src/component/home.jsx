import React, { useState, useEffect } from 'react';


function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
  
    fetch('http://localhost:1337/api/products?populate=image') 
      .then((res) => res.json()) 
      .then((data) => setProducts(data.data)) 
  }, []);

  return (

    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id}
            className="border rounded-lg overflow-hidden shadow-md hover:shadow-emerald-600 transition-shadow duration-300">
        
              {product.image?.formats?.medium?.url && (
              <img src={`http://localhost:1337${product.image.formats.medium.url}`} alt={product.name} className="w-full h-48 object-cover"/>
            )}
            <div className="p-4 ">
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-gray-600 text-sm mb-2">{product.description}</p>
              <p className="text-lime-700 font-bold">Prix: €{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
