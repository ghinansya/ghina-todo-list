import React from 'react';

function Modal({ onClose, onConfirm, todo }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <p>Are you sure you want to delete?</p>
        <h2>"{todo.title}"</h2>
        <button style={{backgroundColor:"#cd5252"}} onClick={onConfirm}>Delete</button>
        <button style={{backgroundColor:"transparent"}} onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}

export default Modal;
