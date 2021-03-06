import React, { Component } from "react";

export default class TasksComponent extends Component {
  render() {
    return (
      <ul className="listSection">
        {this.props.tasks.map((task) => (
          <li  id={task.id}>
            <span className={this.props.type} >{task.value}</span>
            {this.props.type === "pending" ? (
              <div className="buttonsSection">
                <button title="Mark Completed" onClick={() => this.props.done(task)}>✓</button>
                <button title="Delete Task" onClick={() => this.props.remove(task)}>✗</button>
                </div>
            ):
            <div className="buttonsSection">
            <button title="Mark Pending" onClick={() => this.props.undo(task)}>⤹</button>
            
            </div>}
          </li>
        ))}
      </ul>
    );
  }
}
