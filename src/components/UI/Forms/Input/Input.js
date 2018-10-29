import React from 'react';

//css
import Classes from './Input.css';

const Input = (props) => {
    let inputElement = null;

    switch(props.inputtype) {
        case ('input'):
            inputElement = <input className={Classes.InputElement} {...props} />
            break;
        case ('textarea'):
            inputElement = <textarea className={Classes.InputElement} {...props} />
            break;
        default: 
            inputElement = <input className={Classes.InputElement} {...props} />
    }

    return(
        <div className={Classes.Input}>
            <label className={Classes.Label}>{props.label}</label>
            {inputElement}
        </div>
    );
}

export default Input;