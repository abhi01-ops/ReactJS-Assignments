import React, { useState, useEffect } from 'react';
import Todo from './Todo';
import Random from './Random';

const ParentComponent = () => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem('todos')) || []
  );
  const [randomTexts, setRandomTexts] = useState([]);
  const [useLocalStorage, setUseLocalStorage] = useState(true);

  // Generate random texts after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      const texts = Array.from({ length: 5 }, () => {
        const length = Math.floor(Math.random() * (64 - 8 + 1)) + 8;
        return Math.random().toString(36).substring(2, 2 + length);
      });
      setRandomTexts(texts);
    }, 10000);

    // Cleanup timer on unmount
    return () => clearTimeout(timer);
  }, []);

  // Save TODOS to LocalStorage or SessionStorage when they change
  useEffect(() => {
    const storage = useLocalStorage ? localStorage : sessionStorage;
    storage.setItem('todos', JSON.stringify(todos));
  }, [todos, useLocalStorage]);

  const addTodo = (todo) => setTodos([...todos, todo]);

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const editTodo = (index, newTodo) => {
    const newTodos = [...todos];
    newTodos[index] = newTodo;
    setTodos(newTodos);
  };

  const toggleStorage = () => setUseLocalStorage(!useLocalStorage);

  return (
    <div className="parent-component">
      <h1>TODO Application</h1>
      <label>
        <input
          type="checkbox"
          checked={useLocalStorage}
          onChange={toggleStorage}
        />
        LocalStorage
      </label>
      <div className="sections">
        <Todo
          todos={todos}
          addTodo={addTodo}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
        <Random texts={randomTexts} />
      </div>
    </div>
  );
};

export default ParentComponent;
