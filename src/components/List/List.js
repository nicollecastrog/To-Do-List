import React, { Component } from "react";
import IndvTasks from "../Tasks/IndvTasks";



class List extends Component {
    constructor(props, context) {
      super(props, context);
      this.state = {
        tasks: []
      };
    }

    addTask = (formSubmitEvent) => {
      formSubmitEvent.preventDefault(); // blocking form's default behaviour of refreshing the page upon submiting the form
      let newTaskArr = [...this.state.tasks]; // using array spread syntax to create a new array where all added tasks will be added

      if (this._userInput.value.trim() !== "") { // conditional to check whether input field has string; use trim to remove whitespace at beginning and end
        const newTask = {
          title: this._userInput.value,
          key: Date.now,
          done: false
        };

        newTaskArr.unshift(newTask); // adding a new task (an object made up of three keys) to the end of the tasks array

        this.setState({
          tasks: newTaskArr
        });

        this._userInput.value = ""; // clears the add task input
        console.log(`added ${newTask.title} to list`);
      }
    }

    render() {
      return (
        <div className="mainList">
          <div className="header">
            <form onSubmit={this.addTask}>
              <input ref={(a) => this._userInput = a} placeholder="enter task" />
              <button type="submit">Add Task</button>
            </form>
          </div>
          <IndvTasks tasks={this.state.tasks}/>
        </div>
      );
    }
}

export default List;
