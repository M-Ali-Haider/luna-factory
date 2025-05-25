import { navItems } from '@/utils/navItems';
import React from 'react';

const Category = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 max-w-lg mx-auto">
      <h2 className="text-4xl font-bold text-gray-800 mb-2">Category</h2>

      {/* Blue underline */}
      <div className="w-full h-1 bg-primary mb-6" />

      {/* Categories Grid */}
      <div className="flex flex-wrap gap-3">
        {navItems.map((category, index) => (
          <button
            key={index}
            className="bg-primary hover:bg-primary/80 text-white font-medium px-4 py-2 rounded-lg transition-colors duration-200 cursor-pointer select-none"
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Category;
