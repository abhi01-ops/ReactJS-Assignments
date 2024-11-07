import React from 'react';

const Todo = () => {
  const todos = [
    'TASK1',
    'TASK2',
    'TASK3',
    'TASK4',
    'TASK5'
  ];

  return (
    <div>
      <h1>TODO List</h1>
      <div>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </div>
    </div>
  );
};

export default Todo;
