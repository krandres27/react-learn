import React from 'react';

//components
import BuildControl from './BuildControl/BuildControl';

//css
import Classes from './BuildControls.css';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Chesse', type: 'chesse' },
    { label: 'Meat', type: 'meat' },
]

const BuildControls = (props) => {
    return(
        <div className={Classes.BuildControls}>
            { controls.map(control => <BuildControl key={control.label} type={control.type} label={control.label}/>) }
        </div>
    );
}

export default BuildControls;