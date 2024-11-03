import React from "react";
import './TodoListItem.css';

const TodoListItem = ({ todo, onToggleTodo, onRemoveTodo }) => {
        return(
    <div className="todo-item-container">
            <h3
      className={todo.completed ? 'completed' : 'todo'}
      style={{ textDecoration: todo.completed ? 'line-through' : 'none', color: todo.completed ? 'red' : 'black' }}
    >
        {todo.text}
    </h3>
            <button
             className="completed-button"
             onClick={onToggleTodo}
             >
                Marked as completed
            </button>

            <button 
            className="remove-button"
            onClick={onRemoveTodo}
            >
                Remove
            </button>
    </div>
        );
};

export default TodoListItem;