import React from 'react';

//css 
import Classes from './Button.css';

const Button = (props) => {
    return(
        <button 
            className={[Classes.Button, Classes[props.btnType]].join(" ")}
            onClick={props.clicked}
            disabled={props.disabled}>
            {props.children}
        </button>
    )
}

export default Button;