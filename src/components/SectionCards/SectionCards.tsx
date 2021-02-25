import React, { Component } from 'react';
import Card from '../Card';

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
            <div className="padding-bottom">
                <div className="container">
                    <div className="row">
                        <div className="timeline-blog overflow padding-top">
                            <div className="timeline-date text-center">
                                <a href="#" className="btn btn-common uppercase">November 2013</a>
                            </div>
                            <div className="timeline-divider overflow padding-bottom">
                                <Card class={"card arrow-left wow fadeInLeft"}></Card>
                                <Card class={"card arrow-right wow fadeInLeft"}></Card>
                                <Card class={"card arrow-left wow fadeInLeft"}></Card>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SectionCards;