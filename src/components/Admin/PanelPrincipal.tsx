import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './PanelPrincipal.scss';
import Sidebar from './Sidebar/Sidebar';
interface IState {

}

const defaultState: IState = {

};

interface IProps {

}
class PanelPrincipal extends Component<IProps, IState> {
    state = defaultState;
    render() {
        return (
            <div>
                <div className="content">
                    <a href="/Blogs" className="boton-admin">
                        Blog
                    </a>
                </div>
            </div >
        );
    }
}
export default () => {
    return (
        <Sidebar child={<PanelPrincipal />} />
    );
}
