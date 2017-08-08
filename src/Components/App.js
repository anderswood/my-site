import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import { Header } from './Header';
import { CardGrid } from './CardGrid';
import { AboutMe } from './AboutMe';

class App extends Component {

  componentDidMount () {
    window.addEventListener('scroll', this.fixNav);
  }

  // componentWillUnmount () {
  //   window.removeEventListener('scroll', this.fixNav);
  // }

  fixNav () {
    const headerElem = document.querySelector('.header-container');
    const heroElem = document.querySelector('.hero-container');
    const topOfHeader = headerElem.offsetTop;
    const heightOfHeader = headerElem.offsetHeight;
    console.log(heightOfHeader);
    if (window.scrollY >= topOfHeader) {
      heroElem.style.paddingTop = heightOfHeader + 'px';
      headerElem.classList.add('fixed-header');
    } else {
      headerElem.classList.remove('fixed-header');
      heroElem.style.paddingTop = 0;
    }
    console.log(topOfHeader, window.scrollY);
  }

  render() {
    return (
      <div id="app-container">
        <div className='hero-container'>

          <section className='titles-container'>
            <h1 id='title'>Anders Wood</h1>
            <h3 id='sub-title1' className='sub-title'>Front-End Developer</h3>
            <h3 id='sub-title2' className='sub-title'>Mech. Engineer</h3>
            <h3 id='sub-title3' className='sub-title'>Adventurer</h3>
          </section>

        </div>
        <Header />
        <Route path={ '/' } render={ () => <CardGrid /> }/>
        <Route path={ '/AboutMe' } render={ () => <AboutMe /> }/>
      </div>
    );
  }
}

export default App;
