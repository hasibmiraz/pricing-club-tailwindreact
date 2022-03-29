import { ArrowCircleRightIcon } from '@heroicons/react/solid';
import React from 'react';
import Benefits from '../Benefits/Benefits';

const PricingOption = ({ option }) => {
  const { name, price, benefits } = option;
  return (
    <div className="bg-white p-4 rounded-lg">
      <div>
        <h2 className="bg-indigo-300 py-2 rounded text-xl font-bold">{name}</h2>
        <p>
          <span className="text-5xl font-bold">${price}</span>
          <span className="text-xl font-bold text-gray-400">/month</span>
        </p>
        <div>
          <h3 className="text-xl text-left">Benfits:</h3>
          {benefits.map((benefit) => (
            <Benefits benefit={benefit} />
          ))}
        </div>
      </div>
      <div>
        <button className="text-white bg-green-500 flex justify-center w-full py-2 mt-3 rounded-lg">
          Subscribe Now <ArrowCircleRightIcon className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default PricingOption;
