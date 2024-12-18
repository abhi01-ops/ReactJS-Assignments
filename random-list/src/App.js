import React from "react";
import { useRoutes } from "react-router-dom";
import Login from "./Login";
import Todo from "./Todo";
import AddTodo from "./AddTodo";
import CompletedTodos from "./CompletedTodos";

const App = () => {
  const routes = useRoutes([
    { path: "/login", element: <Login /> },
    { path: "/todos", element: <Todo /> },
    { path: "/add-todo", element: <AddTodo /> },
    { path: "/completed-todos", element: <CompletedTodos /> },
  ]);

  return <>{routes}</>;
};

export default App;
