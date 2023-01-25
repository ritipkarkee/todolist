import React, { useState } from 'react';
import { addTodo, todos } from './todos';

function TodoList() {
  const [todoText, setTodoText] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    addTodo(todoText);
    setTodoText('');
  }

  return (
    <div className="todo-list">
      <form onSubmit={handleSubmit}>
        <label>
          Add Todo:
          <input
            type="text"
            value={todoText}
            onChange={event => setTodoText(event.target.value)}
          />
        </label>
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map(todo => (
          <li key={todo.id} className={todo.completed ? 'completed' : ''}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}