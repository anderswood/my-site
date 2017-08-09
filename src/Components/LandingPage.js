import React, { Component } from 'react';

import { Header } from './Header';
// import { CardGrid } from './CardGrid';

class LandingPage extends Component {

  componentDidMount () {
    const heroElem = document.querySelector('.hero-container');
    const headerElem = document.querySelector('.header-container');
    const heightOfHeader = headerElem.offsetHeight;
    const height = 'calc(100vh + ' + heightOfHeader + 'px)';
    heroElem.style.height = height;

    window.addEventListener('scroll', this.fixNav);
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.fixNav);
  }

  fixNav () {
    const headerElem = document.querySelector('.header-container');

    if (window.scrollY >= window.innerHeight) {
      headerElem.classList.add('header-container-fixed');
    } else {
      headerElem.classList.remove('header-container-fixed');
    }
  }

  render () {
    return (
      <div className='hero-container'>

        <section className='titles-container'>
          <h1 id='title'>Anders Wood</h1>
          <h3 id='sub-title1' className='sub-title'>Front-End Developer</h3>
          <h3 id='sub-title2' className='sub-title'>Mech. Engineer</h3>
          <h3 id='sub-title3' className='sub-title'>Adventurer</h3>
        </section>

        <Header />
      </div>
    )
  }

}

export default LandingPage;
