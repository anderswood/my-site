import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom'

import { CardGrid } from './CardGrid';
import { AboutMe } from './AboutMe';
import LinkedIn from './Icons/LinkedIn';
import Twitter from './Icons/Twitter';
import Github from './Icons/Github';

class App extends Component {
  render() {
    return (
      <div id="app-container">
        <div className='header-container'>

          {/* <header>
            <h1 id='header-title'>Anders Wood</h1>
            <h3 id='header-sub-title1' className='sub-title'>Front-End Developer</h3>
          </header> */}
          <section className='titles-container'>
            <h1 id='title'>Anders Wood</h1>
            <h3 id='sub-title1' className='sub-title'>Front-End Developer</h3>
            <h3 id='sub-title2' className='sub-title'>Mech. Engineer</h3>
            <h3 id='sub-title3' className='sub-title'>Adventurer</h3>
          </section>

          <section className='header-icons-container'>
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
          </section>

        </div>
          <Route path={ '/home' } render={ () => <CardGrid /> }/>
          <Route path={ '/AboutMe' } render={ () => <AboutMe /> }/>
      </div>
    );
  }
}

export default App;
