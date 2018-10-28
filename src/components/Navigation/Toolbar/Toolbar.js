import React from 'react';

//components
import NavigationsItems from '../../Navigation/NavigationItems/NavigationItems'
import Logo from '../../Logo/Logo'

//css
import Classes from './Toolbar.css';

const Toolbar = (props) => {
    return(
        <header className={Classes.Toolbar}>
            <div>Menu</div>
            <Logo />
            <nav>
                <NavigationsItems />
            </nav>
        </header>
    );
}

export default Toolbar;