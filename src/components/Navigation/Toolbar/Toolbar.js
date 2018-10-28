import React from 'react';

//components
import Logo from '../../Logo/Logo';
import NavigationsItems from '../../Navigation/NavigationItems/NavigationItems';
import DrawerToggler from '../../Navigation/SideDrawer/DrawerToggler/DrawerToggler';

//css
import Classes from './Toolbar.css';

const Toolbar = (props) => {
    return(
        <header className={Classes.Toolbar}>
            <DrawerToggler open={ () => props.openSideDrawer() }/>
            <div className={Classes.Logo}>
                <Logo />
            </div>
            <nav className={Classes.DesktopOnly}>
                <NavigationsItems />
            </nav>
        </header>
    );
}

export default Toolbar;