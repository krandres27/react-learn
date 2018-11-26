import React from 'react';

//components
import NavigationItem from './NavigationItem/NavigationItem';

//css
import Classes from './NavigationItems.css';

const NavigationItems = (props) => {
    return(
        <ul className={Classes.NavigationItems}>
            <NavigationItem link="/" exact>Burger builder</NavigationItem>
            <NavigationItem link="/orders">Orders</NavigationItem>
            <NavigationItem link="/auth">Authenticate</NavigationItem>
        </ul>
    );
}

export default NavigationItems;