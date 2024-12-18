import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddTodo = () => {
  const [todoText, setTodoText] = useState("");
  const navigate = useNavigate();

  const handleAddTodo = (e) => {
    e.preventDefault();
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    const newTodo = { id: Date.now(), text: todoText, completed: false };
    localStorage.setItem("todos", JSON.stringify([...todos, newTodo]));
    navigate("/todos");
  };

  return (
    <form onSubmit={handleAddTodo}>
      <h2>Add TODO</h2>
      <input
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        placeholder="Enter TODO"
      />
      <button type="submit">Add TODO</button>
    </form>
  );
};

export default AddTodo;
