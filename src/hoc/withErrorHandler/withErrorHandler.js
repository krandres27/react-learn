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
            // clearing the error when sending a new request
            axios.interceptors.request.use( req => {
                this.setState({ error: null });
                return req;
            });

            // intercepting the erros on response
            axios.interceptors.response.use( res => res, error => {
                this.setState({ error: error });
            });
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
