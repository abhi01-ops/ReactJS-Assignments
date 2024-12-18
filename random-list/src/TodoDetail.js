import React from "react";
import { useParams } from "react-router-dom";

const TodoDetail = () => {
  const { id } = useParams();
  const todos = JSON.parse(localStorage.getItem("todos")) || [];
  const todo = todos.find((todo) => todo.id === parseInt(id));

  if (!todo) return <p>TODO not found</p>;

  return (
    <div>
      <h2>{todo.text}</h2>
      <p>ID: {todo.id}</p>
    </div>
  );
};

export default TodoDetail;
