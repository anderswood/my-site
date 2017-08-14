import React from 'react';
import { Link } from 'react-router-dom';

import LinkedIn from './Icons/LinkedIn';
import Twitter from './Icons/Twitter';
import Github from './Icons/Github';
import Hamburger from './Icons/Hamburger';

export const Header = (props) => {

  let containerClass = props.headerStatus
    ? 'header-container header-container-fixed'
    : 'header-container';

  return(
    <section className={ containerClass }>

      <Link to='/' className='header-left-div link-home'>
        <h2 className='header-name'>ANDERS WOOD</h2>
        <h3 className='header-title'>Front-End Developer</h3>
      </Link>

      <div className='header-right-div'>
        
        <label className='header-label label-hamburger label-mobile'>
          <Hamburger />
        </label>

        <div className='header-right-subdiv'>

          <label className='header-label label-linkedIn label-desktop'>
            <a className='header-link' href='https://www.linkedin.com/in/anderswood/' target='_blank' rel='noopener noreferrer'>
            <LinkedIn />
          </a>
          </label>
          <label className='header-label label-github label-desktop'>
            <a className='header-link' href='https://github.com/anderswood' target='_blank' rel='noopener noreferrer'>
            <Github />
          </a>
          </label>
          <label className='header-label label-twitter label-desktop'>
            <a className='header-link' href='https://twitter.com/AndersWood' target='_blank' rel='noopener noreferrer'>
            <Twitter />
          </a>
          </label>
          <label className='header-label label-aboutMe label-desktop'>
            <Link to='/AboutMe' className='header-link link-aboutMe'>
              <h3 className='text-me'>me</h3>
            </Link>
          </label>

        </div>
      </div>

    </section>
  )
}
