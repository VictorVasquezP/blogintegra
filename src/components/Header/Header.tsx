import * as React from "react";
import Navbar from "../Navbar";
import "./Header.scss";

interface IState {
  isFixed: boolean;
  resultmenu: boolean;
}

const defaultState: IState = {
  isFixed: false,
  resultmenu: false
};

interface IProps {
  displaycontact: boolean;
  callback: (result: boolean) => void;
}

class Header extends React.Component<IProps, IState> {
  state = defaultState;
  headerElement = React.createRef<HTMLDivElement>();

 
  getCallback(resultmenu: boolean) {
    this.setState({ resultmenu });
    return this.props.callback(false);
  }

  fixHeader({ isFixed }: IState) {
    return !isFixed ? { isFixed: true } : null;
  }

  unfixHeader({ isFixed }: IState) {
    return isFixed ? { isFixed: false } : null;
  }

  render() {
    return (
      <header
        className={`Header${this.state.isFixed ? " fixed" : ""}`}
        ref={this.headerElement}
      >
        
      </header>
    );
  }
}

export default Header;
