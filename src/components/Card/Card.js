import React from 'react';
import './Card.style.css';

export default function Card(props) {
  return (
    <div className="card">
      <img
        alt="monster"
        src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
        className="card__img"
      />
      <h1>{props.monster.name}</h1>
      <p>{props.monster.email}</p>
    </div>
  );
}
