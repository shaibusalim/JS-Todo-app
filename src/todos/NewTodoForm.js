import React from "react";
import './NewTodoForm.css';


const NewTodoForm = ({inputValue, onInputChange, onAddTodo}) => {

        return(
    <div className="new-todo-form">
            <input 
            className="new-todo-input" 
            type="text" 
            value={inputValue}
            placeholder="Type your new todo"
            onChange={onInputChange}
            />
            <button 
            className="new-todo-button"
            onClick={onAddTodo}
            >Create Todo</button>
    </div>
        );
};

export default NewTodoForm;