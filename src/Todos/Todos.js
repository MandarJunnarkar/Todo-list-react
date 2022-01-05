import React from "react";
import TodoItem from "./TodoItem";


export default function Todos(props) {
  return (
    <>
      {props.todos.map((todo) => {
        return <TodoItem todo={todo} key={todo.id} handleDelete={props.handleDelete}/>;
      })}
    </>
  );
}