import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loadedPost: null
        }

        this.deleteHandler = this.deleteHandler.bind(this);
    }

    componentDidMount() {
        this.loadData();
    }

    componentDidUpdate() {
        this.loadData();
    }

    loadData() {
        if((!this.state.loadedPost && this.props.match.params.id) || (this.state.loadedPost.id.toString() !== this.props.match.params.id)) {
            axios.get(`/posts/${this.props.match.params.id}`).then((res) => {
                this.setState({
                    loadedPost: res.data
                });
            });
        }
    }

    deleteHandler() {
        axios.delete(`/posts/${this.props.match.params.id}`).then((res) => {
            console.log(res);
        });   
    }

    render () {
        let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;

        if (this.props.match.params.id && !this.state.loadedPost) {
            post = <p style={{ textAlign: 'center' }}>Loading!</p>;
        }
        
        if (this.state.loadedPost) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button className="Delete" onClick={this.deleteHandler}>Delete</button>
                    </div>
                </div>
    
            );
        }
        return post;
    }
}

export default FullPost;