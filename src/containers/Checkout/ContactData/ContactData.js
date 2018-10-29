import React, { Component } from 'react';
import axiosInstance from '../../../axios-orders';

//componentes
import Button from '../../../components/UI/Button/Button';

//UI
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Forms/Input/Input';

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
                    value: ''
                },
                street: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Your street'
                    },
                    value: ''
                },
                country: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Your country'
                    },
                    value: ''
                },
                email: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'email',
                        placeholder: 'Your email'
                    },
                    value: ''
                },
                deliveryMethod: {
                    elementType: 'select',
                    elementConfig: {
                        options: [
                            { value: 'fastest', displayValue: 'Fastest'},
                            { value: 'cheapest', displayValue: 'Cheapest'}
                        ]
                    },
                    value: ''
                }
            },
            loading: false
        }

        this.orderHandler = this.orderHandler.bind(this);
    }

    orderHandler(e) {
        e.preventDefault();

        this.setState({loading: true});

        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
        }
        axiosInstance.post('/orders.json', order)
            .then((res) => {
                console.log(res);
                this.setState({loading: false});
                this.props.history.push('/');
            }).catch((err) => {
                this.setState({loading: false});
                console.log(err);
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
                { !this.state.loading ? 
                    <>
                        <h4>Enter your data</h4>
                        <form>
                            { formElementsArray.map( formElement => {
                                return <Input key={formElement.id} label={formElement.id} {...formElement.config} />;
                            })}
                            <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
                        </form>
                    </> :
                    <Spinner />
                }
            </div>
        );
    }
}

export default ContactData;