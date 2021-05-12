import React, { Component } from 'react';
import axios from 'axios';
import './Blog.scss';
import mainImg from './../../assets/img/7.jpg';
import lastNewsImg from './../../assets/img/project1.jpg';
import authorImg from './../../assets/img/1.png';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { History } from 'history'
import CommentSection from "../CommentSection/CommentSection";
import {
    FacebookShareButton, FacebookIcon, WhatsappShareButton, WhatsappIcon, LinkedinShareButton, LinkedinIcon,
    TwitterShareButton, TwitterIcon
} from "react-share";

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
    }

    render() {
        const { titulo, usuario, descripcion, fecha, imagen } = this.state.data;
        return (
            <>
                <Navbar />
                <div className="blog-container">
                    <div className="post-content">
                        <div style={{ textAlign: 'center' }} className="post-header">
                            <h1>{titulo}</h1>
                            <h4>Publicado  por {usuario} | {fecha}</h4>
                            <div className="div-social" style={{ display: 'flex', marginBottom: 10, marginTop: -10 }}>
                                {/* <span style={{alignSelf: 'center', fontStyle: 'italic'}}>Comparte:</span> */}
                                <FacebookShareButton url="https://www.youtube.com/watch?v=8YWl7tDGUPA"
                                    quote="The bible of the fallen, I will be back"
                                    hashtag="InHotel">
                                    <FacebookIcon size={40} round={true}></FacebookIcon>
                                </FacebookShareButton>
                                <TwitterShareButton url="https://www.youtube.com/watch?v=8YWl7tDGUPA">
                                    <TwitterIcon size={40} round={true}></TwitterIcon>
                                </TwitterShareButton>
                                <WhatsappShareButton url="https://www.youtube.com/watch?v=8YWl7tDGUPA"
                                    name="The bible of the fallen, I will be back">
                                    <WhatsappIcon size={40} round={true}></WhatsappIcon>
                                </WhatsappShareButton>
                                <LinkedinShareButton url="https://www.youtube.com/watch?v=8YWl7tDGUPA"
                                    title="The bible of the fallen, I will be back"
                                    source="blogIntegra">
                                    <LinkedinIcon size={40} round={true}></LinkedinIcon>
                                </LinkedinShareButton>
                            </div>
                            <img style={{ width: '80%' }} src={imagen} className="img-responsive" alt="" />
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
                            <h3 style={{ color: '#fff', fontSize: 24 }}>Categorías</h3>
                            <div className="categories-container">
                                <ul className="nav navbar-stacked">
                                    <li><a href="#">Hotelería</a></li>
                                    <li><a href="#">Restaurante</a></li>
                                    <li><a href="#">Facturación</a></li>
                                </ul>
                            </div>

                        </div>
                    </div>    
                    <CommentSection idBlog={this.state.data.id} /> 
                </div>
                <Footer />
            </>
        );
    }
}

export default Blog;