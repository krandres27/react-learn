import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';

//components
import Posts from '../Blog/Posts/Posts';
import NewPost from '../Blog/NewPost/NewPost';
// import FullPost from '../Blog/FullPost/FullPost';

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
                <Switch>
                    {/* only choose the first Route with a match and omit the others
                        so in this case /new-post would not reach the /:id path
                    */}
                    <Route path="/new-post" component={NewPost} />
                    <Route path="/" component={Posts} /> {/* the exact was removed due to the nested route, we need to actually render the posts component*/}
                    {/* <Route path="/:id" exact component={FullPost} /> */}
                </Switch>
            </div>
        );
    }
}

export default Blog;