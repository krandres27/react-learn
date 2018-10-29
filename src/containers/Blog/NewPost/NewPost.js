import React, { Component } from 'react';
// HERE INSTEAND OF IMPOR THE DEFAULT AXIOS, THE INSTANCE WILL BE IMPORTED
//import axios from 'axios';
import axiosInstance from '../../../AxiosInstance';


import './NewPost.css';

class NewPost extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            content: '',
            author: 'Max'
        }

        this.postHandler = this.postHandler.bind(this);
    }

    componentDidMount() {
        // HERE WOULD BE POSSIBLE TO IMPLEMENT A KIND OF GUARD
        // TO REDIRECT OR SIMPLY TO PRESENT A MESSAGE IN THIS COMPONENT  
        if(!this.props.auth) {
            this.props.history.replace('/posts');
        }
    }

    postHandler() {
        const post = {
            title: this.state.title,
            content: this.state.content,
            author: this.state.author
        };

        axiosInstance.post('/posts/', post).then((res) => {
            console.log(res);
            // TO REDIRECT -> REPLACING THE STACK SO THE BACK BUTTON WILL NOT WORK
            this.props.history.replace('/posts');
            // TO REDIRECT -> PUSHING TO THE STACK SO THE BACK BUTTON WILL WORK
            //this.props.history.push('/posts');
        });
    }

    render () {
        return (
            <div className="NewPost">
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
                    <option value="Max">Max</option>
                    <option value="Manu">Manu</option>
                </select>
                <button onClick={this.postHandler}>Add Post</button>
            </div>
        );
    }
}

export default NewPost;