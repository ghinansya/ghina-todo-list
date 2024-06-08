import React, { useState } from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import Modal from './components/Modal';
import EditTodoModal from './components/EditTodoModal';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [todoToDelete, setTodoToDelete] = useState(null);
  const [todoToEdit, setTodoToEdit] = useState(null);

  const addTodo = (title, description) => {
    const newTodo = { id: Date.now(), title, description };
    setTodos([...todos, newTodo]);
  };

  const editTodo = (id, updatedTitle, updatedDescription) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, title: updatedTitle, description: updatedDescription } : todo));
    setShowEditModal(false);
  };

  const deleteTodo = () => {
    setTodos(todos.filter(todo => todo.id !== todoToDelete.id));
    setShowModal(false);
  };

  const confirmDelete = (todo) => {
    setTodoToDelete(todo);
    setShowModal(true);
  };

  const openEditModal = (todo) => {
    setTodoToEdit(todo);
    setShowEditModal(true);
  };

  return (
    <div className="App">
      <img src='me.png'></img>
      <h1>ToDo - App</h1>
      <p>Created by : Ghina Nur Agsya</p>
      <hr></hr>
      <AddTodo addTodo={addTodo} />
      <TodoList 
        todos={todos} 
        confirmDelete={confirmDelete} 
        openEditModal={openEditModal} 
      />
      {showModal && (
        <Modal 
          onClose={() => setShowModal(false)} 
          onConfirm={deleteTodo}
          todo={todoToDelete}
        />
      )}
      {showEditModal && (
        <EditTodoModal 
          onClose={() => setShowEditModal(false)} 
          onSave={editTodo}
          todo={todoToEdit}
        />
      )}
    </div>
  );
}

export default App;
