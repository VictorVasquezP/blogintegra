import React, { Component } from 'react';
import Card from '../Card';
import Navbar from '../Navbar';

import './SectionCards.scss';

interface IState {

}

const defaultState: IState = {

};

interface IProps {

}
class SectionCards extends Component<IProps, IState> {
    state = defaultState;
    render() {
        return (
            <>
            <Navbar/>
            <div className="padding-bottom">
                <div className="container">
                    <div className="row">
                        <div className="timeline-blog">
                            <div className="timeline-date">
                                <a href="#" className="btn-common">November 2013</a>
                            </div>
                            <div className="timeline-divider">
                                <Card class={"card arrow-left"}></Card>
                                <Card class={"card arrow-right"}></Card>
                                <Card class={"card arrow-left"}></Card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        );
    }
}

export default SectionCards;