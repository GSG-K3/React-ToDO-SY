import React, { Component } from 'react';

function ToDoItem(props) {
  const { id, text, completed } = props.task;
  return (
    <li>
      <div>
        <input
          type="checkbox"
          //   checked={completed}
          name={`complete${id}`}
          id={`complete${id}`}
        ></input>
        <label>{text}</label>
        <button
          className="btn btn-blue"
          onClick={() => {
            DeleteTask(1);
          }}
        >
          <i className="fas fa-pen"></i>
        </button>
        <button
          className="btn btn-red"
          onClick={() => {
            DeleteTask(1);
          }}
        >
          <i className="fas fa-trash-alt"></i>
        </button>
      </div>
    </li>
  );
}

function DeleteTask(id) {
  alert('id of Delete :');
  console.log(id);
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
