import React from "react";
import { Button, Card } from 'react-bootstrap';
import '../UI/BootstrapClass.css'

function TodoItem(props) {
  const datetime = new Date(props.todo.date).toLocaleString();

  

  return (
    <Card className="cardbg col-6 col-sm-10 mx-auto mb-3">
      <Card.Body>
      <Card.Header className="textpurple">{datetime}</Card.Header>
      <Card.Title className="textpurple fs-4">{props.todo.title}</Card.Title>
      <Button onClick={() => props.handleDelete(props.todo.id)} variant="danger">Delete</Button>
      </Card.Body>
    </Card>
  );
}

export default TodoItem;
