import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { Product } from '../../models/product';
import ProductList from '../../component/ProductList';
import allProducts from '../../data/products.json';
import Link from 'next/link';

const BagsPage = () => {
  const { addToCart } = useCart();
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const bagProducts = allProducts.väskor.map(p => ({ ...p, category: 'väskor' }));

  const handleAddToCart = (product: Product) => {
    addToCart(product);
  };

  const sortedBags = [...bagProducts].sort((a, b) => {
    return sortOrder === 'asc' ? a.pris - b.pris : b.pris - a.pris;
  });

  return (
    <div className="min-h-screen bg-pink-50">
      {/* Hero Section */}
      <div 
        className="h-[40vh] bg-cover bg-center relative"
       
      >
        <div className="absolute inset-0 bg-pink-600/30"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center drop-shadow-lg"
              style={{ fontFamily: "'Caveat', cursive" }}>
            Handmade Bags Collection
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Sort Controls */}
        <div className="flex justify-between items-center mb-8">
          <Link 
            href="/form"
            className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full transition-colors duration-300 shadow-md"
          >
            Design Your Own Bag ✨
          </Link>
          
          <select
            onChange={(e) => setSortOrder(e.target.value as 'asc' | 'desc')}
            className="bg-white border-2 border-pink-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-600"
          >
            <option value="asc">Price: Low to High</option>
            <option value="desc">Price: High to Low</option>
          </select>
        </div>

        {/* Products Grid */}
        <div className="mb-12">
          <ProductList
            products={sortedBags}
            handleAddToCart={handleAddToCart}
          />
        </div>

        {/* Info Section */}
        <div className="bg-white rounded-3xl p-8 shadow-md mt-12">
          <h2 className="text-3xl font-bold text-pink-600 mb-4 text-center"
              style={{ fontFamily: "'Caveat', cursive" }}>
            Why Choose Our Bags?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="font-bold text-xl mb-2">♻️ Sustainable</h3>
              <p>Made from reclaimed and recycled materials</p>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-2">🎨 Unique</h3>
              <p>Each piece is handcrafted and one-of-a-kind</p>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-2">💝 Meaningful</h3>
              <p>10% of sales go to charitable causes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BagsPage;