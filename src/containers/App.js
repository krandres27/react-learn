import React, { Component } from 'react';
import './App.css';
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';
import UserInput from '../components/UserInput/UserInput';
import UserOutput from '../components/UserOutput/UserOutput';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      persons: [
        { name: 'Andrés', age: 26 },
        { name: 'Nidia', age: 58 },
        { name: 'Jaime', age: 88 }
      ],
      username: 'krandres27',
      showPersons: true
    }

    this.changeNameHandler = this.changeNameHandler.bind(this);
    this.changeUsernameHandler = this.changeUsernameHandler.bind(this);
    this.deletePersonsHandler = this.deletePersonsHandler.bind(this);
  }

  changeNameHandler(e, index) {
    //get the persons and make a copy
    const persons = [...this.state.persons];
    const person = {...persons[index]}
    person.name = e.target.value;

    persons[index] = person;

    this.setState({
      persons: persons
    });
  }

  deletePersonsHandler(index) {
    const persons = [...this.state.persons];
    persons.splice(index, 1);

    this.setState({
      persons: persons
    });
  }

  changeUsernameHandler(e, index) {
    this.setState({
      username: e.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <Cockpit />
        <h2>Course code</h2>
        <Persons personsData={this.state.persons} showPersons={this.state.showPersons} changeNameHandler={this.changeNameHandler} deletePersonsHandler={this.deletePersonsHandler}/>
        <hr />
        <h2>Course Assigments</h2>
        <UserInput username={this.state.username} changeUsername={this.changeUsernameHandler}/>
        <UserOutput username={this.state.username}/>
        <hr />
      </div>
    );
  }
}

export default App;
