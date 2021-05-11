<<<<<<< HEAD
import React, { Component } from 'react';
import axios from 'axios';
=======
import React, { Component }  from 'react';
>>>>>>> 6cc8867... Agregación de redes y CRUD comentarios
import './Blog.scss';
import mainImg from './../../assets/img/7.jpg';
import lastNewsImg from './../../assets/img/project1.jpg';
import authorImg from './../../assets/img/1.png';
import Navbar from '../Navbar';
import Footer from '../Footer';
<<<<<<< HEAD
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
=======
import CommentSection from "../CommentSection/CommentSection";
import { FacebookShareButton, FacebookIcon, WhatsappShareButton, WhatsappIcon, LinkedinShareButton, LinkedinIcon,
TwitterShareButton, TwitterIcon } from "react-share";

export interface BlogProps {  }
 
export interface BlogState {  }
 
class Blog extends Component<BlogProps, BlogState> {
    state: BlogState = {  };
>>>>>>> 6cc8867... Agregación de redes y CRUD comentarios

    render() {
        const { titulo, usuario, descripcion, fecha, imagen } = this.state.data;
        return (
            <>
<<<<<<< HEAD
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
=======
            <Navbar/>
            <div className="blog-container">
                <div className="post-content">
                    <div className="post-header">
                        <h1>The bible of the fallen, I will be back</h1>
                        <h4>Publicado  por Josías J. Martínez | 05 mayo, 2021</h4>
                        <div className="div-social" style={{display: 'flex',marginBottom: 10, marginTop: -10}}>
                            {/* <span style={{alignSelf: 'center', fontStyle: 'italic'}}>Comparte:</span> */}
                        <FacebookShareButton url="https://www.youtube.com/watch?v=8YWl7tDGUPA"
                        quote="The bible of the fallen, I will be back"
                        hashtag="InHotel">
                            <FacebookIcon size={40}  round={true}></FacebookIcon>
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
                        <img src={mainImg} className="img-responsive" alt=""/>
                    </div>
                    <div className="overflow">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a suscipit orci. Vivamus et accumsan leo, sit amet sodales justo. Duis at lectus mattis, scelerisque massa vel, porta enim. Mauris vel rutrum nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque rhoncus erat ipsum, sit amet volutpat odio accumsan quis. Duis aliquet augue ut turpis dapibus, in porta velit malesuada. Morbi mollis orci nec velit commodo, et mattis est sollicitudin. Duis risus lectus, volutpat et neque a, porta ullamcorper sapien. Phasellus ut tortor orci. Sed malesuada nulla lacus. Nullam ante dui, vehicula in neque sed, interdum porta arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                        <h2 className="post-title">Advanced business cards design</h2>
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. <br/> <br/>

                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. 
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. <br/> <br/>

                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. 
                        </p>
                        <div className="author-profile padding">
                            <div className="row">
                                <div className="col-sm-2">
                                    <img src={authorImg} alt=""/>
                                </div>
                                <div className="col-sm-10">
                                    <h3>Integra</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliq Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</p>
                                    <span>Website:<a href="https://www.inhys.com.mx/"> www.inhys.com.mx</a></span>
>>>>>>> 6cc8867... Agregación de redes y CRUD comentarios
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
<<<<<<< HEAD
=======
                            <div className="media-body">
                                <h4><a href="#">Lorem ipsum dolor sit amet consectetur adipisicing elit,</a></h4>
                                <p>07 March 2014</p>
                            </div>
                        </div>
                        </div>
                    </div>
                     <div className="sidebar-item categories">
                        <h3 style={{color:'#fff', fontSize:24}}>Categorías</h3>
                        <div className="categories-container">
                            <ul className="nav navbar-stacked">
                                <li><a href="#">Hotelería</a></li>
                                <li><a href="#">Restaurante</a></li>
                                <li><a href="#">Facturación</a></li>
                            </ul>
>>>>>>> 6cc8867... Agregación de redes y CRUD comentarios
                        </div>

                    </div>
<<<<<<< HEAD
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
=======
                  
                </div>
                <CommentSection idBlog={2}/>
            </div>
            <Footer/>
>>>>>>> 6cc8867... Agregación de redes y CRUD comentarios
            </>
        );
    }
}

export default Blog;