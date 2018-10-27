import React from 'react';

const Layout = (props) => (
    <>
        <div>Toolbar, sidebar, Backdrop</div>
        <main>
            {props.children}
        </main>
    </>
);

export default Layout;