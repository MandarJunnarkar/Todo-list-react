import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, Card } from "react-bootstrap";
import "../UI/BootstrapClass.css";

function TodoForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDateTime, setEnteredDateTime] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const dateTimeChangeHandler = (event) => {
    setEnteredDateTime(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const todoData = {
      title: enteredTitle,
      date: enteredDateTime,
    };

    props.onSaveTodoData(todoData);
    setEnteredTitle("");
    setEnteredDateTime("");
  };

  return (
    <Card className="col-6 col-sm-10 mx-auto mb-5 cardbg">
      <Form className="col-8 col-sm-10 mx-auto" onSubmit={submitHandler}>
        <Form.Group className="mb-3">
          <Form.Label className="textpurple fs-5">Title</Form.Label>
          <Form.Control
            className="bg-secondary text-light"
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className="textpurple fs-5">Date and Time</Form.Label>
          <Form.Control
            className="bg-secondary text-light"
            type="datetime-local"
            value={enteredDateTime}
            onChange={dateTimeChangeHandler}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Button className="button__bg" variant="primary" type="submit">
            Add Todo
          </Button>{" "}
        </Form.Group>
      </Form>
    </Card>
  );
}

export default TodoForm;
