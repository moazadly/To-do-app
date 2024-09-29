import InputComponent from "../utils/InputComponent";
import { useState } from "react";

const TodoFormComponent = ({
  onAddTask,
  Task,
  title,
  setTitle,
  date,
  setDate,
  edit,
  setTask,
  fuc,
}) => {
  console.log("hello");

  function handleSubmit(e) {
    e.preventDefault();
    let id = Task.length + 1;
    if (!title || !date) return;
    if (edit != 0) {
      fuc(edit, title, date);
      edit = 0;
    } else {
      const newItem = { id, title, date, complete: false };
      onAddTask(newItem);
    }

    setTitle("");
    setDate("");
  }

  function setKeys(key, value) {
    if (key === "todoName") {
      setTitle(value);
    } else if (key === "todoDueDate") {
      setDate(value);
    }
  }

  return (
    <form id="todo-form" onSubmit={handleSubmit}>
      <InputComponent
        hf="todo-name"
        label="Add a new task"
        type="text"
        name="todo-name"
        id="todoName"
        placeholder="Enter To-Do Text"
        title={title}
        setKeys={setKeys}
      />
      <InputComponent
        hf="todo-due-date"
        label="Due Date"
        type="date"
        name="todo-due-date"
        id="todoDueDate"
        title={date}
        setKeys={setKeys}
      />
      <div className="d-grid my-4">
        <button id="savaTodo" className="btn btn-primary" type="submit">
          Add Task
        </button>
      </div>
    </form>
  );
};

export default TodoFormComponent;
