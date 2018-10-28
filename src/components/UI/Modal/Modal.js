import React from 'react';

//components
import Backdrop from '../Backdrop/Backdrop';

//css
import Classes from './Modal.css';

const Modal = (props) => {
    return(
        <>
            <Backdrop show={props.show} clicked={props.modalClose}/>
            <div 
                className={Classes.Modal}
                style={{
                    transform: props.show ? 'translateY(0)' : 'translatey(-100vh)',
                    opacity: props.show ? '1': '0'
                }}>
                {props.children}
            </div>
        </>
    );
}

export default Modal;