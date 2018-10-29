import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';

//components
import Posts from '../Blog/Posts/Posts';
import NewPost from '../Blog/NewPost/NewPost';

//css
import './Blog.css';

class Blog extends Component {
    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li>
                                <NavLink 
                                    to="/" 
                                    activeClassName="my-active" 
                                    activeStyle={{
                                        color: '#FA923F',
                                        textDecoration: 'underline'
                                    }}
                                    exact>Posts</NavLink>
                            </li>
                            <li>
                                <NavLink to={{
                                    pathname: '/new-post',
                                    hash: '#submit',
                                    search: '?variable=true'
                                }}>New post</NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>
                <Route path="/" exact component={Posts} />
                <Route path="/new-post" component={NewPost} />
            </div>
        );
    }
}

export default Blog;