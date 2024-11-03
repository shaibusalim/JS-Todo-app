import React from "react";
import { useState } from "react";
import './TodoList.css';
import TodoListItem from './TodoListItem';
import NewTodoForm from './NewTodoForm';
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo, toggleTodo } from "./todoSlice";


const TodoList = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos);
    const [inputValue, setInputValue] = useState('');

    const handleAddTodo = () => {
        if(inputValue.trim()){
            dispatch(addTodo(inputValue));
            setInputValue('');
        }
    }

    return(
    <div className="list-wrapper">
        <NewTodoForm
        inputValue = {inputValue}
        onAddTodo = {handleAddTodo}
        onInputChange = {(e) => setInputValue(e.target.value)}
        />

        {
            todos.map((todo, index) => <TodoListItem 
                todo={todo}
                key={index}
                onRemoveTodo = {() => dispatch(removeTodo(index))}
                onToggleTodo = {() => dispatch(toggleTodo(index))}
                
                />)
        }
    </div>
    );
};

export default TodoList;