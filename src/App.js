import React, { Component } from 'react';

import ListToDo from './Components/ListToDo';

import './App.css';

class App extends Component {
  state = {
    items: [
      { id: 1, text: 'Test to to do 1', completed: false },
      { id: 2, text: 'Test to to do 2', completed: true },
      { id: 3, text: 'Test to to do 3', completed: false }
    ]
  };

  render() {
    return (
      <div className="App">
        <h1>TO Do</h1>
        <ListToDo items={this.state.items} />
      </div>
    );
  }
}

export default App;
