import React, { Component } from "react";

class IndvTasks extends Component {
    printTask = (todo, index) => {
      return (
        <div key={todo.key}>
          <input type="checkbox" onChange={() => this.props.toggleHandler(index)}/>
          <label key={todo.key}>{todo.title}</label>
        </div>
      );
    }

    render() {
      return (
        <div>
          {this.props.tasks.map(this.printTask)}
        </div>
      );
    }
};

export default IndvTasks;
