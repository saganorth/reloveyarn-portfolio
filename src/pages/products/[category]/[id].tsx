import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import React from 'react';
import ProductDetail from '../../../component/ProduktDetail';
import Header from '../../../component/ui/Header';
import Footer from '../../../component/ui/Footer';
import { Product } from '../../../models/product';
import productData from '../../../data/products.json'; 

interface ProductPageProps {
  product: Product | null;
}

const ProductPage: NextPage<ProductPageProps> = ({ product }) => {
  if (!product) {
    return <div className="container mx-auto p-4">Product not found.</div>;
  }

  return (
    <>
      <div
        className="bg-cover bg-center"
        style={{
          backgroundImage: `url(${product?.category === 'mössa' || product?.category === 'balaklava' ? '/img/idwinter.png' : '/img/flower.png'})`,
        }}
      >
        <Header />
        <button
          onClick={() => window.history.back()}
          style={{
            color: 'white',
            border: 'none',
            fontSize: '40px',
            cursor: 'pointer',
            background: 'none'
          }}
        >
          ←
        </button>
        <ProductDetail product={product} />
      </div>
      <Footer />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = require('../../../data/products.json');

  // Only include actual product categories
  const productCategories = ['filtar', 'mössor', 'väskor', 'balaklava'];

  const paths = productCategories.flatMap((category) =>
    (data[category] || []).map((product: Product) => ({
      params: { category, id: String(product.id) },
    }))
  );

  return {
    paths,
    fallback: 'blocking',
  };
};


export const getStaticProps: GetStaticProps<ProductPageProps> = async ({ params }) => {
  const { category, id } = params as { category: string; id: string };

  const categoryData = (productData as any)[category];
  const product = categoryData?.find((p: Product) => p.id.toString() === id) || null;

  return {
    props: {
      product
    }
  };
};

export default ProductPage;
