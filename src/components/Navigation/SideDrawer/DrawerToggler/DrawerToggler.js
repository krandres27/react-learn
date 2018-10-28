import React from 'react';

//css
import Classes from './DrawerToggler.css';

const DrawerToggler = (props) => {
    return (
        <div className={Classes.DrawerToggler} onClick={props.open}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
}

export default DrawerToggler;