import Styles from "./TodoStyles.module.css";

const TodoItemComponent = (props) => {
  return (
    <li
      className={`list-group-item ${
        props.task.complete ? Styles.complete : ""
      }`}
    >
      <div>
        <span>
          {props.task.id}. {props.task.title} - {props.task.date}
        </span>
        <div>
          <button
            className="btn btn-success btn-sm me-2"
            onClick={() => props.onHandelComplete(props.task.id)}
          >
            {props.task.complete ? "Undo" : "Complete"}
          </button>
          <button
            disabled={props.task.complete ? true : false}
            className="btn btn-warning btn-sm me-2"
            onClick={() => props.onHandelEdit(props.task.id)}
          >
            Edit
          </button>
          <button
            className="btn btn-danger btn-sm me-2"
            onClick={() => props.onHandelDelete(props.task.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </li>
  );
};

export default TodoItemComponent;
