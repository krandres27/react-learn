import React, { Component } from 'react';
import Person from './Person/Person';


// Stateful component

class Persons extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.showPersons) {
      return this.props.personsData.map((person, index) => {
        return (
          <Person
            name={person.name}
            age={person.age}
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