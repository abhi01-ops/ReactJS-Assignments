import React, { Component } from 'react';
import Todo from './Todo';
import Random from './Random';

export default class ParentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: JSON.parse(localStorage.getItem('todos')) || [],
      randomTexts: [],
      useLocalStorage: true,
    };
  }

  componentDidMount() {
    this.generateRandomTexts();
  }

  generateRandomTexts = () => {
    setTimeout(() => {
      const texts = Array.from({ length: 5 }, () => {
        const length = Math.floor(Math.random() * (64 - 8 + 1)) + 8;
        return Math.random().toString(36).substring(2, 2 + length);
      });
      this.setState({ randomTexts: texts });
    }, 10000);
  };

  addTodo = (todo) => {
    const newTodos = [...this.state.todos, todo];
    this.setState({ todos: newTodos }, this.saveTodos);
  };

  deleteTodo = (index) => {
    const newTodos = this.state.todos.filter((_, i) => i !== index);
    this.setState({ todos: newTodos }, this.saveTodos);
  };

  editTodo = (index, newTodo) => {
    const newTodos = [...this.state.todos];
    newTodos[index] = newTodo;
    this.setState({ todos: newTodos }, this.saveTodos);
  };

  toggleStorage = () => {
    this.setState(
      (prevState) => ({ useLocalStorage: !prevState.useLocalStorage }),
      this.saveTodos
    );
  };

  saveTodos = () => {
    const { useLocalStorage, todos } = this.state;
    const storage = useLocalStorage ? localStorage : sessionStorage;
    storage.setItem('todos', JSON.stringify(todos));
  };

  render() {
    return (
      <div className="parent-component">
        <h1>TODO Application</h1>
        <label>
          <input
            type="checkbox"
            checked={this.state.useLocalStorage}
            onChange={this.toggleStorage}
          />
          LocalStorage
        </label>
        <div className="sections">
          <Todo
            todos={this.state.todos}
            addTodo={this.addTodo}
            deleteTodo={this.deleteTodo}
            editTodo={this.editTodo}
          />
          <Random texts={this.state.randomTexts} />
        </div>
      </div>
    );
  }
}
