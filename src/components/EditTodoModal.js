import React, { useState, useEffect } from 'react';

function EditTodoModal({ onClose, onSave, todo }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (todo) {
      setTitle(todo.title);
      setDescription(todo.description);
    }
  }, [todo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(todo.id, title, description);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Edit Todo</h2>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Title" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
          />
          <textarea 
            placeholder="Description" 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
          />
          <button style={{backgroundColor:"#1d9c52"}} type="submit">Save</button>
          <button style={{backgroundColor:"transparent"}} type="button" onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
}

export default EditTodoModal;
