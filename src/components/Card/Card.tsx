import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/timeline/1.jpg';
import './Card.scss';

interface IState {

}

const defaultState: IState = {

};

interface IProps {
    class: string
}
class Card extends Component<IProps, IState> {
    state = defaultState;
    render() {
        return (
            <div className={this.props.class}>
                
                <div className="single-blog timeline">
                    <div className="post-thumb">
                        <img src={img} className="img-responsive" alt="IMG12" />
                        <div className="post-overlay">
                            <span>
                                <a href="#">14 <br /><small>Feb</small></a>
                            </span>
                        </div>
                    </div>
                    <div className="post-content overflow">
                        <h2 className="post-title"><Link to="/blog">Advanced business cards design</Link></h2>
                      
                        <h3 className="post-author"><a href="#">Posted by micron News</a></h3>
                        <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber [...]</p>
                        <a href="#" className="read-more">View More</a>
                        <div className="post-bottom">
                            <span className="post-date pull-left">February 11, 2014</span>
                            <span className="comments-number pull-right"><a href="#">3 comments</a></span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;