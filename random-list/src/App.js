import React from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import { TodoProvider } from "./TodoContext";

const App = () => {
  return (
    <TodoProvider>
      <div style={{ padding: "20px" }}>
        <h1>TODO Application</h1>
        <TodoForm />
        <Todo />
      </div>
    </TodoProvider>
  );
};

export default App;
