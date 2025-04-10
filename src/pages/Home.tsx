import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { Product } from '../models/product';
import ProductList from '../component/ProductList';
import Link from 'next/link';
import allProducts from '../data/products.json'; 

const HomePage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const { addToCart } = useCart();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  
  const slides = [
    { 
      url: '/img/bags.png', 
      link: '/bags',
      alt: 'Shop handmade bags'
    },
    { 
      url: '/img/scraps.png', 
      link: '/scraps',
      alt: 'Shop scrap yarn projects'
    },
    { 
      url: '/img/vinter.png', 
      link: '/vinter',
      alt: 'Shop winter collection'
    }
  ];

  useEffect(() => {
    const allProductsArray = [
      ...allProducts.filtar.map(p => ({ ...p, category: 'filtar' })),
      ...allProducts.mössor.map(p => ({ ...p, category: 'mössor' })),
      ...allProducts.väskor.map(p => ({ ...p, category: 'väskor' })),
      ...allProducts.balaklava.map(p => ({ ...p, category: 'balaklava' }))
    ];
    const shuffled = allProductsArray.sort(() => 0.5 - Math.random());
    setProducts(shuffled.slice(0, 2));
  }, []);

  const handleAddToCart = (product: Product) => {
    addToCart(product);
  };

  return (
    <main className="text-gray-800 min-h-screen flex flex-col">
      <section className="relative w-full h-[40vh] sm:h-screen">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-opacity duration-500 ${
              currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <Link 
              href={slide.link} 
              className="block w-full h-full relative"
              onClick={(e) => {
                console.log('Navigating to:', slide.link);
              }}
            >
              <div 
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.url})` }}
                role="img" 
                aria-label={slide.alt}
              />
            </Link>
          </div>
    ))}
        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-pink-200/70 hover:bg-pink-300/70 p-3 rounded-full shadow-md transition-all duration-300"
          onClick={() => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
        >
          
        </button>
        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-pink-200/70 hover:bg-pink-300/70 p-3 rounded-full shadow-md transition-all duration-300"
          onClick={() => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))}
        >
          
        </button>
      </section>

      <section className="py-8 px-4 bg-gradient-to-r from-pink-100 to-pink-50">
        <h2 className="text-center text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: "'Caveat', cursive" }}>
          💕Featured Picks 💕
        </h2>
        <div className="max-w-6xl mx-auto">
          <ProductList
            products={products}
            handleAddToCart={handleAddToCart}
          />
        </div>
      </section>

      <section
        className="relative w-full h-[30vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url('/img/10.png')` }}
      >
        <div className="absolute inset-0"></div>
        <div className="absolute text-white text-base sm:text-xl font-semibold text-center px-4 py-1 bg-pink-600 bg-opacity-80 rounded-full shadow-lg">
          ✨ 10% of every purchase supports charity ✨
        </div>
      </section>

      <section className="py-10 px-4 bg-pink-100 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-pink-600" style={{ fontFamily: "'Caveat', cursive" }}>
          Stay in the Loop!
        </h2>
        <p className="mb-6 text-lg text-gray-700">
          Sign up for our newsletter and get <span className="text-pink-600 font-semibold">10% off</span> your first order
        </p>
        <form className="flex flex-col items-center max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 mb-4 border-2 border-pink-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-600"
          />
          <button type="submit" className="bg-pink-600 hover:bg-pink-700 text-white py-2 px-8 rounded-full">
            Sign Up
          </button>
        </form>
      </section>

      <section className="py-10 px-4 bg-white text-center">
        <h2 className="text-4xl md:text-3xl font-bold mb-4" style={{ fontFamily: "'Caveat', cursive" }}>
          About ReLoveYarn
        </h2>
        <p className="max-w-4xl mx-auto">
          We believe in giving yarn a second chance. Our products are lovingly crafted from reclaimed or sustainable materials. Join us in making fashion more eco-friendly, one stitch at a time!
        </p>
      </section>

      <section className="py-10 px-4 bg-pink-100 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-pink-600" style={{ fontFamily: "'Caveat', cursive" }}>
          Follow us on Instagram
        </h2>
        <p className="mb-6 text-gray-600">Catch behind-the-scenes, yarn inspo & more ✨</p>
        <div className="flex justify-center">
          <iframe
            src="https://www.instagram.com/reloveyarn/embed"
            width="100%"
            height="400"
            className="rounded-xl shadow-md border border-pink-300 max-w-2xl w-full"
            allowTransparency={true}
            frameBorder="0"
          ></iframe>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
