import React from 'react';

import { Card } from './Card.js';
import { cardContentArr } from '../helpers/cardContent';

export const CardGrid = (props) => {
  if (!cardContentArr.length) { return <div></div>; }

  const cardGridArr = cardContentArr.map( (cardObj, i) => {
    return <Card  indexNum={ i }
                  cardInfo={ cardObj }
                  handleImageClick={ props.handleImageClick }
                  key={ i }/>
  })

  return (
    <section id='card-grid-container'>{ cardGridArr }</section>
  )

}
