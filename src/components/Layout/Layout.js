import React from 'react';

//components
import Toolbar from '../Navigation/Toolbar/Toolbar';

// css
import Classes from './Layout.css';

const Layout = (props) => (
    <>
        <Toolbar />
        <div>sidebar, Backdrop</div>
        <main className={Classes.Content}>
            {props.children}
        </main>
    </>
);

export default Layout;