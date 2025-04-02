import React, { useState } from 'react';
import Image from 'next/image';
import { useCart } from '../context/CartContext';
import { Product } from '../models/product';
import Popup from './PopUp';

interface ProductDetailProps {
  product: Product;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  const { addToCart } = useCart(); 
  const [showPopup, setShowPopup] = useState(false); 

  if (!product) {
    return (
      <div className="text-center text-2xl font-bold text-red-500 mt-10">
        Product not found
      </div>
    );
  }

  const getImageUrl = (imageUrl: string) =>
    imageUrl.startsWith('/') ? imageUrl : `/${imageUrl}`;
    
  const imageUrl = getImageUrl(product.imageUrl);

  const handleAddToCart = () => {
    addToCart(product);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000);
  };

  return (
    <div className="relative bg-cover bg-center p-10">
      <div className="max-w-4xl mx-auto p-7 bg-pink-100 shadow-md rounded-lg">
        <div className="flex flex-col md:flex-row md:space-x-8">
          <div className="flex-shrink-0 mb-6 md:mb-0 relative bg-white p-4 shadow-xl rounded-lg">
            <div className="bg-white border border-gray-300 p-2 shadow-lg transform transition duration-500 hover:scale-105">
              <Image
                src={imageUrl}
                alt={product.namn}
                width={400}
                height={400}
              />
            </div>
            <div className="mt-2 text-center text-xl font-bold text-gray-800">
              {product.namn}
            </div>
          </div>

          <div className="flex flex-col justify-center items-center w-full">
            <div className="text-4xl font-bold mb-6 text-gray-900 text-center">
              {product.pris ? `${product.pris.toFixed(2)} kr` : 'N/A'}
            </div>
            <p className="text-lg mb-8 text-gray-600 leading-loose italic text-center">
              {product.beskrivning}
            </p>
            <button
              onClick={handleAddToCart}
              className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-800 transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl"
            >
              Add to Cart 👜
            </button>
          </div>
        </div>

        {showPopup && (
          <Popup show={showPopup} onClose={() => setShowPopup(false)} />
        )}

        <div className="mt-12 text-center text-lg text-gray-500 italic">
          “Discover the uniqueness of our collection, designed to bring elegance and comfort to your everyday life.”
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
