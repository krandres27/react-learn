import React from 'react';

//css
import Classes from './BuildControl.css';

const BuildControl = (props) => {
    return(
        <div className={Classes.BuildControl}>
            <div className={Classes.Label}>{props.label}</div>
            <button className={Classes.Less}>Less</button>
            <button className={Classes.More}>More</button>
        </div>
    );
}

export default BuildControl;