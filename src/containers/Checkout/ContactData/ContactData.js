import React, { Component } from 'react';
import axiosInstance from '../../../axios-orders';
import { connect } from 'react-redux';

//constants
import * as actions from '../../../store/actions/';

//componentes
import Button from '../../../components/UI/Button/Button';

//UI
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Forms/Input/Input';

//HOC
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler';

//css
import Classes from './ContactData.css';

class ContactData extends Component {
    constructor(props) {
        super(props);

        this.state = {
            orderForm: {
                name: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Your name'
                    },
                    value: '',
                    validation: {
                        required: true,
                        minLength: 7
                    },
                    valid: false,
                    touched: false
                },
                street: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Your street'
                    },
                    value: '',
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched: false
                },
                country: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Your country'
                    },
                    value: '',
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched: false
                },
                email: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'email',
                        placeholder: 'Your email'
                    },
                    value: '',
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched: false
                },
                deliveryMethod: {
                    elementType: 'select',
                    elementConfig: {
                        options: [
                            { value: 'fastest', displayValue: 'Fastest'},
                            { value: 'cheapest', displayValue: 'Cheapest'}
                        ]
                    },
                    value: 'fastest',
                    valid: true
                }
            },
            validForm: false
        }

        this.orderHandler = this.orderHandler.bind(this);
        this.inputChangeHandler = this.inputChangeHandler.bind(this);
    }

    orderHandler(e) {
        e.preventDefault();
        
        const formData = {};

        for( let formElementId in this.state.orderForm) {
            formData[formElementId] = this.state.orderForm[formElementId].value;
        }

        const order = {
            orderData: formData,
            ingredients: this.props.ingredients,
            price: this.props.totalPrice,
        }
        
        this.props.onOrderBuger(order);
    }

    checkFormElementsValidity(value, rules) {
        let isValid = true;

        if(!rules) {
            return isValid;
        }

        if(rules.required) {
            isValid = value.trim() !== '' && isValid;
        }
        
        if(rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        }
        
        if(rules.maxLength) {
            isValid = value.length <= rules.minLength && isValid;
        }

        return isValid;
    }

    inputChangeHandler(e, inputIdentifier) {
        const updatedForm = {...this.state.orderForm};
        const updatedFormElement = {...updatedForm[inputIdentifier]};
        updatedFormElement.value = e.target.value;

        //check the validity
        updatedFormElement.touched = true; 
        updatedFormElement.valid = this.checkFormElementsValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedForm[inputIdentifier] = updatedFormElement;

        let isValidForm = true;
        for(let formElement in updatedForm) {
            isValidForm = updatedForm[formElement].valid && isValidForm;
        }

        this.setState({
            orderForm: updatedForm,
            validForm: isValidForm
        });
    }

    render() {
        const formElementsArray = [];
        
        for (let key in this.state.orderForm) {
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            });
        }

        return(
            <div className={Classes.ContactData}>
                { !this.props.loading ? 
                    <>
                        <h4>Enter your data</h4>
                        <form onSubmit={this.orderHandler}>
                            { formElementsArray.map( formElement => {
                                return <Input 
                                    key={formElement.id} 
                                    label={formElement.id}
                                    changed={(e) => this.inputChangeHandler(e, formElement.id)} 
                                    shouldValidate={formElement.config.validation}
                                    invalid={!formElement.config.valid}
                                    touched={formElement.config.touched}
                                    {...formElement.config} />;
                            })}
                            <Button btnType="Success" disabled={!this.state.validForm}>ORDER</Button>
                        </form>
                    </> :
                    <Spinner />
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ingredients: state.burgerBuilder.ingredients,
        totalPrice: state.burgerBuilder.totalPrice,
        loading: state.order.loading
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onOrderBuger: (order) => {dispatch(actions.purchaseBurger(order))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(ContactData, axiosInstance));