import React from 'react';
import { Link } from 'react-router-dom';

import LinkedIn from './Icons/LinkedIn';
import Twitter from './Icons/Twitter';
import Github from './Icons/Github';

export const Header = () => {
  return(
    <section className='header-container'>

      <div className='header-left-div'>
        <h2 className='header-name'>Anders Wood</h2>
        <h3 className='header-title'>Front-End Developer</h3>
      </div>

      <div className='header-right-div'>
        <label className='header-label label-linkedIn'>
          <a className='header-link' href='www.linkedin.com' target="_blank">
            <LinkedIn />
          </a>
        </label>
        <label className='header-label label-github'>
          <a className='header-link' href='www.github.com' target="_blank">
            <Github />
          </a>
        </label>
        <label className='header-label label-twitter'>
          <a className='header-link' href='www.twitter.com' target="_blank">
            <Twitter />
          </a>
        </label>
        <label className='header-label label-aboutMe'>
          <Link to={ '/AboutMe' } className='header-link link-aboutMe'>
            <h2 className='text-about'>about</h2>
            <h2 className='text-me'>me</h2>
          </Link>
        </label>
      </div>

    </section>
  )
}
