import React from 'react';

//css
import Classes from './Backdrop.css';

const Backdrop = (props) => (
    props.show ? <div className={Classes.Backdrop} onClick={props.clicked}></div> : null
)

export default Backdrop;