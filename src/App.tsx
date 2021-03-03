import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import './assets/fonts/inhys_font/css/Inhys.css'
import './main.scss';
import Navbar from './components/Navbar/Navbar';
import SectionCards from './components/SectionCards/SectionCards';
import Blog from './components/Blog/Blog';

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
        <Navbar/>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={SectionCards}></Route>
            <Route exact path="/blog" component={Blog}></Route>    
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
  
}

export default App;
