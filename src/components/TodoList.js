import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, confirmDelete, openEditModal }) {
  return (
    <div>
      {todos.map((todo, index) => (
        <TodoItem 
          key={todo.id} 
          todo={todo} 
          index={index + 1} 
          confirmDelete={confirmDelete} 
          openEditModal={openEditModal} 
        />
      ))}
    </div>
  );
}

export default TodoList;
