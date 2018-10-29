import React from 'react';

//components
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';

//css
import Classes from './CheckoutSummary.css';

const CheckoutSummary = (props) => {
    return(
        <div className={Classes.CheckoutSummary}>
            <h1>We hope it tastes well!</h1>
            <div style={{ width: '100%', margin:'auto' }}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <Button btnType="Danger" clicked={props.onCheckoutCanceled}>Cancel</Button>
            <Button btnType="Success" clicked={props.onCheckoutContinued}>Continue</Button>
        </div>
    );
}

export default CheckoutSummary;