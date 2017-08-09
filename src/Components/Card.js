import React from 'react';
// import IconImageRound from './Icons/ImageRound';
// import IconGithubRound from './Icons/GithubRound';
import IconTap from './Icons/TapRound';
import IconGithub from './Icons/Github';
// import IconImage from './Icons/Image';
import '../styles/card.css';

export const Card = ( {cardInfo, indexNum} ) => {

  console.log(cardInfo.class);

  if(cardInfo.cardType === 'img-card') {
    return (
      <div className={`card card${indexNum} ${cardInfo.cardType}`}>
        <div className={`card${indexNum}-hover card-hover`}>
          <div className='card-icon-container'>
            {/* <label>
              <a className='card-link'>
                <IconImage />
              </a>
            </label> */}
            <label>
              <a className='card-link' href={ cardInfo.liveLink } target="_blank">
                <IconTap />
              </a>
            </label>
            <label>
              <a className='card-link' href={ cardInfo.githubLink } target="_blank">
                <IconGithub />
              </a>
            </label>
          </div>
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
