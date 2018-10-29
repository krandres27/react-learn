import React, { Component } from 'react';
import axios from 'axios';

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

        this.handleSelectedPost = this.handleSelectedPost.bind(this);
    }

    componentDidMount() {
        axios.get('/posts').then((res) => {
            const fetchedPosts = res.data.slice(0,4);
            this.setState({posts: fetchedPosts});
        });
    }

    handleSelectedPost(id) {
        console.log(id)
        //NAVIGATION PROGRAMATICALLY
        // with string argument
        this.props.history.push(`/${id}`);
        // with object argument
        // this.props.history.push({
        //     pathname: `/${id}`
        // });
    }

    render() {
        const posts = this.state.posts.map( post => {
            return <Post key={post.id} title={post.title} clicked={ () => this.handleSelectedPost(post.id) }/>
        });

        return (
            <section className="Posts">
                {posts}
            </section>
        );
    }
}

export default Posts;