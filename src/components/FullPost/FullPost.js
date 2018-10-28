import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loadedPost: null
        }
    }
    componentDidUpdate() {
        if(!this.state.loadedPost && this.props.postId || this.state.loadedPost && this.state.loadedPost.id !== this.props.postId) {
            axios.get(`https://jsonplaceholder.typicode.com/posts/${this.props.postId}`).then((res) => {
                this.setState({
                    loadedPost: res.data
                });
            });
        }
    }

    render () {
        let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;

        if (this.props.postId && !this.state.loadedPost) {
            post = <p style={{ textAlign: 'center' }}>Loading!</p>;
        }
        
        if (this.state.loadedPost) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button className="Delete">Delete</button>
                    </div>
                </div>
    
            );
        }
        return post;
    }
}

export default FullPost;