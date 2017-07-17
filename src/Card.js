import React from 'react';


export const Card = ( {cardInfo, indexNum} ) => {

  if(cardInfo.cardType === 'img-card') {
    return (
      <div className={`card card${indexNum} ${cardInfo.cardType}`}>
        {/* <div>IMG PLACEHOLDER</div> */}
        <div className={`card${indexNum}-hover card-hover`}>



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
