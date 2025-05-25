import React from 'react';
import Search from './Search';
import Category from './Category';
import Wrapper from '../Wrapper';
import Item from './Items';

const items = [1, 2, 3, 4, 5, 6, 7];
const Home = () => {
  return (
    <Wrapper className="min-h-screen mb-8">
      <div className="flex justify-center mb-8 mt-4">
        <Search />
      </div>
      <div className="flex gap-8 min-h-[70vh] max-[1280px]:flex-col">
        <Category />
        <div className="f-grid-auto-fit gap-4 w-full">
          {items.map((item, index) => (
            <Item key={index} />
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default Home;
