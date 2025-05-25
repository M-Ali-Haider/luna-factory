import React from 'react';
import { Instagram, Twitter } from 'lucide-react';

const ThankYou = () => {
  return (
    <div className="bg-white/75 rounded-2xl p-4 font-extrabold text-5xl">
      <h2>Thank</h2>
      <h2 className="text-primary">you.</h2>

      <div className="flex gap-4 my-4 justify-end">
        <Instagram />
        <Twitter />
      </div>
      <div className="font-bold text-base text-end">
        <p>Please Click</p>
        <p>get more information</p>
      </div>
    </div>
  );
};

export default ThankYou;
