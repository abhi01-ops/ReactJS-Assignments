import React, { useState, useContext } from "react";
import { TodoContext } from "./TodoContext";

const TodoForm = () => {
  const [todoText, setTodoText] = useState("");
  const [error, setError] = useState("");
  const { dispatch } = useContext(TodoContext);

  const handleChange = (e) => {
    setTodoText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation
    if (!todoText.trim()) {
      setError("TODO text cannot be empty.");
      return;
    }
    if (todoText.trim().length < 3) {
      setError("TODO text must be at least 3 characters long.");
      return;
    }

    // Dispatch action to add TODO
    dispatch({ type: "ADD_TODO", payload: { id: Date.now(), text: todoText } });

    // Reset form
    setTodoText("");
    setError("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: "20px 0" }}>
      <div>
        <input
          type="text"
          value={todoText}
          onChange={handleChange}
          placeholder="Enter your TODO"
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            width: "80%",
            marginRight: "10px",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            borderRadius: "5px",
            border: "none",
            backgroundColor: "#007BFF",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Add TODO
        </button>
      </div>
      {error && (
        <p style={{ color: "red", marginTop: "10px", fontSize: "14px" }}>
          {error}
        </p>
      )}
    </form>
  );
};

export default TodoForm;
