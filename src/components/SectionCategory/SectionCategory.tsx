import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import './SectionCategory.scss';
import axios from "axios";
import Card from '../Card';
import Navbar from '../Navbar';

export interface IMatch { id: string }

export interface IProps extends RouteComponentProps<IMatch> {  }
 
export interface IState { 
    blogs: [{
        id: number,
        imagen:string,
        title: string,
        author: string,
        description: string,
        description_corta:string,
        date: string,
        comments: number,
        category: string
    }] 
}
 
class SectionCategory extends React.Component<IProps, IState> {
    state:IState = { blogs: [{
        id: 0,
        imagen:'',
        title: '',
        author: '',
        description: '',
        description_corta: '',
        date: '',
        comments: 0,
        category: ''
    }] }

    componentDidMount(){
        const { id } = this.props.match.params;
        axios.get("http://localhost:3001/api/blog/c/" + id)
        .then(res => this.setState({blogs: res.data}))
        .catch(err => console.log(err))
    }

    render() { 
        return ( 
            <>
            <Navbar/>
            <div className="category-container">
                <h2>Categoría</h2>
                <div>
                    {
                        this.state.blogs.map((blog,i) => (
                            <Card 
                            key={blog.id}
                            blog={blog}
                            classDirection={i % 2 == 0 ? 'card arrow-left' : 'card arrow-right'}/>
                        ))
                    }
                </div>
            </div>
            </>
        );
    }
}
 
export default withRouter(SectionCategory);