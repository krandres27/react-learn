import React, { Component } from 'react';

//ui
import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = ( WrappedComponent, axios ) => {
    return class extends Component {
        constructor(props) {
            super(props);

            this.state = {
                error: null
            };

            this.errorConfirmHandler = this.errorConfirmHandler.bind(this);
        }

        componentWillMount() {
            // MAYBE HERE I NEED TO CHECK IF THERE WAS ALREADY
            // AN INTERCEPTOR, IN ORDER TO NOT CREATE MORE
            // clearing the error when sending a new request
            this.reqInterceptor = axios.interceptors.request.use( req => {
                this.setState({ error: null });
                return req;
            });

            // intercepting the erros on response
            this.resInterceptor = axios.interceptors.response.use( res => res, error => {
                this.setState({ error: error });
            });
        }

        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        } 

        errorConfirmHandler() {
            this.setState({ error: null });
        }
        
        render() {
            return (
                <>
                    <Modal show={this.state.error} modalClose={this.errorConfirmHandler}>
                        {this.state.error ? this.state.error.message : null }
                    </Modal>
                    <WrappedComponent {...this.props} />
                </>
            );
        }
    }
};

export default withErrorHandler;
