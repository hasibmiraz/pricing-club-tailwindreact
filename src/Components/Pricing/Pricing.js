import React from 'react';
import PricingOption from '../PricingOption/PricingOption';

const Pricing = () => {
  const pricingOptions = [
    { id: 1, name: 'Free', price: 0 },
    { id: 2, name: 'Regular', price: 9.99 },
    { id: 3, name: 'Premium', price: 19.99 },
  ];
  return (
    <div className="bg-indigo-300 p-4 mt-8">
      <h1 className="text-6xl font-mono text-white">Best deals of the town</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
        laudantium necessitatibus neque. Est repudiandae possimus sapiente
        itaque minus mollitia, provident cumque deserunt, et sunt nihil dolor
        reprehenderit quae corrupti vel praesentium? Soluta minus quod, a
        obcaecati consequatur, commodi molestiae tempore corporis alias ullam
        ipsa minima molestias id assumenda maiores. Expedita.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-8">
        {pricingOptions.map((option) => (
          <PricingOption key={option.id} option={option} />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
