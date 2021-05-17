import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/timeline/1.jpg';
import './Card.scss';

interface IState {

}

const defaultState: IState = {

};

interface IProps {
    blog: {
        id: number,
        imagen: string,
        title: string,
        author: string,
        description: string,
        description_corta:string,
        date: string,
        comments: number,
        category: string
    },
    classDirection: string
}
class Card extends Component<IProps, IState> {
    state = defaultState;

    dateImg = (fecha:string) => {
        var formato = fecha.split('/');
        var day = formato[0];
        console.log(day);
        var mes = Number.parseInt(formato[1]);
        var meses = ['Ene', 'Feb', 'Maz', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
        return <a href="#" style={{ textAlign: 'center', fontSize: 22 }} >{day} <br /><small>{meses[mes-1]}</small></a>;
      }

    render() {
        const { blog, classDirection } = this.props;
        return (
            <div className={classDirection}>
                <div className="single-blog timeline">
                    <div className="post-thumb">
                        <img src={blog.imagen} className="img-responsive" alt="IMG12" />
                        <div className="post-overlay">
                            <span>
                                {this.dateImg(blog.date)}
                            </span>
                        </div>
                    </div>
                    <div className="post-content">
                        <h2 className="post-title">
                            <Link to={{
                                pathname: "/blog",
                                state: { id: blog.id }
                            }} >
                                {blog.title}
                            </Link>
                        </h2>
                        <h3 className="post-author"><a href="#">{blog.author}</a></h3>
                        {blog.description_corta} ...
                        <Link to={{
                            pathname: "/blog",
                            state: { id: blog.id }
                        }}
                            className="read-more">
                            Leer más
                        </Link>
                        <div className="post-bottom">
                            <span className="post-date pull-left">{blog.date}</span>
                            <span className="comments-number pull-right"><a href="#">{blog.comments} comentarios</a></span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;