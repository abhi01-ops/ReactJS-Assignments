import React, { Component } from 'react';

export default class Todo extends Component {
  state = {
    newTodo: '',
    editIndex: -1,
    editValue: '',
  };

  handleAddTodo = () => {
    if (this.state.newTodo.trim()) {
      this.props.addTodo(this.state.newTodo);
      this.setState({ newTodo: '' });
    }
  };

  handleEditTodo = (index) => {
    this.setState({ editIndex: index, editValue: this.props.todos[index] });
  };

  handleSaveEdit = () => {
    this.props.editTodo(this.state.editIndex, this.state.editValue);
    this.setState({ editIndex: -1, editValue: '' });
  };

  render() {
    return (
      <div className="todo-list">
        <h2>TODO List</h2>
        <ul>
          {this.props.todos.map((todo, index) => (
            <li key={index}>
              {this.state.editIndex === index ? (
                <input
                  type="text"
                  value={this.state.editValue}
                  onChange={(e) => this.setState({ editValue: e.target.value })}
                />
              ) : (
                todo
              )}
              <button onClick={() => this.props.deleteTodo(index)}>Delete</button>
              {this.state.editIndex === index ? (
                <button onClick={this.handleSaveEdit}>Save</button>
              ) : (
                <button onClick={() => this.handleEditTodo(index)}>Edit</button>
              )}
            </li>
          ))}
        </ul>
        <input
          type="text"
          value={this.state.newTodo}
          onChange={(e) => this.setState({ newTodo: e.target.value })}
          placeholder="Add new TODO"
        />
        <button onClick={this.handleAddTodo}>Add</button>
      </div>
    );
  }
}
