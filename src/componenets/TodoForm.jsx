import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function TodoForm({ addTodo }) {
    const [todo, setTodo] = useState({
        id: "",
        task: "",
        completed: false
    });

    function handleTaskInputChange(e) {
        setTodo({ ...todo, task: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (todo.task.trim()) {
            addTodo({ ...todo, id: uuidv4() })
            // reset task input 
            setTodo({ ...todo, task: "" })
        }
    }

    return (
        <form onSubmit={handleSubmit}
            className="flex justify-center align-center gap-2"
        >
            <input
                className="w-2/3 p-1 border-2 border-gray-400 rounded"
                name="task"
                type="test"
                value={todo.task}
                onChange={handleTaskInputChange}
                placeholder="Add Task.."
            />
            <button
                className="font-medium text-3xl text-gray-800"
                type="submit">+</button>
        </form >
    )
}

export default TodoForm;