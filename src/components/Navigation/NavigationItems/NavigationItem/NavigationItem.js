import React from 'react';
import { NavLink } from 'react-router-dom';

//css
import Classes from './NavigationItem.css';

const NavigationItem = (props) => {
    return(
        <li className={Classes.NavigationItem}>
            <NavLink exact={props.exact} to={props.link} activeClassName={Classes.active}>{props.children}</NavLink>
        </li>
    );
}

export default NavigationItem;