import React, { Component } from 'react';

//components
import Backdrop from '../Backdrop/Backdrop';

//css
import Classes from './Modal.css';

class Modal extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }

    render() {
        return(
            <>
                <Backdrop show={this.props.show} clicked={this.props.modalClose}/>
                <div 
                    className={Classes.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translatey(-100vh)',
                        opacity: this.props.show ? '1': '0'
                    }}>
                    {this.props.children}
                </div>
            </>
        );
    }
}

export default Modal;