import React, { Component } from "react";

export default class TasksComponent extends Component {
  render() {
    return (
      <ul>
        {this.props.tasks.map((task) => (
          <li id={task.id}>
            <span>{task.value}</span>
            {this.props.type === "pending" ? (
              <>
                <button onClick={() => this.props.done(task)}>✓</button>
                <button onClick={() => this.props.remove(task)}>✗</button>
              </>
            ):
            <>
            <button onClick={() => this.props.undo(task)}>⤹</button>
            
            </>}
          </li>
        ))}
      </ul>
    );
  }
}
