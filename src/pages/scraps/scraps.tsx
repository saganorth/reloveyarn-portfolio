import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ScrapPage = () => {
  return (
    <div className="min-h-screen bg-pink-50">
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-cover bg-center">
        <Image
          src="/img/yarn.png"
          alt="Pile of colorful recycled yarn"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-pink-600/40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center drop-shadow-lg"
              style={{ fontFamily: "'Caveat', cursive" }}>
            Our Yarn Journey
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Sourcing Section */}
        <section className="mb-16">
          <h2 className="text-3xl text-pink-600 font-bold mb-6">Where We Find Our Yarn 🧶</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="text-xl font-bold text-pink-500 mb-2">🏪 Second-hand</h3>
                <p>Most our yarn is bought second hand thourgh online </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="text-xl font-bold text-pink-500 mb-2">👵 Estate Sales</h3>
                <p>We work with estate sale organizers to save vintage and unused yarn from being discarded.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="text-xl font-bold text-pink-500 mb-2">🧑‍🤝‍🧑 Community Donations</h3>
                <p>Local crafters donate their excess yarn to support our sustainable mission.</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="text-xl font-bold text-pink-500 mb-2">🏭 Factory Surplus</h3>
                <p>We partner with local mills to repurpose their end-of-line and surplus yarn.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="text-xl font-bold text-pink-500 mb-2">♻️ Recycled Garments</h3>
                <p>We carefully unravel and reclaim yarn from gently used sweaters and knits.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="text-xl font-bold text-pink-500 mb-2">🌍 Online Marketplace</h3>
                <p>We connect with destashers on platforms like Tradera and Facebook Marketplace.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="mb-16">
          <h2 className="text-3xl text-pink-600 font-bold mb-6">Our Process 💝</h2>
          <div className="bg-white p-8 rounded-3xl shadow-md space-y-6">
            <ol className="space-y-4">
              <li className="flex items-start">
                <span className="bg-pink-100 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">1</span>
                <div>
                  <h3 className="font-bold text-lg">Careful Selection</h3>
                  <p>Each yarn is hand-picked and quality checked for our projects.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-pink-100 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">2</span>
                <div>
                  <h3 className="font-bold text-lg">Cleaning & Processing</h3>
                  <p>All yarn undergoes gentle cleaning and conditioning before use.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-pink-100 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">3</span>
                <div>
                  <h3 className="font-bold text-lg">Quality Control</h3>
                  <p>We test each batch for strength and durability.</p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        {/* Impact Section */}
        <section>
          <h2 className="text-3xl text-pink-600 font-bold mb-6">Our Impact 🌱</h2>
          <div className="bg-gradient-to-br from-pink-100 to-pink-200 p-8 rounded-3xl shadow-md">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="text-4xl font-bold text-pink-600 mb-2">1000+</h3>
                <p>Kilos of yarn rescued</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-pink-600 mb-2">500+</h3>
                <p>Happy customers</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-pink-600 mb-2">10%</h3>
                <p>Profits to charity</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Link 
            href="/form"
            className="inline-block bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-full text-lg font-bold transition-colors duration-300 shadow-md"
          >
            custom orders ✨
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ScrapPage;