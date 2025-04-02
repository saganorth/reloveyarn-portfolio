import React, { useState, ChangeEvent, FormEvent } from 'react';
import FiltForm from './FiltForm';
import MossaForm from './MossaForm';
import BalaklavaForm from './BalaklavaForm';
import BagForm from './BagForm';
import { FormDataType } from '../../models/FromDataType';
import Image from 'next/image';

interface FormComponentProps {
  formData: FormDataType;
  setFormData: React.Dispatch<React.SetStateAction<FormDataType>>;
  handleSubmit: (e: FormEvent) => void;
}

const FormComponent: React.FC<FormComponentProps> = ({ formData, setFormData, handleSubmit }) => {
  const [productType, setProductType] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      if (name.startsWith('measurements.')) {
        const key = name.split('.')[1];
        return {
          ...prev,
          measurements: {
            ...prev.measurements,
            [key]: value,
          },
        };
      } else if (name in prev.contactInfo) {
        return {
          ...prev,
          contactInfo: {
            ...prev.contactInfo,
            [name]: value,
          },
        };
      } else {
        return {
          ...prev,
          [name]: value,
        };
      }
    });
  };

  const handleProductChange = (type: string) => {
    setProductType(type);
    setFormData((prev) => ({
      ...prev,
      product: type,
    }));
  };

  return (
    <div onSubmit={handleSubmit} className="max-w-3xl mx-auto p-8 md:p-10 bg-pink-100 rounded-3xl border-4 border-dashed border-pink-300 shadow-2xl" style={{ fontFamily: '"Comic Sans MS", cursive' }}>
      <h2 className="text-center text-3xl md:text-4xl font-extrabold text-pink-600 mb-6 uppercase tracking-wider">
        OMG, Pick Your Product!
      </h2>
      <p className="text-center text-gray-700 italic mb-8">
        The perfect crocheted item for your totally fab style!
      </p>
      <div className="flex justify-center gap-6 mb-8 overflow-x-auto">
      {[
        { type: 'filt', imgSrc: '/img/filt.png' },
        { type: 'väska', imgSrc: '/img/väska.png' },
        { type: 'balaklava', imgSrc: '/img/balaklava.png' },
        { type: 'mössa', imgSrc: '/img/mössa.png' }
      ].map(({ type, imgSrc }) => (
        <button
          type="button"
          key={type}
          onClick={() => handleProductChange(type)}
          className={`relative w-24 h-24 sm:w-32 sm:h-32 transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-pink-300 rounded-full border-4 ${
        productType === type ? 'border-pink-500' : 'border-pink-300'
          } bg-white overflow-hidden flex items-center justify-center flex-shrink-0`}
        >
          <Image
        src={imgSrc}
        alt={type}
        width={128}
        height={128}
        className="object-cover w-full h-full"
        priority
          />
        </button>
      ))}
        </div>

      {productType && (
        <div className="mb-6">
          {productType === 'filt' && <FiltForm formData={formData} handleChange={handleChange} />}
          {productType === 'mössa' && <MossaForm formData={formData} handleChange={handleChange} />}
          {productType === 'balaklava' && <BalaklavaForm formData={formData} handleChange={handleChange} />}
          {productType === 'väska' && <BagForm formData={formData} handleChange={handleChange} />}
        </div>
      )}

      <div className="mb-4 bg-white p-4 rounded-2xl border-2 border-pink-200 shadow-md">
        <h3 className="text-xl md:text-2xl font-bold mb-2 text-pink-700 uppercase tracking-wider">
          Let's Keep In Touch, Bestie!
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-bold text-gray-700">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={formData.contactInfo.firstName}
              onChange={handleChange}
              className="mt-1 block w-full bg-pink-50 border-2 border-pink-300 rounded-full py-2 px-3"
              required
            />
          </div>

          <div>
            <label htmlFor="lastName" className="block text-sm font-bold text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={formData.contactInfo.lastName}
              onChange={handleChange}
              className="mt-1 block w-full bg-pink-50 border-2 border-pink-300 rounded-full py-2 px-3"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-bold text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.contactInfo.email}
              onChange={handleChange}
              className="mt-1 block w-full bg-pink-50 border-2 border-pink-300 rounded-full py-2 px-3"
              required
            />
          </div>

          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-bold text-gray-700">
              Phone Number
            </label>
            <input
              type="text"
              name="phoneNumber"
              id="phoneNumber"
              value={formData.contactInfo.phoneNumber}
              onChange={handleChange}
              className="mt-1 block w-full bg-pink-50 border-2 border-pink-300 rounded-full py-2 px-3"
            />
          </div>
        </div>

        <button type="submit" className="mt-4 px-4 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-colors">
          Submit
        </button>
      </div>
    </div>
  );
};

export default FormComponent;
