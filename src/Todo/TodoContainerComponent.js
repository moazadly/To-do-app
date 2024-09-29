import { useEffect, useState } from "react";
import TodoFormContainer from "./TodoFormContainer";
import TodoListComponent from "./TodoListComponent";

const TODO_DUMMY_DATA = [
  { id: 1, title: "Task One", dueDate: "2024-12-12", completed: false },
  { id: 2, title: "Task Two", dueDate: "2024-12-12", completed: true },
  { id: 3, title: "Task Three", dueDate: "2024-12-12", completed: true },
  { id: 4, title: "Task Four", dueDate: "2024-12-12", completed: false },
  { id: 5, title: "Task Five", dueDate: "2024-12-12", completed: true },
  { id: 6, title: "Task Six", dueDate: "2024-12-12", completed: true },
];

const TODO_INITIAL_VALUE = { id: 0, title: "", dueDate: "", completed: false };

const TodoContainerComponent = () => {
  const [todoList, setTodoList] = useState(TODO_DUMMY_DATA);

  const [todoObject, setTodoObject] = useState(TODO_INITIAL_VALUE);

  const generateNextId = () => {
    let maxId = 0;
    for (let index = 0; index < todoList.length; index++) {
      if (todoList[index].id > maxId) {
        maxId = todoList[index].id;
      }
    }

    return ++maxId;
  };

  const submitTodoFormHandler = () => {
    if (todoObject.id !== 0) {
      const modifiedTodoList = todoList.map((todoItem) => {
        if (todoItem.id === todoObject.id) {
          todoItem.title = todoObject.title;
          todoItem.dueDate = todoObject.dueDate;
        }
        return todoItem;
      });
      setTodoList(modifiedTodoList);
    } else {
      setTodoList([...todoList, { ...todoObject, id: generateNextId() }]);
    }
    setTodoObject(TODO_INITIAL_VALUE);
  };

  const deleteTodoHandler = (todo) => {
    console.log(todo);
    const modifiedTodoList = todoList.filter(
      (todoItem) => todoItem.id !== todo.id
    );
    setTodoList(modifiedTodoList);
  };

  const changeTodoStatusHandler = (todo) => {
    console.log(todo);
    const modifiedTodoList = todoList.map((todoItem) => {
      if (todoItem.id === todo.id) {
        todoItem.completed = !todoItem.completed;
      }
      return todoItem;
    });
    setTodoList(modifiedTodoList);
  };

  return (
    <div className="container my-5">
      <TodoFormContainer
        submitForm={submitTodoFormHandler}
        todoItem={todoObject}
        setTodoItem={setTodoObject}
      />
      <>
        <TodoListComponent
          setTodo={setTodoObject}
          changeStatus={changeTodoStatusHandler}
          deleteTodo={deleteTodoHandler}
          title="Pending Tasks"
          todoList={todoList.filter((filteredTodo) => !filteredTodo.completed)}
        />
        <TodoListComponent
          setTodo={setTodoObject}
          changeStatus={changeTodoStatusHandler}
          deleteTodo={deleteTodoHandler}
          title="Completed Tasks"
          todoList={todoList.filter((filteredTodo) => filteredTodo.completed)}
        />
      </>
    </div>
  );
};

export default TodoContainerComponent;
