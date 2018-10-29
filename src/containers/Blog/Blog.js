import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

//components
import Posts from '../Blog/Posts/Posts';
import NewPost from '../Blog/NewPost/NewPost';
import NotFound from '../Blog/NotFound/NotFound';

//css
import './Blog.css';

class Blog extends Component {
    state = {
        auth: true
    }

    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li>
                                <NavLink 
                                    to="/posts" 
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
                    {/* TO pass custom props thes render approach could help. by spreading the Route props
                    and appending the custom ones */}
                    <Route path="/new-post" exact render={ props =><NewPost {...props} auth={this.state.auth}/>}/>
                    {/* <Route path="/new-post" component={NewPost}/> */}
                    <Route path="/posts" component={Posts}/> {/* the exact was removed due to the nested route, we need to actually render the posts component*/}
                    {/* <Route path="/:id" exact component={FullPost} /> */}
                    <Redirect from="/" exact to="/posts"/>
                    <Route component={NotFound} />
                </Switch>
            </div>
        );
    }
}

export default Blog;