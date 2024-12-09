import React, { useContext } from "react";
import { TodoContext } from "./TodoContext";

const Todo = () => {
  const { state } = useContext(TodoContext);

  if (!state?.todos?.length) {
    return <p>Invalid Todo</p>;
  }

  return (
    <ul>
      {state.todos.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
};

export default Todo;
