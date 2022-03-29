import { CheckCircleIcon } from '@heroicons/react/solid';
import React from 'react';

const Benefits = ({ benefit }) => {
  return (
    <div>
      <p className="flex items-center mt-1">
        <CheckCircleIcon className="w-4 h-4 text-green-600" /> {benefit}
      </p>
    </div>
  );
};

export default Benefits;
