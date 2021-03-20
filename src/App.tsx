import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import './assets/fonts/inhys_font/css/Inhys.css'
import './main.scss';
import Navbar from './components/Navbar/Navbar';
import SectionCards from './components/SectionCards/SectionCards';
import Blog from './components/Blog/Blog';
import Login from './components/Login/Login';
var usuarioModel = require('../server/models/usuario');

interface IState {
  resultmenu: boolean;
}

const defaultState: IState = {
  resultmenu: false
};

class App extends Component<{}, IState> {

  componentDidMount (){
    console.log("usuarios..."+ usuarioModel.getUsuarios());
    
  }

  state = defaultState;
  
  getCallbackLogin(user: string, pass: string) {
    console.log("App: {"+user+","+pass+"}");
  }
  getCallbackRegister(name: string,email:string,pass: string,hotel:boolean, restaurante:boolean,facturacion:boolean) {
    console.log("App: {"+name+","+email+",...}");
  }
  render(){
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={SectionCards}></Route>
            <Route exact path="/blog" component={Blog}></Route>    
            <Route exact path="/Login" render={() => <Login 
                                                      getCallbackLogin={this.getCallbackLogin.bind(this)}
                                                      getCallbackRegister={this.getCallbackRegister.bind(this)}>
                                                    </Login> } >
            </Route>   
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
