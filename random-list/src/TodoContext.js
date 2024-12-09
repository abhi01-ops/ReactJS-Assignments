import React, { createContext, useReducer } from "react";

const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const initialState = { todos: [] };
  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD_TODO":
        return { ...state, todos: [...state.todos, action.payload] };
      case "REMOVE_TODO":
        return { ...state, todos: state.todos.filter(todo => todo.id !== action.payload) };
      case "UPDATE_TODO":
        return {
          ...state,
          todos: state.todos.map(todo =>
            todo.id === action.payload.id ? action.payload : todo
          ),
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
