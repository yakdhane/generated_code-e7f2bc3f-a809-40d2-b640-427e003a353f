import React from 'react';

const TodoItem = ({ todo, toggleComplete, handleDelete }) => {
  const { id, title, completed } = todo;

  const handleCheckboxClick = () => {
    toggleComplete(id);
  };

  const handleDeleteClick = () => {
    handleDelete(id);
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={handleCheckboxClick}
      />
      <span>{title}</span>
      <button onClick={handleDeleteClick}>Delete</button>
    </li>
  );
};

export default TodoItem;