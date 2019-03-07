import React from 'react';

export default function Character(props) {

  return (
    <li>
      <div>
        <div>{props.character.name}</div>
        <div>Born: {props.character.birth_year}</div>
      </div>
    </li>
  );
};

