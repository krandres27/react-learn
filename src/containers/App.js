import React, { Component } from 'react';
import './App.css';
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';
import UserInput from '../components/UserInput/UserInput';
import UserOutput from '../components/UserOutput/UserOutput';

export const AuthContext = React.createContext(false);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      persons: [
        { age: 26 },
        { name: 'Nidia', age: 58 },
        { name: 'Jaime', age: 88 }
      ],
      username: 'krandres27',
      showPersons: false,
      authenticaded: false
    }

    this.changeNameHandler = this.changeNameHandler.bind(this);
    this.changeUsernameHandler = this.changeUsernameHandler.bind(this);
    this.deletePersonsHandler = this.deletePersonsHandler.bind(this);
    this.loginHandler = this.loginHandler.bind(this);
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

  loginHandler() {
    this.setState({
      authenticaded: true
    })
  }

  render() {
    return (
      <div className="App">
        <Cockpit login={this.loginHandler}/>
        <h2>Course code</h2>
        <button onClick={ () => this.setState({ showPersons: true })}>show persons</button>  
        <button onClick={ () => this.setState({ showPersons: false })}>hide persons</button>  
        <AuthContext.Provider value={this.state.authenticaded}>
          <Persons personsData={this.state.persons} showPersons={this.state.showPersons} changeNameHandler={this.changeNameHandler} deletePersonsHandler={this.deletePersonsHandler}/>
        </AuthContext.Provider>
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
