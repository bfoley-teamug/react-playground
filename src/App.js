import React, { Component } from 'react';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    username: 'music guy'
  }

  usernameChangeHandler = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Starman</h1>
        <UserInput />
        <UserOutput username={this.state.username} />
        <UserOutput username="Jerry Garcia" />
        <UserOutput username="David Bowie" />
        <UserOutput username="Bob Dylan" />
      </div>
    );
  }
}

export default App;
