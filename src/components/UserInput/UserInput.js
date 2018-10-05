import React from 'react';

const UserInput = (props) => {
    return (
        <input type="text" defaultValue={props.username} onChange={props.changeUsername} />
    );
}

export default UserInput;