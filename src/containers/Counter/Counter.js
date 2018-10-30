import React, { Component } from 'react';

// 
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.counter} />
                <CounterControl label="Increment" clicked={() => this.counterChangedHandler( 'inc' )} />
                <CounterControl label="Decrement" clicked={() => this.counterChangedHandler( 'dec' )}  />
                <CounterControl label="Add 5" clicked={() => this.counterChangedHandler( 'add', 5 )}  />
                <CounterControl label="Subtract 5" clicked={() => this.counterChangedHandler( 'sub', 5 )}  />
            </div>
        );
    }
}

// STORE INSTRUCTIONS HOW THE STATE MANAGE BY REDUX SHOULD BE MAPPED TO PROPS
// THAT THE COMPONENT(CONTAINER) CAN USE 
const mapStatetoProps = state => {
    // RETURNS AN OBJECT - A MAP OF PROP NAMES AN SLICE OF THE STATE STORED
    return {
        counter: state.counter
    };
}

//CONNECT RETURNS A FUNCTION THAT RETURNS A HOC AND IT TAKES A COMPONENT AS INPUT
// IN FEW WORDS CONNECT GIVES ACCESS TO THE COMPONENT (Counter) WITH ACCESS TO THE PROPS
// DEFINED ON THE mapStatetoProps LIDE counter
export default connect(mapStatetoProps)(Counter);