import React from 'react';
import Card from './Card';

const CardList = props => {
  const onRemove = id => {
    props.setCards(props.cards.filter(card => card.id !== id));
  };

  return (
    <div>
      {props.cards.map(card => (
        <Card key={card.id} onRemove={onRemove} {...card} />
      ))}
    </div>
  );
};

export default CardList;
