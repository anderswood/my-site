import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Favicon from 'react-favicon';

import LandingPage from './LandingPage';
import { Header } from './Header';
import { CardGrid } from './CardGrid';
import AboutMe from './AboutMe';


class App extends Component {

  // componentWillReceiveProps(nextProps) {
  //   console.log(this.props);
  //   console.log(nextProps);
  // }

  render() {
    return (
      <div id="app-container">
        <Favicon url={['https://maxcdn.icons8.com/windows10/PNG/512/Holidays/snowflake-512.png']}/>
        <Route exact path='/' render={ (history) => <LandingPage history={ history } />}/>
        <Route exact path='/' render={ () => <CardGrid />}/>
          <Route path='/AboutMe' render={ () => <Header headerStatus='fixed' />} />
          <Route path='/AboutMe' render={ (location) => <AboutMe />}/>
      </div>
    );
  }
}

export default App;
