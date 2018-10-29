import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

//components
import Post from '../../../components/Post/Post';

//css
import './Posts.css';

class Posts extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts : []
        }

        // this.handleSelectedPost = this.handleSelectedPost.bind(this);
    }

    componentDidMount() {
        axios.get('/posts').then((res) => {
            const fetchedPosts = res.data.slice(0,4);
            this.setState({posts: fetchedPosts});
        });
    }

    // handleSelectedPost(id) {
    //     this.setState({selectedPost: id});
    // }

    render() {
        const posts = this.state.posts.map( post => {
            return (
                <Link key={post.id} to={`/${post.id}`}>
                    <Post title={post.title} />
                </Link>
            );
        });

        return (
            <section className="Posts">
                {posts}
            </section>
        );
    }
}

export default Posts;