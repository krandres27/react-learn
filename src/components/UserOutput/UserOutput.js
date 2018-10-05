import React from 'react';

const UserOutput = (props) => {
    return (
        <div>
            <p>This is the username</p>
            <p>{props.username}</p>
        </div>
    )
}

export default UserOutput;