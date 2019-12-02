import React, { useState } from 'react';
import Form from './components/Form';
import CardList from './components/CardList';

const App = () => {
  const [cards, setCards] = useState([]);

  const addNewCard = cardInfo => {
    setCards(cards.concat(cardInfo));
  };

  return (
    <>
      <Form onSubmit={addNewCard} />
      <CardList cards={cards} />
    </>
  );
};

export default App;
