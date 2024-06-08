import React from 'react';

function TodoItem({ todo, index, confirmDelete, openEditModal }) {
  return (
    <div className="todo-item">
        <p><span className='title'>{" ("}{index}.) {todo.title}</span></p>
        <p><span className='desc'>{todo.description}</span></p>
        <hr></hr>
        <div className='row'>
            <div className='columns-50'>
                <button style={{backgroundColor:"#c8d737"}} onClick={() => openEditModal(todo)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256">
                        <path fill="currentColor" d="m227.32 73.37l-44.69-44.68a16 16 0 0 0-22.63 0L36.69 152A15.86 15.86 0 0 0 32 163.31V208a16 16 0 0 0 16 16h44.69a15.86 15.86 0 0 0 11.31-4.69l83.67-83.66l3.48 13.9l-36.8 36.79a8 8 0 0 0 11.31 11.32l40-40a8 8 0 0 0 2.11-7.6l-6.9-27.61L227.32 96a16 16 0 0 0 0-22.63M48 179.31L76.69 208H48Zm48 25.38L51.31 160L136 75.31L180.69 120Zm96-96L147.32 64l24-24L216 84.69Z"/>
                    </svg>
                </button>
            </div>
            <div className='columns-50'>
                <button style={{backgroundColor:"#cd5252"}} onClick={() => confirmDelete(todo)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M16 1.75V3h5.25a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5H8V1.75C8 .784 8.784 0 9.75 0h4.5C15.216 0 16 .784 16 1.75m-6.5 0V3h5V1.75a.25.25 0 0 0-.25-.25h-4.5a.25.25 0 0 0-.25.25M4.997 6.178a.75.75 0 1 0-1.493.144L4.916 20.92a1.75 1.75 0 0 0 1.742 1.58h10.684a1.75 1.75 0 0 0 1.742-1.581l1.413-14.597a.75.75 0 0 0-1.494-.144l-1.412 14.596a.25.25 0 0 1-.249.226H6.658a.25.25 0 0 1-.249-.226z"/>
                        <path fill="currentColor" d="M9.206 7.501a.75.75 0 0 1 .793.705l.5 8.5A.75.75 0 1 1 9 16.794l-.5-8.5a.75.75 0 0 1 .705-.793Zm6.293.793A.75.75 0 1 0 14 8.206l-.5 8.5a.75.75 0 0 0 1.498.088l.5-8.5Z"/>
                    </svg>
                </button>
            </div>
        </div>  
    </div>
  );
}

export default TodoItem;
