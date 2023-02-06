import React, { useEffect, useState } from 'react';
import SearchForm from './searchForm.jsx';
import CardList from './cardList.jsx';

const Collection = () => {

  const [cards, setCards] = useState([]);

  return (
    <div>
      <h1 style={{marginLeft: '1.5rem'}}>Card Deck</h1>
      <SearchForm setCards={setCards} />
      <CardList cards={cards} />
    </div>
  );
};

export default Collection;
