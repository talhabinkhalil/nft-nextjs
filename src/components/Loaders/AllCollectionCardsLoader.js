import React from 'react';

const AllCollectionCardsLoader = ({ cards = 5, LoaderComponent }) => {
  return Array(cards)
    .fill('')
    .map((c, index) => {
      return LoaderComponent;
    });
};

export default AllCollectionCardsLoader;
