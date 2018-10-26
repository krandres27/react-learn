import React from 'react';
import logo from './logo.svg';

const Cockpit = (props) => {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
        <button onClick={props.login}>Log in</button>
      </header>
    </div>
  );
};

export default Cockpit;