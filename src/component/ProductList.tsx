import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Popup from './PopUp';

interface Product {
  imageUrl: string;
  id: React.Key;
  category: string;
  namn: string;
}

interface ProductListProps {
  products: Product[];
  assetBaseUrl?: string;
  handleAddToCart: (product: Product) => void;
}

const ProductList: React.FC<ProductListProps> = ({ 
  products, 
  handleAddToCart,
  assetBaseUrl = '' 
}) => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleCartClick = (product: Product) => {
    handleAddToCart(product);
    setSelectedProduct(product);
    setShowPopup(true);
  
    setTimeout(() => {
      setShowPopup(false);
    }, 2500);
  };

  return (
    <div className="flex flex-wrap justify-around">
      {products.map((product) => {
        const imageUrl = product.imageUrl.startsWith('/')
          ? `${assetBaseUrl}${product.imageUrl}`
          : `${assetBaseUrl}/${product.imageUrl}`;

        return (
          <div key={product.id} className="m-4 w-64 relative group">
            <div className="block overflow-hidden shadow-lg bg-white p-5 flex flex-col justify-between border border-white" style={{ height: '400px' }}>
            <Link href={`/products/${product.category}/${product.id}`} className="text-center">
         
              <Image
                src={imageUrl}
                alt={product.namn}
                width={500}
                height={300}
                className="w-full mb-4"
              />

       

                <span className="font-bold text-xl" style={{ fontFamily: "'Caveat', cursive" }}>
                  {product.namn}
                </span>
              </Link>

              <button
                onClick={() => handleCartClick(product)}
                className="center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-3 py-2 text-sm rounded"style={{ fontFamily: "'Caveat', cursive" }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        );
      })}

      {/* Popup Component */}
      {showPopup && selectedProduct && (
        <Popup show={showPopup} onClose={() => setShowPopup(false)} />
      )}
    </div>
  );
};

export default ProductList;
