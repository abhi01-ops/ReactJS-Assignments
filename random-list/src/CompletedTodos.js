import React from "react";

const CompletedTodos = () => {
  const todos = JSON.parse(localStorage.getItem("todos")) || [];
  const completedTodos = todos.filter((todo) => todo.completed);

  return (
    <div>
      <h2>Completed TODOs</h2>
      <ul>
        {completedTodos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default CompletedTodos;
