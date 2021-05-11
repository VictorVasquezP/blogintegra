import React from 'react'
import { Link } from 'react-router-dom';
import "./MenuItem.scss";
import { removeSession } from './../helper/helper'


interface IState {
    isFixed: boolean;
    resultmenu: boolean;
  }
  
  const defaultState: IState = {
    isFixed: false,
    resultmenu: false
  };
  
  interface IProps {
      clicked: boolean;
      session: {
        id: number,  
        usuario: string
      };
  }

  const Items = [
      {
          title : 'Blog',
          url: '/',
          cName: 'nav-links',
          key:1
      },
      {
        title : 'Log In',
        url: '/Login',
        cName: 'nav-links',
        key:2
      }
  ]
    
class MenuItem extends React.Component<IProps, IState> {
    state = defaultState;

    cerrarSesion = () =>{
        removeSession();
        window.location.reload()
    }

    render() {

        if(this.props.session.id !== -1){
            return(
                <ul className={this.props.clicked ? 'nav-menu active' : 'nav-menu'}>
                    <li><a href="/" className="nav-links">Blog</a></li>
                    <li><a href="/Admin" className="nav-links">Admin</a></li>
                    <li className="nav-session">{this.props.session.usuario}</li>
                    <li className="nav-session" onClick={this.cerrarSesion}>Cerrar Sesión</li>
                </ul>
            )
        }

        return (
            <ul className={this.props.clicked ? 'nav-menu active': 'nav-menu'}>
                {Items.map((item) => {
                    return(
                        <li key={item.key}>
                            <a href={item.url} className={item.cName}>{item.title}</a>
                        </li>
                    )
                } )}
            </ul>
        )
    }
    
}

export default MenuItem;