import React from 'react';

// stateless or presentational component is always a function

const Person = (props) => {
    return (
        <div>
            <p>I'm a {props.name} and I'am {props.age} years old</p>
            <input type="text" onChange={props.changeName} value={props.name} />
            <button onClick={props.deletePerson}>X</button>
        </div>
    )
}

export default Person;
