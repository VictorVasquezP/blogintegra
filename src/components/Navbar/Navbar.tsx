import * as React from "react";
import { Link } from "react-router-dom";
import { getSession } from "../helper/helper";
import MenuItem from "../MenuItem";
import "./Navbar.scss";

interface IState {
  isFixed: boolean;
  resultmenu: boolean;
  clicked : boolean;
  session: {
    id: number,
    usuario: string
  };
}

const defaultState: IState = {
  isFixed: false,
  resultmenu: false,
  clicked:false,
  session: {
    id: -1,
    usuario: ''
  }
};

interface IProps {
}
  
class Navbar extends React.Component<IProps, IState> {
    state = defaultState;
    
    handleClick = () =>{
        this.setState({clicked: !this.state.clicked})
    }

    componentDidMount(){
      let session = getSession()
      if(session){
        this.setState({session: session})
      }
    }

    render(){
        return(
            <nav className="NavbarItems">
                <a href="/" className="icon-Integra_Logo"></a>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <MenuItem clicked = {this.state.clicked} session={this.state.session}/>
            </nav>
        );
    }
  }

  export default Navbar;