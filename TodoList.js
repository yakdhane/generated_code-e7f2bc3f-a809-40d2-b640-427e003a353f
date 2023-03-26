import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleComplete, handleDelete }) => {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
};

export default TodoList;