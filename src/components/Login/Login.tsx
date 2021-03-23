import React, { Component } from 'react';
import './Login.scss';

interface IState {
    usuarioLogin:string,
    passwordLogin:string,
    usuarioRegister:string,
    passwordRegister:string,
    repetPassword:string,
    email:string,
    hotel: boolean,
    restaurante: boolean,
    facturacion: boolean
}

const defaultState: IState = {
    usuarioLogin:'',
    passwordLogin:'',
    usuarioRegister:'',
    passwordRegister:'',
    repetPassword:'',
    email:'',
    hotel: false,
    restaurante: false,
    facturacion:false
};

interface IProps {
    getCallbackLogin: (user: string, pass: string) => void;
    getCallbackRegister: (name: string,email:string,pass: string,hotel:boolean, restaurante:boolean,facturacion:boolean) => void;
}
class Login extends Component<IProps, IState> {
    state = defaultState;
    
    componentDidMount(){
        document.getElementById('tab-1')?.setAttribute("checked",'true');
    }
    login = () =>{
        var {usuarioLogin,passwordLogin} = this.state;
        console.log("user: "+usuarioLogin+" pass: "+passwordLogin);
        this.props.getCallbackLogin(usuarioLogin,passwordLogin);
    }
    register = () =>{
        var {usuarioRegister,passwordRegister, repetPassword, email, hotel, restaurante,facturacion} = this.state;
        console.log("user: "+usuarioRegister+" pass: "+passwordRegister+" repet: "+repetPassword+ " email:"+ email);
        this.props.getCallbackRegister(usuarioRegister,email,passwordRegister,hotel,restaurante,facturacion);
    }
    
    render() {
         const {hotel,restaurante,facturacion} = this.state
        return (
            <div className="fondo">
                <div className="login-wrap">
                    <div className="login-html">
                        <input id="tab-1" type="radio" name="tab" className="sign-in"/>
                        <label htmlFor="tab-1" className="tab">Log In</label>
                        <input id="tab-2" type="radio" name="tab" className="sign-up" />
                        <label htmlFor="tab-2" className="tab">Registro</label>
                        <div className="login-form">
                            
                            <div className="sign-in-htm">
                            <br/>
                                <div className="group">
                                    <label htmlFor="user" className="label">Usuario</label>
                                    <input id="user" type="text" className="input" onChange={(user) => {this.setState({usuarioLogin:user.target.value})}} />
                                </div>
                                <br/>
                                <br/>
                                <div className="group">
                                    <label htmlFor="pass" className="label">Contraseña</label>
                                    <input id="pass" type="password" className="input" data-type="password" onChange={(pass) => {this.setState({passwordLogin:pass.target.value})}} />
                                </div>
                                <br/>
                                <br/>
                                {/* <div className="group">
                                    <input id="check" type="checkbox" className="check" checked={checked} />
                                    <label onClick={this.setChecked}>
                                        <span className="icon"></span> Recordar contraseña
                                    </label>
                                </div> */}
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
                                    <input id="user" type="text" className="input" onChange={(user) => {this.setState({usuarioRegister:user.target.value})}} />
                                </div>
                                <div className="group">
                                    <label htmlFor="pass" className="label">Email</label>
                                    <input id="pass" type="text" className="input" onChange={(email) => {this.setState({email:email.target.value})}} />
                                </div>
                                <div className="group">
                                    <label htmlFor="pass" className="label">Contraseña</label>
                                    <input id="pass" type="password" className="input" data-type="password" onChange={(pass) => {this.setState({passwordRegister:pass.target.value})}} />
                                </div>
                                <hr/>
                                <p className="preferences">Preferencias</p>
                                <div className="group">
                                    <input type="checkbox" className="check" checked={hotel} />
                                    <label onClick={() =>{this.setState({hotel: !this.state.hotel})}}>
                                        <span className="icon"></span> Hotelería
                                    </label>
                                </div>
                                <div className="group">
                                    <input type="checkbox" className="check" checked={restaurante} />
                                    <label onClick={() =>{this.setState({restaurante: !this.state.restaurante})}}>
                                        <span className="icon"></span> Restaurantes
                                    </label>
                                </div>
                                <div className="group">
                                    <input type="checkbox" className="check" checked={facturacion} />
                                    <label onClick={() => {this.setState({facturacion: !this.state.facturacion})}}>
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
        );
    }
}

export default Login;
