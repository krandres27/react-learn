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
            name: '',
            email: '',
            address: {
                street: ''
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
            customer: {
                name: 'Andrés González',
                address: {
                    street: 'calle falsa 123',
                    country: 'Colombia'
                }
            },
            deliveryMethod: 'fastest'
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
        return(
            <div className={Classes.ContactData}>
                { !this.state.loading ? 
                    <>
                        <h4>Enter your data</h4>
                        <form>
                            <Input inputtype="input" type="text" name="name" placeholder="Your name" />
                            <Input inputtype="input" type="email" name="email" placeholder="Your email" />
                            <Input inputtype="input" type="text" name="street" placeholder="Your street" />
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