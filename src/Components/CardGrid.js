import React from 'react';

import { Card } from './Card.js';
import { cardContentArr } from '../cardContent.js';


export const CardGrid = () => {
  if (!cardContentArr.length) { return <div></div>; }

const cardGridArr = cardContentArr.map( (cardObj, i) => {
  return <Card  indexNum={ i }
                cardInfo={ cardObj }
                key={ i }
          />
})

return (
  <section id='card-grid-container'>{ cardGridArr }</section>
)

}
