import { useEffect, useState } from 'react'
import TodoForm from "./componenets/TodoForm";
import TodoList from "./componenets/TodoList";

const LOCAL_STORAGE_KEY = "react-todo-list-todos";

function App() {
  const [todos, setTodos] = useState(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    return storageTodos || [];
  });


  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    console.log('storageTodos:', storageTodos);
    if (storageTodos != null) {
      setTodos(storageTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
    console.log('todos:', todos);
  }, [todos]);

  function addTodo(todo) {
    setTodos([todo, ...todos]);
  }

  function toggleComplete(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <div className="flex justify-center items-center h-screen w-full">
      <div className="flex flex-col">
        <h1 className="text-7xl text-gray-800 font-light font-Roboto">ReactJs Todo</h1>
        <div className='mx-5 my-3 flex flex-col justify-center'>
          <TodoForm addTodo={addTodo} />
          <TodoList
            todos={todos}
            toggleComplete={toggleComplete}
            removeTodo={removeTodo} />
        </div>
      </div>
    </div>
  )
}

export default App;
