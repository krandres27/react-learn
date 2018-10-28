import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts : [],
            selectedPost: null
        }

        this.handleSelectedPost = this.handleSelectedPost.bind(this);
    }

    componentDidMount() {
        axios.get('/posts').then((res) => {
            const fetchedPosts = res.data.slice(0,4);
            this.setState({posts: fetchedPosts});
        });
    }

    handleSelectedPost(id) {
        this.setState({selectedPost: id});
    }

    render () {
        const posts = this.state.posts.map( post => {
            return <Post key={post.id} title={post.title} clicked={ () => this.handleSelectedPost(post.id) }/>
        });

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost postId={this.state.selectedPost}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;