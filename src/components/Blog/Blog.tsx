import React, { Component }  from 'react';
import './Blog.scss';
import mainImg from  './../../assets/img/7.jpg';
import lastNewsImg from './../../assets/img/project1.jpg';
import authorImg from './../../assets/img/1.png';

export interface BlogProps {
    
}
 
export interface BlogState {
    
}
 
class Blog extends Component<BlogProps, BlogState> {
    state = {  }
    render() { 
        return ( 
            <div className="blog-container">
                <div className="post-content">
                    <div className="post-header">
                        <h1>The bible of the fallen, I will be back.</h1>
                        <h4>Publicado  por Josías J. Martínez | 05 mayo, 2021</h4>
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
                        {/* <div className="post-bottom overflow">
                            <ul className="nav navbar-nav post-nav">
                                <li><a href="#"><i className="fa fa-tag"></i>Creative</a></li>
                                <li><a href="#"><i className="fa fa-heart"></i>32 Love</a></li>
                                <li><a href="#"><i className="fa fa-comments"></i>3 Comments</a></li>
                            </ul>
                        </div> */}
                        {/* <div className="blog-share">
                            <span className='st_facebook_hcount'></span>
                            <span className='st_twitter_hcount'></span>
                            <span className='st_linkedin_hcount'></span>
                            <span className='st_pinterest_hcount'></span>
                            <span className='st_email_hcount'></span>
                        </div> */}
                        <div className="author-profile padding">
                            <div className="row">
                                <div className="col-sm-2">
                                    <img src={authorImg} alt=""/>
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
                        <h3 style={{color:'#fff',fontSize:24}}>Últimos artículos</h3>
                        <div className="media">
                            <div className="pull-left">
                                <a href="#"><img src={lastNewsImg} alt=""/></a>
                            </div>
                            <div className="media-body">
                                <h4><a href="#">Lorem ipsum dolor sit amet consectetur adipisicing elit,</a></h4>
                                <p>posted on  07 March 2014</p>
                            </div>
                        </div>
                        <div className="media">
                            <div className="pull-left">
                                <a href="#"><img src={lastNewsImg} alt=""/></a>
                            </div>
                            <div className="media-body">
                                <h4><a href="#">Lorem ipsum dolor sit amet consectetur adipisicing elit,</a></h4>
                                <p>posted on  07 March 2014</p>
                            </div>
                        </div>
                        <div className="media">
                            <div className="pull-left">
                                <a href="#"><img src={lastNewsImg} alt=""/></a>
                            </div>
                            <div className="media-body">
                                <h4><a href="#">Lorem ipsum dolor sit amet consectetur adipisicing elit,</a></h4>
                                <p>posted on  07 March 2014</p>
                            </div>
                        </div>
                    </div>
                     <div className="sidebar-item categories">
                        <h3 style={{color:'#fff', fontSize:24}}>Categories</h3>
                        <ul className="nav navbar-stacked">
                            <li><a href="#">Lorem ipsum</a></li>
                            <li><a href="#">Adipisicing elit</a></li>
                            <li><a href="#">Sed do</a></li>
                            <li><a href="#">Eiusmod</a></li>
                            <li><a href="#">Mockup</a></li>
                            <li><a href="#">Ut enim ad minim</a></li>
                            <li><a href="#">Veniam, quis nostrud</a></li>
                        </ul>
                    </div>
                    {/*<div className="sidebar-item tag-cloud">
                        <h3>Tag Cloud</h3>
                        <ul className="nav nav-pills">
                            <li><a href="#">Corporate</a></li>
                            <li><a href="#">Joomla</a></li>
                            <li><a href="#">Abstract</a></li>
                            <li><a href="#">Creative</a></li>
                            <li><a href="#">Business</a></li>
                            <li><a href="#">Product</a></li>
                        </ul>
                    </div>
                    <div className="sidebar-item popular">
                            <h3>Latest Photos</h3>
                            <ul className="gallery">
                                <li><a href="#"><img src="images/portfolio/popular1.jpg" alt=""/></a></li>
                                <li><a href="#"><img src="images/portfolio/popular2.jpg" alt=""/></a></li>
                                <li><a href="#"><img src="images/portfolio/popular3.jpg" alt=""/></a></li>
                                <li><a href="#"><img src="images/portfolio/popular4.jpg" alt=""/></a></li>
                                <li><a href="#"><img src="images/portfolio/popular5.jpg" alt=""/></a></li>
                                <li><a href="#"><img src="images/portfolio/popular1.jpg" alt=""/></a></li>
                            </ul>
                        </div> */}
                </div>
                <div className="response-area">
                            <h2 className="bold">Comentarios</h2>
                            <ul className="media-list">
                                <li className="media">
                                    <div className="post-comment">
                                        <a className="pull-left" href="#">
                                            <img className="media-object" src={lastNewsImg} alt=""/>
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
                                            <img className="media-object" src={lastNewsImg} alt=""/>
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
        );
    }
}
 
export default Blog;