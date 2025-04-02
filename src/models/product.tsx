// product.ts
export type Product = {
  id: number;
  category: string;
  namn: string;         
  imageUrl: string;
  beskrivning: string;   
  mått: string;          
  pris: number;         
};

export interface CartItem extends Product {
  quantity: number;
};


import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  namn: String,
  pris: Number,
  beskrivning: String,
  category: String,
  imageUrl: String,
}, {
  timestamps: true,
});

export const Product = mongoose.models.Product || mongoose.model('Product', ProductSchema);
