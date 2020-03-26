import React, { Component } from 'react';

function ToDoItem(props) {
  const { id, text, completed } = props.task;
  return (
    <li>
      <div className="task-container">
        <div className="task-check">
          <input
            type="checkbox"
            name={`complete${id}`}
            id={`complete${id}`}
            checked={completed}
            onChange={() => {
              MarkTask({ id });
            }}
          ></input>
        </div>

        <div className="task-text">
          <label>{text}</label>
        </div>

        <div className="task-btn">
          <button
            className="btn btn-blue"
            onClick={() => {
              EditTask({ id });
            }}
          >
            <i className="fas fa-pen"></i>
          </button>
          <button
            className="btn btn-red"
            onClick={() => {
              DeleteTask({ id });
            }}
          >
            <i className="fas fa-trash-alt"></i>
          </button>
        </div>
      </div>
    </li>
  );
}

function MarkTask(task) {
  alert(`Mark Task : ${task.id}`);
  console.log(task.id);
}

function DeleteTask(task) {
  alert(`Delete Task : ${task.id}`);
}

function EditTask(task) {
  alert(`Edit Task : ${task.id}`);
}

class ListToDo extends Component {
  render() {
    const list = this.props.items.map(item => {
      return <ToDoItem key={item.id.toString()} task={item} />;
    });
    return (
      <section className="row">
        <div className="task-list">
          <ul>{list}</ul>
        </div>
      </section>
    );
  }
}

export default ListToDo;
