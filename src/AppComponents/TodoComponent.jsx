import React, { Component } from "react";
import NewTask from "./NewTask";
import TasksComponent from "../ReusableComponents/TasksComponent";
export default class TodoComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      pendingTasks: [],
      completedTasks: [],
    };
  }

  updateTasks = (task, action) => {
    switch (action) {
      case "add": {
        // console.log("updating pending tasks", task);
        this.setState({
          pendingTasks: [
            ...this.state.pendingTasks,
            { value: task, id: ++this.state.count },
          ],
        });
        break;
      }
      case "completed": {
        console.log(task.value, task.id, action);

        // extract the task which was pending
        let newCompletedTask = this.state.pendingTasks.filter(
          (pendingTask) => pendingTask.id === task.id
        )[0];

        // get the new list of pending tasks
        let newPendingTasks = this.state.pendingTasks.filter(
          (pendingTask) => pendingTask.id !== task.id
        );

        this.setState({
          pendingTasks: [...newPendingTasks],
          completedTasks: [...this.state.completedTasks, newCompletedTask],
        });
        break;
      }
      case "delete": {
        console.log(task.value, task.id, action);

        //create a list of new pending tasks
        let newPendingTasks = this.state.pendingTasks.filter(
          (pendingTask) => pendingTask.id !== task.id
        );

        this.setState({
          pendingTasks: [...newPendingTasks],
        });
        break;
      }
      case "undo": {
        // get the task - we have that in the variable
        // remove it from list of completed tasks
        let revertTask = this.state.completedTasks.filter(
          (completedTask) => completedTask.id === task.id
        )[0];

        // add it to list of pending tasks
        let newCompletedTasks = this.state.completedTasks.filter(completedTask =>  completedTask.id !== task.id
        );
        this.setState({
          pendingTasks: [...this.state.pendingTasks, revertTask],
          completedTasks: [...newCompletedTasks],
        });
        break;
      }
      default: {
      }
    }
  };
  render() {
    return (
      <div>
        <NewTask addToPending={(task) => this.updateTasks(task, "add")} />

        {this.state.pendingTasks.length > 0 && (
          <>
            <h3 className="pendingTasks">Pending Tasks</h3>
            <TasksComponent
              type="pending"
              done={(task) => this.updateTasks(task, "completed")}
              remove={(task) => this.updateTasks(task, "delete")}
              tasks={this.state.pendingTasks}
            />
          </>
        )}

        {this.state.completedTasks.length > 0 && (
          <>
            <h3 className="completedTasks">Completed Tasks</h3>
            <TasksComponent
              type="completed"
              undo={(task) => this.updateTasks(task, "undo")}
              tasks={this.state.completedTasks}
            />
          </>
        )}
      </div>
    );
  }
}
