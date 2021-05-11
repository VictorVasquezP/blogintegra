import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import './assets/fonts/inhys_font/css/Inhys.css'
import './main.scss';
import SectionCards from './components/SectionCards/SectionCards';
import Blog from './components/Blog/Blog';
import Login from './components/Login/Login';
import PanelPrincipal from './components/Admin/PanelPrincipal';
import Blogs from './components/Admin/Blogs/Blogs';

interface IState {
}

const defaultState: IState = {
};

class App extends Component<{}, IState> {
  
  render(){
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={SectionCards}></Route>
            <Route exact path="/blog/" component={Blog}></Route>    
            <Route exact path="/Login" component={Login}></Route> 
            <Route exact path="/Admin" component={PanelPrincipal}></Route> 
            <Route exact path="/Blogs" component={Blogs}></Route> 
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
