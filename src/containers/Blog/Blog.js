import React, { Component } from 'react';
import { Route } from 'react-router-dom';

//components
import Posts from '../Blog/Posts/Posts';

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
                                <a href="/">link1</a>
                            </li>
                            <li>
                                <a href="/">link2</a>
                            </li>
                        </ul>
                    </nav>
                </header>
                <Route path="/" exact component={Posts} />
                <Route path="/" render={() => <h1>not exact / will be rendered on every page that match the path that it has</h1>} />
            </div>
        );
    }
}

export default Blog;