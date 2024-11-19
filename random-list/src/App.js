import React from 'react';
import './App.css';
import Todo from './Component1';
import Random from './Component2';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="left-section">
          <Todo />
         </div>
        <div className="right-section">
          <Random />
        </div>
      </div>
    </div>
  );
}

export default App;