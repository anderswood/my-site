import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Modal from 'react-modal';

import Favicon from 'react-favicon';
import LandingPage from './LandingPage';
import { Header } from './Header';
import { CardGrid } from './CardGrid';
import AboutMe from './AboutMe';
import { ImagePopUp } from './ImagePopUp';

class App extends Component {
  constructor () {
    super ();
    this.state= {
      isOpenStatus: false,
      selectedCard: ''
    }
  }

  handleImageClick (card) {
    console.log(card);
    this.setState({isOpenStatus: true, selectedCard: card})
  }

  render() {
    // console.log(this.state.isOpenStatus);
    return (
      <div id="app-container">
        <Favicon url={['https://maxcdn.icons8.com/windows10/PNG/512/Holidays/snowflake-512.png']}/>
        <Route exact path='/' render={ history => <LandingPage history={ history } />}/>
        <Route exact path='/' render={ () => <CardGrid handleImageClick={ this.handleImageClick.bind(this) } />}/>
        <Route path='/AboutMe' render={ () => <Header headerStatus='fixed' />} />
        <Route path='/AboutMe' render={ location => <AboutMe />}/>
        <Modal isOpen={ this.state.isOpenStatus } contentLabel='Modal' >
          <ImagePopUp />
        </Modal>
      </div>
    );
  }
}

export default App;
