import React from "react";
import { Link } from "react-router-dom";

const TodoList = () => {
  const todos = JSON.parse(localStorage.getItem("todos")) || [];

  return (
    <div>
      <h2>All TODOs</h2>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <Link to={`/todos/${todo.id}`}>{todo.text}</Link>
          </li>
        ))}
      </ul>
      <Link to="/add-todo">Add TODO</Link>
      <Link to="/completed-todos">Completed TODOs</Link>
    </div>
  );
};

export default TodoList;
