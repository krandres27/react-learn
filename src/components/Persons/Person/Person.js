import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AuthContext } from '../../../containers/App';


// Stateful or container component is created with a es6 class

class Person extends Component {
  constructor(props) {
    super(props);

    this.inputElement = React.createRef();
  }

  componentDidMount() {
    if(this.props.position === 0) {
      this.inputElement.current.focus();
    }
  }

  render() {
    return (
      <div>
        <AuthContext.Consumer>{ (authenticaded) => { return authenticaded ? <p>I'm Autenthicated</p> : null }}</AuthContext.Consumer>
        <p>I'm a {this.props.name} and I'am {this.props.age} years old</p>
        <input type="text" onChange={this.props.changeName} value={this.props.name} ref={this.inputElement}/>
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

// PROPTYPES VALIDATION

Person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  changeName: PropTypes.func.isRequired,
  deletePerson: PropTypes.func.isRequired
};

// DEFAULT PROPS VALUES

Person.defaultProps = {
  name: 'Nombre',
  age: 100
}

export default Person;
