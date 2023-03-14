import React from "react";

export default function Todo({ todo, toggleComplete, removeTodo }) {
    function handleCheckBoxClick() {
        toggleComplete(todo.id);

    }

    function handleRemoveClick() {
        removeTodo(todo.id);
    }

    return (
        <div className="flex items-center justify-center gap-2 w-full">
            <input
                className="ml-2"
                type="checkbox" onClick={handleCheckBoxClick} checked={todo.completed} />
            <li
                onClick={handleCheckBoxClick}
                className={`
                    w-96 p-3 text-lg font-medium truncate 
                    ${todo.completed ? 'line-through' : 'no-underline'} 
                    ${todo.completed ? 'text-[#00000063]' : 'text-black'}
                    `}
            >
                {todo.task}
            </li>
            <button className="font-bold text-gray-400" onClick={handleRemoveClick}>x</button>
        </div >
    )
}