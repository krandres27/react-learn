import React from 'react';

//components
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

//UI
import Backdrop from '../../UI/Backdrop/Backdrop';

//css
import Classes from './SideDrawer.css';

const SideDrawer = (props) => {
    let attachedClasses = [Classes.SideDrawer, Classes.Close];

    if(props.open) {
        attachedClasses = [Classes.SideDrawer, Classes.Open];
    }

    return(
        <>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <div className={Classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </>
    );
}

export default SideDrawer;