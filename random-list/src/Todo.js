import React, { useState } from 'react';

const Todo = ({ todos, addTodo, deleteTodo, editTodo }) => {
  const [newTodo, setNewTodo] = useState('');
  const [editIndex, setEditIndex] = useState(-1);
  const [editValue, setEditValue] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      addTodo(newTodo);
      setNewTodo('');
    }
  };

  const handleEditTodo = (index) => {
    setEditIndex(index);
    setEditValue(todos[index]);
  };

  const handleSaveEdit = () => {
    editTodo(editIndex, editValue);
    setEditIndex(-1);
    setEditValue('');
  };

  return (
    <div className="todo-list">
      <h2>TODO List</h2>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {editIndex === index ? (
              <input
                type="text"
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
              />
            ) : (
              todo
            )}
            <button onClick={() => deleteTodo(index)}>Delete</button>
            {editIndex === index ? (
              <button onClick={handleSaveEdit}>Save</button>
            ) : (
              <button onClick={() => handleEditTodo(index)}>Edit</button>
            )}
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add new TODO"
      />
      <button onClick={handleAddTodo}>Add</button>
    </div>
  );
};

export default Todo;
