import React, { Component } from "react";

class IndvTasks extends Component {
    printTask = (todo) => {
      return (
        <div key={todo.key}>
          <input type="checkbox" onChange={this.props.toggleHandler}/>
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
