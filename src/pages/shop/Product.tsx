import React, { useState, FC } from 'react';
import ProductList from '../../component/ProductList';
import { Product } from '../../models/product';
import useSortedFilteredProducts from '../../component/useSortedFilteredProducts';
import { useCart } from '@/context/CartContext';
import productData from '../../data/products.json'; 

const ProductsPage: FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [category, setCategory] = useState<string>('All');
  const [sortOrder, setSortOrder] = useState<string>('latest');
  const { addToCart } = useCart();

  const allProducts: Product[] = Object.entries(productData)
    .filter(([key]) => key !== 'orders' && key !== 'inventory')
    .flatMap(([key, value]) =>
      (value as Product[]).map((product) => ({
        ...product,
        category: key,
      }))
    );

  const sortedAndFilteredProducts = useSortedFilteredProducts({
    products: allProducts,
    sortOrder,
    searchQuery,
    category,
  });

  const handleAddToCart = (product: Product) => {
    addToCart(product);
  };

  return (
    <div className="min-h-screen text-gray-800 bg-pink-100">
      <div className="w-full">
      <div
        className="relative h-[65vh] w-full flex items-center justify-center"
        style={{
        backgroundImage: `url('/img/heroshop.png')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundColor: 'pink',
        }}
      />
      </div>

      <div className="sticky top-0 z-10 bg-pink-50/80 backdrop-blur-md border-b border-pink-200 shadow-sm">
        <div className="container mx-auto p-4">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 rounded-full border border-pink-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all"
              />
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="appearance-none pl-4 pr-10 py-2 rounded-full border border-pink-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all"
            >
              <option value="All">All Categories</option>
              <option value="filtar">Filtar</option>
              <option value="mössor">Mössor</option>
              <option value="väskor">Väskor</option>
              <option value="balaklava">Balaklava</option>
            </select>

            <div className="relative">
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="appearance-none pl-4 pr-10 py-2 rounded-full border border-pink-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all"
              >
                <option value="latest">Latest First</option>
                <option value="price">Price: Low to High</option>
                <option value="priceDesc">Price: High to Low</option>
              </select>
              <svg
                className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto p-5">
        <div className="flex flex-wrap justify-center">
          <ProductList
            products={sortedAndFilteredProducts}
            handleAddToCart={handleAddToCart}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
