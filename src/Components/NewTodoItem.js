import React from "react";
import TodoForm from "./TodoForm";

function NewTodoItem(props){
   const onSaveTodoDataHandler = (enteredTodoData) =>{
    const TodoData= {
        ...enteredTodoData,
        id: Math.random().toString()
    };
    props.onAddTodo(TodoData);
   };

    return(
        <TodoForm onSaveTodoData={onSaveTodoDataHandler}/>
    );
};

export default NewTodoItem;