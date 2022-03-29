import { CurrencyDollarIcon } from '@heroicons/react/solid';
import React from 'react';

const PricingOption = ({ option }) => {
  const { name, price } = option;
  return (
    <div className="bg-white p-4 rounded-lg">
      <h2 className="bg-indigo-300 py-2 rounded text-xl font-bold">{name}</h2>
      <p>
        <span className="text-5xl font-bold">${price}</span>
        <span className="text-xl font-bold text-gray-400">/month</span>
      </p>
      <div>
        <h3 className="text-xl text-left">Benfits:</h3>
      </div>
    </div>
  );
};

export default PricingOption;
