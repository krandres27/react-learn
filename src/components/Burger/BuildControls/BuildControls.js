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
            <div>Current Price: <strong>{props.price.toFixed(2)}</strong></div>
            { controls.map(control => 
                <BuildControl 
                    key={control.label} 
                    label={control.label} 
                    add={() => props.addIngredient(control.type)} 
                    remove={(e) => props.removeIngredient(control.type)} 
                    disabled={props.disabled[control.type]}/>) }
        </div>
    );
}

export default BuildControls;