import React, { Component } from 'react';


// Stateful or presentational component is created with a es6 class

class Person extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>I'm a {this.props.name} and I'am {this.props.age} years old</p>
        <input type="text" onChange={this.props.changeName} value={this.props.name} />
        <button onClick={this.props.deletePerson}>X</button>
      </div>
    )
  }
}

// stateless or presentational component is always a function

// const Person = (props) => {
//     return (
//         <div>
//             <p>I'm a {props.name} and I'am {props.age} years old</p>
//             <input type="text" onChange={props.changeName} value={props.name} />
//             <button onClick={props.deletePerson}>X</button>
//         </div>
//     )
// }

export default Person;
