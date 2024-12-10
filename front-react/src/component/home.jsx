import React, { useState, useEffect } from 'react';

function Home() {
  const [products, setProducts] = useState([]); // Pour stocker les produits

  useEffect(() => {
    // Récupérer les produits depuis l'API Strapi
    fetch('http://localhost:1337/api/products?populate=image') // URL de l'API Strapi pour la collection 'products'
      .then((res) => res.json()) // Convertir la réponse en JSON
      .then((data) => setProducts(data.data)) // Accéder aux produits via data.data
      .catch((error) => console.error('Erreur:', error)); // Gérer les erreurs
  }, []);

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg overflow-hidden shadow-md hover:shadow-lime-500 transition-shadow duration-300"
          >
            
            <div className="p-4">
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-gray-600 text-sm mb-2">{product.description}</p>
              <p className="text-lime-700 font-bold">Prix: €{product.price}</p>
              {product.image?.formats?.medium?.url && (
              <img
                src={`http://localhost:1337${product.image.formats.medium.url}`}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
            )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
