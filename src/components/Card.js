import React from 'react';

const Card = props => {
  const deleteCard = () => {
    props.onRemove(props.id);
  };

  return (
    <div style={{ margin: '1em' }}>
      <img alt="avatar" style={{ width: '70px' }} src={props.avatar_url} />
      <div>
        <div style={{ fontWeight: 'bold' }}>{props.name}</div>
        <div>{props.blog}</div>
        <div>{props.html_url}</div>
        <button onClick={deleteCard}>Delete</button>
      </div>
    </div>
  );
};

export default Card;
