import React, { Component } from 'react';
import axios from 'axios';
import './Blog.scss';
import mainImg from './../../assets/img/7.jpg';
import lastNewsImg from './../../assets/img/project1.jpg';
import authorImg from './../../assets/img/1.png';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { History } from 'history'

export interface BlogProps {
    history: History
}

interface IState {
    comentarios: [],
    texto: string,
    aux: {
        id: number
    },
    data: {
        titulo: string,
        descripcion: string,
        fecha: string,
        id: number,
        id_cat: number,
        id_usu: number,
        imagen: string,
        usuario: string
    }
}

const defaultState: IState = {
    comentarios: [],
    texto: '',
    aux: {
        id: 0
    },
    data: {
        titulo: 'Hola',
        descripcion: '',
        fecha: '',
        id: 0,
        id_cat: 0,
        id_usu: 0,
        imagen: '',
        usuario: 'xd'
    }
}

class Blog extends Component<BlogProps, IState> {
    state = defaultState;

    handleSubmit() {
        return (e: React.FormEvent) => {
            e.preventDefault();
        }
    }

    async componentDidMount() {

        var aux = JSON.stringify(this.props.history.location.state);
        var x = JSON.parse(aux);
        axios.get('http://localhost:3001/api/blog/detalles/' + x.id
        ).then(res => {
            if (res.data) {
                this.setState({ data: res.data[0] });
            } else {
                console.log("result: nada" + null);
            }
        }).catch(err => {
            console.log(err);
        });

        this.getComentarios();
    }

    getComentarios = () => {
        axios.get('http://localhost:3001/api/comment/' + 2)
            .then(res => {
                this.setState({ comentarios: res.data })
            })
    }

    render() {
        const { titulo, usuario, descripcion, fecha, imagen } = this.state.data;
        return (
            <>
                <Navbar />
                <div className="blog-container">
                    <div className="post-content">
                        <div style={{textAlign:'center'}} className="post-header">
                            <h1>{titulo}</h1>
                            <h4>Publicado  por {usuario} | {fecha}</h4>
                            <img style={{width:'80%'}} src={imagen} className="img-responsive" alt="" />
                        </div>
                        <div className="overflow">
                            <p>
                                {descripcion}
                            </p>
                            <div className="author-profile padding">
                                <div className="row">
                                    <div className="col-sm-2">
                                        <img src={authorImg} alt="" />
                                    </div>
                                    <div className="col-sm-10">
                                        <h3>Integra</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliq Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</p>
                                        <span>Website:<a href="https://www.inhys.com.mx/"> www.inhys.com.mx</a></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div></div>
                    <div className="post-sidebar">
                        <div className="sidebar-item  recent last-posted">
                            <h3>Últimos artículos</h3>
                            <div className="media-container">
                                <div className="media">
                                    <div className="pull-left">
                                        <a href="#"><img src={lastNewsImg} alt="" /></a>
                                    </div>
                                    <div className="media-body">
                                        <h4><a href="#">Lorem ipsum dolor sit amet consectetur adipisicing elit,</a></h4>
                                        <p>07 March 2014</p>
                                    </div>
                                </div>
                                <div className="media">
                                    <div className="pull-left">
                                        <a href="#"><img src={lastNewsImg} alt="" /></a>
                                    </div>
                                    <div className="media-body">
                                        <h4><a href="#">Lorem ipsum dolor sit amet consectetur adipisicing elit,</a></h4>
                                        <p>07 March 2014</p>
                                    </div>
                                </div>
                                <div className="media">
                                    <div className="pull-left">
                                        <a href="#"><img src={lastNewsImg} alt="" /></a>
                                    </div>
                                    <div className="media-body">
                                        <h4><a href="#">Lorem ipsum dolor sit amet consectetur adipisicing elit,</a></h4>
                                        <p>07 March 2014</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sidebar-item categories">
                            <h3 style={{ color: '#fff', fontSize: 24 }}>Categorias</h3>
                            <div className="categories-container">
                                <ul className="nav navbar-stacked">
                                    <li><a href="#">Lorem ipsum</a></li>
                                    <li><a href="#">Adipisicing elit</a></li>
                                    <li><a href="#">Sed do</a></li>
                                    <li><a href="#">Eiusmod</a></li>
                                    <li><a href="#">Mockup</a></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                    <div className="response-area">
                        <h2 className="bold">Comentarios</h2>
                        <textarea name="comentario" id="comentario"
                            rows={5} style={{ width: '100%' }} placeholder='Escribe tu comentario'
                            value={this.state.texto}
                            onChange={e => this.setState({ texto: e.target.value })}>
                        </textarea>
                        <button type="submit" style={{
                            position: 'relative', padding: '5px 20px',
                            display: 'inline-block',
                            textDecoration: 'none',
                            color: '#ffffff',
                            background: '#111111'
                        }}>Enviar</button>
                        <ul className="media-list">
                            <li className="media">
                                <div className="post-comment">
                                    <a className="pull-left" href="#">
                                        <img className="media-object" src={lastNewsImg} alt="" />
                                    </a>
                                    <div className="media-body">
                                        <span>
                                            <i className="fa fa-user"></i> Publicado por <span>Josías J. Martínez</span>
                                            <a href="#"><i className="far fa-clock"></i> February 11,2014</a>
                                        </span>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliq Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
                                    </div>
                                </div>
                            </li>
                            <li className="media">
                                <div className="post-comment">
                                    <a className="pull-left" href="#">
                                        <img className="media-object" src={lastNewsImg} alt="" />
                                    </a>
                                    <div className="media-body">
                                        <span>
                                            <i className="fa fa-user"></i> Publicado por <span>Josías J. Martínez</span>
                                            <a href="#"><i className="far fa-clock"></i> February 11,2014</a>
                                        </span>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliq Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <Footer />
            </>
        );
    }
}

export default Blog;