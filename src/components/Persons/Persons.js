import React, { Component } from 'react';
import Person from './Person/Person';


// Stateful component

class Persons extends Component {
  constructor(props) {
    super(props);
  }


  // UPDATE LIFECYCLE
  componentWillMount() {
    console.log('persons will mount');
  }
  
  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps persons.js and recieves nextProps: ', nextProps);
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate persons.js', nextProps, nextState);
    return nextProps.personsData !== this.props.personsData || nextProps.showPersons !== this.props.showPersons;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate persons.js and recieves nextProps: ', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('componentDidUpdate persons.js and recieves nextProps: ');
  }

  componentDidMount() {
    console.log('persons did mount');
  }

  render() {
    console.log('persons render')
    if (this.props.showPersons) {
      return this.props.personsData.map((person, index) => {
        return (
          <Person
            name={person.name}
            age={person.age}
            position={index}
            key={index}
            changeName={(event) => this.props.changeNameHandler(event, index)}
            deletePerson={() => this.props.deletePersonsHandler(index)}
          />
        )
      });
    } else {
      return null;
    }
  }
}

// Stateless component || functional component

// const Persons = (props) => {
//   if (props.showPersons) {
//     return props.personsData.map((person, index) => {
//       return (
//         <Person
//           name={person.name}
//           age={person.age}
//           key={index}
//           changeName={(event) => props.changeNameHandler(event, index)}
//           deletePerson={() => props.deletePersonsHandler(index)}
//         />
//       )
//     });
//   } else {
//     return null;
//   }
// }

export default Persons;