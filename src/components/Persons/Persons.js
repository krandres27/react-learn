import React from 'react';
import Person from './Person/Person';

const Persons = (props) => {
  if (props.showPersons) {
    return props.personsData.map((person, index) => {
      return (
        <Person
          name={person.name}
          age={person.age}
          key={index}
          changeName={(event) => props.changeNameHandler(event, index)}
          deletePerson={() => props.deletePersonsHandler(index)}
        />
      )
    });
  } else {
    return null;
  }
}

export default Persons;