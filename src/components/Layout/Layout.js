import React from 'react';

// css
import Classes from './Layout.css';

const Layout = (props) => (
    <>
        <div>Toolbar, sidebar, Backdrop</div>
        <main className={Classes.Content}>
            {props.children}
        </main>
    </>
);

export default Layout;