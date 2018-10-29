import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

//components
import Post from '../../../components/Post/Post';
import FullPost from '../../Blog/FullPost/FullPost';

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
        this.props.history.push(`/posts/${id}`);
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
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <Route path={`${this.props.match.url}/:id`} exact component={FullPost} />
            </div>
        );
    }
}

export default Posts;