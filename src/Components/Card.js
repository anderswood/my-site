import React from 'react';
import IconImageRound from './Icons/ImageRound'

export const Card = ( {cardInfo, indexNum} ) => {

  if(cardInfo.cardType === 'img-card') {
    return (
      <div className={`card card${indexNum} ${cardInfo.cardType}`}>
        <div className={`card${indexNum}-hover card-hover`}>
          <label>
            <IconImageRound />
          </label>
        </div>
      </div>
    )
  } else
  if (cardInfo.cardType === 'content-card') {
    return (
      <div className={`card card${indexNum} ${cardInfo.cardType}`}>
        <div className='card-container'>
          <h3>{ cardInfo.title }</h3>
          <p>{ cardInfo.text }</p>
        </div>
      </div>
    )
  }

}
