import React, { Component } from 'react';
import './App.css';
import TodoList from './Todo';
import RandomTextList from './Random';

class App extends Component {
  render() {
    return (
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ width: "45%" }}>
          <TodoList />
        </div>
        <div style={{ width: "45%" }}>
          <RandomTextList />
        </div>
      </div>
    );
  }
}

export default App;