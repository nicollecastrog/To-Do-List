import React, { Component } from "react";
import IndvTasks from "../Tasks/IndvTasks";



class List extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            tasks: [],
            newTask: "",
            

        };
    }

    // taskComplete = (done) => {
    //     console.log(done)
    //     this.state.tasks[done].done = !this.state.tasks[done].done

    //     this.setState({
    //         tasks: this.state.tasks
    //     })
    // }

    addTask = (newTask) => {
        let newTaskArr = this.state.tasks //creating a new array where all added tasks will be added
        if (this._userInput.value !== "") { //conditional to check whether input field has string
            newTaskArr.unshift({
                title: this._userInput.value,  // adding an object with three keys to the new array.
                key: Date.now,
                //done: false
            })
            this.setState({
                tasks: newTaskArr
            })
            this._userInput.value = "";
        }
        console.log(newTaskArr);
        newTask.preventDefault(); //blocking form's default behaviour of clear out all input at refresh.
    }


    render() {
        return (
            <div className="mainList">
                <div className="header">
                    <form onSubmit={this.addTask}>
                        <input ref={(a) => this._userInput = a} placeholder="enter task">
                        </input>
                        <button type="submit"> Add Task </button>
                    </form>
                </div>
                <IndvTasks tasks={this.state.tasks}/>
            </div>
        );
    }
}

export default List;


// onClick = {() => {
//     this.addTask(this.state.newTask)
// }}> <span className="lead">