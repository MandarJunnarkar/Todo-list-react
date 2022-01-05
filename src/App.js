import React, { useState } from "react";
import NewTodoItem from "./Components/NewTodoItem";
import Todos from "./Todos/Todos";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'

const DUMMY_TODOS = [
  {
    id: "t1",
    title: "Homework",
    date: new Date(2022, 1, 5, 15, 30),
  },
];

function App() {
  const [todos, setTodos] = useState(DUMMY_TODOS);
  const addTodoHandler = (todo) => {
    setTodos((prevtodos) => {
      return [todo, ...prevtodos];
    });
  };

  const handleDelete = (id) => {
    const filteredData = todos.filter((todo) => todo.id !== id);
    setTodos(filteredData);
    
  };

  return (
    <div>
      <h1 className="text-center text-light">My Todo List</h1>
      <NewTodoItem onAddTodo={addTodoHandler} />
      <Todos todos={todos} handleDelete={handleDelete} />
    </div>
  );
}
export default App;
