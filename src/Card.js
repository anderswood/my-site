import React from 'react';
// import gitHub from './icons/image-round.svg';
// import Icon from 'svg-react-loader?name=Icon!./icons/image-round.svg';
import myIcon from './icon-test.js'

export const Card = ( {cardInfo, indexNum} ) => {

  if(cardInfo.cardType === 'img-card') {
    return (
      <div className={`card card${indexNum} ${cardInfo.cardType}`}>
        <div className={`card${indexNum}-hover card-hover`}>
          <label>
            { myIcon }
            {/* <Icon className='my-icon' /> */}
            {/* <object type="image/svg+xml" data="./icons/image-round.svg" className="logo">
              Kiwi Log
            </object> */}
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
