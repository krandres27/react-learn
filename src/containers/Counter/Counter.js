import React, { Component } from 'react';
import { connect } from 'react-redux';

//constants
import * as actionCreators from '../../store/actions/actions';

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
                <CounterControl label="Increment" clicked={this.props.onIncremenCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onIncremenCounterBy5}  />
                <CounterControl label="Subtract 5" clicked={this.props.onDecrementCounterBy5}  />
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.counter)}>Store Result</button>
                <div>
                    <ul>
                        { this.props.storedResults.map( result => {
                            return <li key={result.id} onClick={() => this.props.onDeleteResult(result.id)}>{result.value}</li>
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}

// STORE INSTRUCTIONS HOW THE STATE MANAGE BY REDUX SHOULD BE MAPPED TO PROPS
// THAT THE COMPONENT(CONTAINER) CAN USE 

// GETS THE SLICE OF THE STATE THAT THE COMPONENT IS GOING TO USE
const mapStatetoProps = state => {
    // RETURNS AN OBJECT - A MAP OF PROP NAMES AN SLICE OF THE STATE STORED
    return {
        counter: state.ctr.counter,
        storedResults: state.res.results
    };
}

// SETS WHICH KIND OF ACTIONS ARE GOING TO BE DISPATCHED FROM THIS COMPONENT
const mapDispatchProps = dispatch => {
// RETURNS AN OBJECT THAT HAVE SOME PROP NAMES WHICH WILL HOLD A REFERENCE TO 
// A FUNCTION WHICH SHOULD EVENTUALLY GET EXECUTED TO DISPATCH AN ACTION
    return {
        onIncremenCounter: () => dispatch(actionCreators.increment()),
        onDecrementCounter: () => dispatch(actionCreators.decrement()),
        onIncremenCounterBy5: () => dispatch(actionCreators.increment5(5)),
        onDecrementCounterBy5: () => dispatch(actionCreators.decrement5(5)),
        onStoreResult: (result) => dispatch(actionCreators.storeResult(result)),
        onDeleteResult: (elementId) => dispatch(actionCreators.deleteResult(elementId)),
    }
}

//CONNECT RETURNS A FUNCTION THAT RETURNS A HOC AND IT TAKES A COMPONENT AS INPUT
// IN FEW WORDS CONNECT GIVES ACCESS TO THE COMPONENT (Counter) WITH ACCESS TO THE PROPS
// DEFINED ON THE mapStatetoProps LIKE counter AND ALSO PROPS METHODS THAT WILL FIRE 
// A DISPATCH LIKE onIncremenCounter
export default connect(mapStatetoProps, mapDispatchProps)(Counter);