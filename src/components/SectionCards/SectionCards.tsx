import axios from 'axios';
import React, { Component } from 'react';
import Card from '../Card';
import Footer from '../Footer';
import { getSession } from '../helper/helper';
import Navbar from '../Navbar';

import './SectionCards.scss';

interface IState {
    prefs: [],
    isSession: boolean,
    blogs: [
        {
            id: number,
            imagen: string,
            title: string,
            author: string,
            description: string,
            description_corta: string,
            date: string,
            comments: number,
            category: string
        }
    ]
}

interface IProps {
}

// const blogs = [
//     {
//         id: 1,
//         title: 'Lorem Ipsum - InHotel',
//         author: 'Josías J. Martínez',
//         description: 'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber [...]',
//         date: '11 febrero de 2014',
//         comments: 55,
//         class: 'card arrow-left',
//         category: 'Hotelería'
//     },
//     {
//         id: 2,
//         title: 'Lorem Ipsum - InMenu',
//         author: 'Josías J. Martínez',
//         description: 'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber [...]',
//         date: '05 mayo de 1999',
//         comments: 10,
//         class: 'card arrow-right',
//         category: 'Restaurante'
//     },
//     {
//         id: 3,
//         title: 'Lorem Ipsum - InFe',
//         author: 'Francisco Árciga',
//         description: 'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber [...]',
//         date: '15 febrero de 2000',
//         comments: 3,
//         class: 'card arrow-left',
//         category: 'Facturación'
//     },
//     {
//         id: 4,
//         title: 'Lorem Ipsum - InHotel',
//         author: 'Josías J. Martínez',
//         description: 'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber [...]',
//         date: '11 febrero de 2014',
//         comments: 55,
//         class: 'card arrow-left',
//         category: 'Hotelería'
//     },
//     {
//         id: 5,
//         title: 'Lorem Ipsum - InMenu',
//         author: 'Erick M. Echeverría',
//         description: 'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber [...]',
//         date: '05 mayo de 1999',
//         comments: 10,
//         class: 'card arrow-right',
//         category: 'Restaurante'
//     },
//     {
//         id: 6,
//         title: 'Lorem Ipsum - InFe',
//         author: 'Josías J. Martínez',
//         description: 'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber [...]',
//         date: '15 febrero de 2000',
//         comments: 3,
//         class: 'card arrow-left',
//         category: 'Facturación'
//     }
// ]

class SectionCards extends Component<IProps, IState> {
    state: IState = {
        prefs: [],
        isSession: false,
        blogs: [
            {
                id: 0,
                imagen: '',
                title: '',
                author: '',
                description: '',
                description_corta: '',
                date: '',
                comments: 0,
                category: ''
            }
        ]
    }

    componentDidMount() {
        let sesion = getSession();
        if (sesion) {
            axios.get('http://localhost:3001/api/user/prefs/' + sesion.id,)
                .then(res => {
                    this.setState({ prefs: res.data, isSession: true });
                }).catch(err => {
                    console.log(err);
                });

        }
        axios.get('http://localhost:3001/api/blog/blogsPublicos')
            .then(res => {
                if (res.data) {
                    this.setState({ blogs: res.data })
                }
            })
            .catch(err => {
                console.log(err);
            });
    }

    isPreference = (name: string) => {
        let ban = false;
        if (this.state.isSession) {
            this.state.prefs.forEach((pref: { nombre: string }) => {
                if (name == pref.nombre) ban = true;
            });
        } else { ban = true; }
        return ban;
    }

    render() {
        const { blogs } = this.state;
        let mostrarBlog;
        if(blogs.length > 0){
            mostrarBlog = blogs.map((blog, i) => {
                if (this.isPreference(blog.category))
                    return <Card key={blog.id}
                        blog={blog}
                        classDirection={i % 2 == 0 ? 'card arrow-left' : 'card arrow-right'}
                    />
            });
        }else{
            mostrarBlog = "Sin datos";
        }
        return (
            <>
                <Navbar />
                <div className="padding-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="timeline-blog">
                                <div className="timeline-date">
                                    <a href="#" className="btn-common">November 2013</a>
                                </div>
                                <div className="timeline-divider">

                                    {mostrarBlog}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        );
    }
}

export default SectionCards;