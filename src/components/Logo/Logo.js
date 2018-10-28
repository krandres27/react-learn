import React from 'react';

//assets
import LogoImage from '../../assets/burger-logo.png';

//css
import Classes from './Logo.css';

const Logo = (props) => {
    return(
        <div className={Classes.Logo}>
            <img src={LogoImage} alt="Burger app"/>
        </div>
    );
}

export default Logo;