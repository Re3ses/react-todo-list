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
            className="flex justify-center align-center gap-3    w-full mb-4"
        >
            <input
                className="w-96 border-b-2 border-gray-400 rounded ml-6 px-3"
                name="task"
                type="test"
                value={todo.task}
                onChange={handleTaskInputChange}
                placeholder="Add Task.."
            />
            <button
                className="font-medium pt-[.15rem] text-2xl text-gray-800 h-10 flex flex-col items-center"
                type="submit">+</button>
        </form >
    )
}

export default TodoForm;