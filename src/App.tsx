import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from './components/Header';
import './assets/fonts/inhys_font/css/Inhys.css'
import './main.scss';
import Navbar from './components/Navbar/Navbar';
import SectionCards from './components/SectionCards/SectionCards';

interface IState {
  resultmenu: boolean;
}

const defaultState: IState = {
  resultmenu: false
};

class App extends Component<{}, IState> {
  state = defaultState;
  
  getCallback(resultmenu: boolean) {
    this.setState({ resultmenu });
  }
  render(){
    return (
      <div className="App">
        <Navbar></Navbar>
        <SectionCards></SectionCards>
      </div>
    );
  }
  
}

export default App;
