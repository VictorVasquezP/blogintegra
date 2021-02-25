import React from 'react'
import "./MenuItem.scss";

interface IState {
    isFixed: boolean;
    resultmenu: boolean;
  }
  
  const defaultState: IState = {
    isFixed: false,
    resultmenu: false
  };
  
  interface IProps {
      clicked: boolean
  }

  const Items = [
      {
          title : 'Home',
          url: '#',
          cName: 'nav-links',
          key:1
      },
      {
        title : 'Services',
        url: '#',
        cName: 'nav-links',
        key:2
    },
    {
        title : 'Products',
        url: '#',
        cName: 'nav-links',
        key:3
    },
    {
        title : 'Contact',
        url: '#',
        cName: 'nav-links',
        key:4
    }
  ]
    
class MenuItem extends React.Component<IProps, IState> {
    state = defaultState;
    render() {
        return (
            <ul className={this.props.clicked ? 'nav-menu active': 'nav-menu'}>
                {Items.map((item) => {
                    return(
                        <li key={item.key}>
                            <a 
                                href={item.url} 
                                className={item.cName}>
                                {item.title}
                            </a>
                        </li>
                    )
                } )}
            </ul>
        )
    }
    
}

export default MenuItem;