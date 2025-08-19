import React from 'react';

import { Card } from './index.js';

const Cards = ({ data, title }) => {
  if (data?.length > 0) {
    return data.map((item) => <Card key={item._id} {...item} />);
  }

  return (
    <h2 className="mt-5 font-bold text-[#6449ff] text-xl uppercase">{title}</h2>
  );
};

export default Cards;
