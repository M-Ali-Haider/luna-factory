'use client';
import { openSidebar } from '@/store/sidebar';
import { AppDispatch } from '@/store/store';
import React from 'react';
import { useDispatch } from 'react-redux';

const FilterButton = () => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <button
      className="bg-primary h-fit px-2 py-4 rounded-xl font-bold cursor-pointer max-[1024px]:mt-4"
      onClick={() => dispatch(openSidebar())}
    >
      Cannot Find What You Want
    </button>
  );
};

export default FilterButton;
