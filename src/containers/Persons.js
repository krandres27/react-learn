import React, { Component } from 'react';
import { connect } from 'react-redux';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

class Persons extends Component {
    // state = {
    //     persons: []
    // }

    // personAddedHandler = () => {
    //     const newPerson = {
    //         id: Math.random(), // not really unique but good enough here!
    //         name: 'Max',
    //         age: Math.floor( Math.random() * 40 )
    //     }
    //     this.setState( ( prevState ) => {
    //         return { persons: prevState.persons.concat(newPerson)}
    //     } );
    // }

    // personDeletedHandler = (personId) => {
    //     this.setState( ( prevState ) => {
    //         return { persons: prevState.persons.filter(person => person.id !== personId)}
    //     } );
    // }

    render () {
        return (
            <div>
                <AddPerson personAdded={this.props.onPersonAdded} />
                {this.props.persons.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.onPersonDeleted(person.id, this.props.persons)}/>
                ))}
            </div>
        );
    }
}

// map state to props
const mapStateToProps = state => {
    return {
        persons: state.persons
    }
}

// map dispatch actions to props methods
const mapDispatchProps = dispatch => {
    return {
        onPersonAdded: (name, age) => dispatch({ type: 'ADD_PERSON', personData: { name, age } }),
        onPersonDeleted: (personId, persons) => dispatch({ type: 'DELETE_PERSON', personId, persons}),
    }
}

export default connect(mapStateToProps, mapDispatchProps)(Persons);