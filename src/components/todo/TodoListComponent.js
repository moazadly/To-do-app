import { Fragment } from "react";
import TodoItemComponent from "./TodoItemComponent";

const TodoListComponent = (props) => {
  return (
    <Fragment>
      <h3 className="mt-4">{props.title}</h3>
      <ul id="pending-list" className="list-group">
        {props.tasks.map((task) => (
          <TodoItemComponent
            task={task}
            onHandelComplete={props.onHandelComplete}
            onHandelDelete={props.onHandelDelete}
            onHandelEdit={props.onHandelEdit}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default TodoListComponent;
