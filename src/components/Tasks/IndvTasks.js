import React, { Component } from "react";

class IndvTasks extends Component {

    printTasks = (todo) => {
        return <div>
            <input type="checkbox" onChange={() => { this.props.taskComplete(this.props.index) }}/>
            <label key={todo.key}>{todo.title}>{todo.done} </label>
            </div>
    }

    render() {
        let tasksArr = this.props.tasks;
        let listItems = tasksArr.map(this.printTasks);

        return (
           <div>
                {listItems} 
           </div>
        );
    }
};

export default IndvTasks;