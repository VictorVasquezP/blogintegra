import * as React from "react";
import { Link } from "react-router-dom";
import MenuItem from "../MenuItem";
import "./Navbar.scss";

interface IState {
  isFixed: boolean;
  resultmenu: boolean;
  clicked : boolean;
}

const defaultState: IState = {
  isFixed: false,
  resultmenu: false,
  clicked:false
};

interface IProps {
    
  }
  
class Navbar extends React.Component<IProps, IState> {
    state = defaultState;
    handleClick = () =>{
        this.setState({clicked: !this.state.clicked})
    }
    render(){
        return(
            <nav className="NavbarItems">
                <a href="/" className="icon-Integra_Logo"></a>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <MenuItem clicked = {this.state.clicked}></MenuItem>
            </nav>
        );
    }
  }

  export default Navbar;