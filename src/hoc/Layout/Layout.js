import React, { Component } from 'react';

//components
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

// css
import Classes from './Layout.css';

class Layout extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showSideDrawer: false
        }
        
        this.sideDrawerCloseHandler = this.sideDrawerCloseHandler.bind(this);
        this.sideDrawerOpenHandler = this.sideDrawerOpenHandler.bind(this);
    }

    sideDrawerOpenHandler() {
        this.setState({ showSideDrawer: true});
    }

    sideDrawerCloseHandler() {
        this.setState({ showSideDrawer: false});
    }

    render() {
        return(
            <>
                <Toolbar openSideDrawer={this.sideDrawerOpenHandler}/>
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerCloseHandler}/>
                <div>sidebar, Backdrop</div>
                <main className={Classes.Content}>
                    {this.props.children}
                </main>
            </>
        );
    }
};

export default Layout;