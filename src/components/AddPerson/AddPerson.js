import React, { Component } from 'react';

import './AddPerson.css';

class AddPerson extends Component {
    //LOCAL STATE - THERE IS NO NEED THAT REDUX KNOWS ABOUT THIS STATE
    state = {
        name: '',
        age: ''
    }

    // ARROW FUNCTION TO KEPT THE CONTEXT ATTACHED TO THE CLASS
    nameChangeHandler = (event) => {
        this.setState({ name: event.target.value});
    }
    
    ageChangeHandler = (event) => {
        this.setState({ age: event.target.value});
    }

    render() {
        return(
            <div className="AddPerson">
                <input type="text" placeholder="name" onChange={this.nameChangeHandler} value={this.state.name}></input>
                <input type="number" placeholder="age" onChange={this.ageChangeHandler} value={this.state.age}></input>
                <button onClick={() => this.props.personAdded(this.state.name, this.state.age)}>Add Person</button>
            </div>
        );
    }
};

export default AddPerson;