import React from 'react';

//components
import BuildControl from './BuildControl/BuildControl';

//css
import Classes from './BuildControls.css';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Chesse', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
]

const BuildControls = (props) => {
    return(
        <div className={Classes.BuildControls}>
            { controls.map(control => <BuildControl key={control.label} label={control.label} add={() => props.addIngredient(control.type)} remove={(e) => props.removeIngredient(control.type)}/>) }
        </div>
    );
}

export default BuildControls;