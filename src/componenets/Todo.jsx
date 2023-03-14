import React from "react";

export default function Todo({ todo, toggleComplete, removeTodo }) {
    function handleCheckBoxClick() {
        toggleComplete(todo.id);

    }

    function handleRemoveClick() {
        removeTodo(todo.id);
    }

    return (
        <div className="
          flex gap-3
        ">
            <input type="checkbox" onClick={handleCheckBoxClick} defaultChecked={todo.completed} />
            <li
                className=""
                style={{
                    textDecoration: todo.completed ? "line-through" : null
                }}
            >
                {todo.task}
            </li>
            <button onClick={handleRemoveClick}>x</button>
        </div>
    )
}