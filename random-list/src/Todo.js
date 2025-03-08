import React, { Component } from 'react';

class TodoList extends Component {
  constructor(props) {
    super(props);
    // Initialize state with pre-defined TODO items
    this.state = {
      todos: [
        { text: "TASK1" },
        { text: "TASK2" },
        { text: "TASK3" },
        { text: "TASK4" },
        { text: "TASK5" },
      ],
    };
  }


  componentDidMount() {
    console.log("Mounted TodoList.......");
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.todos !== this.state.todos) {
      console.log("Updated TodoList.......");
    }
  }

  componentWillUnmount() {
    console.log("Unmount TodoList.......");
  }
  render() {
    return (
      <div>
        <h2>TODO List</h2>
        <ul>
          {this.state.todos.map((todo, index) => (
            <li key={index}>{todo.text}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
