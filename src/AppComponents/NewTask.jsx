import React, { Component } from "react";
import ButtonComponent from "../ReusableComponents/ButtonComponent";

export default class NewTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
    };
  }
  addNewTask = (value) => {
    if (value === "") {
      window.alert("Cannot add an empty task!");
    } else {
      console.log("Adding new task", value);
      this.props.addToPending(value);
      this.setState({
        newItem:""
      })
    }
  };

  updateInput = (value) => {
    this.setState({
      newItem: value,
    });
  };

  render() {
    return (
      <div className="newTaskContainer">
        <input
          type="text"
          value={this.state.newItem}
          placeholder="Enter new task here"
          onChange={(e) => this.updateInput(e.target.value)}
        />
        <ButtonComponent
          name={"Add Task"}
          action={() => this.addNewTask(this.state.newItem)}
        ></ButtonComponent>
      </div>
    );
  }
}
