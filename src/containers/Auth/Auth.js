import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions'

//  UI
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Forms/Input/Input';

//  CSS
import Classes from './Auth.css';

class Auth extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loginForm: {
                email: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'email',
                        placeholder: 'Email address'
                    },
                    value: '',
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched: false
                },
                password: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'password',
                        placeholder: 'password'
                    },
                    value: '',
                    validation: {
                        required: true,
                        minLength: 7
                    },
                    valid: false,
                    touched: false
                }
            },
            isSignIn: true
        }

        this.submitHandler = this.submitHandler.bind(this);
        this.changeSignAction = this.changeSignAction.bind(this);
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

    changeSignAction() {
        this.setState( prevState => {
            return {
                isSignIn: !prevState.isSignIn
            }
        })
    }

    inputChangeHandler(e, inputIdentifier) {
        const updatedForm = {...this.state.loginForm};
        const updatedFormElement = {...updatedForm[inputIdentifier]};
        updatedFormElement.value = e.target.value;

        //check the validity
        updatedFormElement.touched = true; 
        updatedFormElement.valid = this.checkFormElementsValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedForm[inputIdentifier] = updatedFormElement;

        this.setState({
            loginForm: updatedForm
        });
    }

    submitHandler(e) {
        e.preventDefault();

        const { loginForm: { email }, loginForm: { password } } = this.state;

        this.props.onAuth(email.value, password.value, this.state.isSignIn)
    }

    render() {
        const formElementsArray = [];
        
        for (let key in this.state.loginForm) {
            formElementsArray.push({
                id: key,
                config: this.state.loginForm[key]
            });
        }

        return (
            <div>
                <form className={Classes.Auth} onSubmit={this.submitHandler}>
                    <h2>{this.state.isSignIn ? 'SIGN IN' : 'REGISTER'}</h2>
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
                    <Button btnType="Success">{this.state.isSignIn ? 'LOG IN' : 'SIGN UP'}</Button>
                    <ul className={Classes.Auth__options}>
                        <li className={this.state.isSignIn ? Classes.active : null} onClick={this.changeSignAction}>sign in</li>
                        <li className={!this.state.isSignIn ? Classes.active : null} onClick={this.changeSignAction}>sign up</li>
                    </ul>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password, isSignIn) => dispatch(actions.auth(email, password, isSignIn))
    }
}

export default connect(null, mapDispatchToProps)(Auth);