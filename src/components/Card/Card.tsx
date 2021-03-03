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
                                <a href="#">11 <br /><small>Feb</small></a>
                            </span>
                        </div>
                    </div>
                    <div className="post-content">
                        <h2 className="post-title"><Link to="#">Título del artículo</Link></h2>
                        <h3 className="post-author"><a href="#">Josías J. Martínez</a></h3>
                        <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber [...]</p>
                        <Link to="/blog" className="read-more">Leer más</Link>
                        <div className="post-bottom">
                            <span className="post-date pull-left">11 febrero de 2014</span>
                            <span className="comments-number pull-right"><a href="#">3 comentarios</a></span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;