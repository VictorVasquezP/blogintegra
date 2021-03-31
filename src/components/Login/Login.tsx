import React, { Component } from 'react';
import './Login.scss';
import axios from 'axios';
import Cookies from 'cookie-universal';
import { getSession } from './../helper/helper'
import { History } from 'history'
import Footer from '../Footer';

const cookies = Cookies();
 
interface IState {
    usuarioLogin:string,
    passwordLogin:string,
    usuarioRegister:string,
    passwordRegister:string,
    repetPassword:string,
    email:string,
    hotel:boolean,
    restaurant:boolean,
    factura:boolean,
    error: boolean
}

const defaultState: IState = {
    usuarioLogin:'',
    passwordLogin:'',
    usuarioRegister:'',
    passwordRegister:'',
    repetPassword:'',
    email:'',
    hotel:false,
    restaurant:false,
    factura:false,
    error: false
};

interface IProps {
    history: History
}

class Login extends Component<IProps, IState> {
    state = defaultState;
    
    login = () =>{
        axios.post('http://localhost:3001/api/user/login',{
            usuario: this.state.usuarioLogin,
            password: this.state.passwordLogin
        })
        .then(res =>{
            if(res.data){
                cookies.set("_s",res.data,{
                    path: "/",
                    expires: new Date(new Date().getTime() + 60 * 60 * 1000) 
                });
                
                this.props.history.push("/");
            }else
                this.setState({error: true})
                
        })
        .catch(err =>{
            console.log(err);
        })
    }

    register = () =>{
        axios.post('http://localhost:3001/api/user/insert',{
            usuario: this.state.usuarioRegister,
            password: this.state.passwordRegister,
            email: this.state.email,
            hotel: this.state.hotel,
            restaurant: this.state.restaurant,
            factura: this.state.factura
        })
        .then(res =>{               
            window.location.reload()
        })
        .catch(err =>{
            console.log(err);
        })
    }

    componentDidMount(){
        if(getSession()){
            this.props.history.push("/")
        }
    }

    render() {
        return (
            <>
            <div className="fondo">
                <div className="login-wrap">
                    <div className="login-html">
                        <input id="tab-1" type="radio" name="tab" className="sign-in"/>
                        <label htmlFor="tab-1" className="tab">Log In</label>
                        <input id="tab-2" type="radio" name="tab" className="sign-up" />
                        <label htmlFor="tab-2" className="tab">Registro</label>
                        <div className="login-form">
                            
                            <div className="sign-in-htm">
                            <div style={{color: 'white', textAlign:'center'}}>
                                {this.state.error ? "Error: Verificar usuario y/o contraseña":""}
                            </div>
                            <br/>
                                <div className="group">
                                    <label htmlFor="userLogin" className="label">Usuario</label>
                                    <input id="userLogin" type="text" name="usuario" className="input" value={this.state.usuarioLogin} onChange={e => this.setState({usuarioLogin: e.target.value})} />
                                </div>
                                <br/>
                                <br/>
                                <div className="group">
                                    <label htmlFor="passLogin" className="label">Contraseña</label>
                                    <input id="passLogin" type="password" className="input" data-type="password" value={this.state.passwordLogin} onChange={e => {this.setState({passwordLogin: e.target.value})}} />
                                </div>
                                <br/>
                                <br/>
                                <div className="group">
                                    <input type="submit" className="button" value="Log In" onClick={this.login} />
                                </div>
                                <div className="hr"></div>
                                <div className="foot-lnk">
                                    <a href="#forgot">¿Olvidaste tu contraseña?</a>
                                </div>
                            </div>
                            <div className="sign-up-htm">
                                <div className="group">
                                    <label htmlFor="user" className="label">Nombre</label>
                                    <input id="user" type="text" className="input" value={this.state.usuarioRegister} onChange={e => {this.setState({usuarioRegister: e.target.value})}} />
                                </div>
                                <div className="group">
                                    <label htmlFor="email" className="label">Email</label>
                                    <input id="email" type="text" className="input" value={this.state.email} onChange={e => {this.setState({email: e.target.value})}} />
                                </div>
                                <div className="group">
                                    <label htmlFor="pass" className="label">Contraseña</label>
                                    <input id="pass" type="password" className="input" data-type="password" value={this.state.passwordRegister} onChange={e => {this.setState({passwordRegister: e.target.value})}} />
                                </div>
                                <hr/>
                                <p className="preferences">Preferencias</p>
                                <div className="group">
                                    <input type="checkbox" className="check" checked={this.state.hotel} onChange={() =>this.setState({hotel: !this.state.hotel})}/>
                                    <label onClick={() => this.setState({hotel: !this.state.hotel})}>
                                        <span className="icon"></span> Hotelería
                                    </label>
                                </div>
                                <div className="group">
                                    <input type="checkbox" className="check" checked={this.state.restaurant} onChange={() =>this.setState({restaurant: !this.state.restaurant})}/>
                                    <label onClick={() => this.setState({restaurant: !this.state.restaurant})}>
                                        <span className="icon"></span> Restaurante
                                    </label>
                                </div>
                                <div className="group">
                                    <input type="checkbox" className="check" checked={this.state.factura} onChange={() =>this.setState({factura: !this.state.factura})}/>
                                    <label onClick={() => this.setState({factura: !this.state.factura})}>
                                        <span className="icon"></span> Facturación
                                    </label>
                                </div>
                                <div className="group">
                                    <input type="submit" className="button" value="Registrar" onClick={this.register} />
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
            </>
        );
    }
}

export default Login;
