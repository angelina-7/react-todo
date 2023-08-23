import React, { Component } from 'react';
import ToDoItem from './ToDoItem';

class ToDoList extends Component {
    state = {
        position: -1,
        newTask: "",
        tasks: [
            'Wake up',
            'Work',
            'Cook dinner',
            'Eat'
        ]
    }

    handleChange(e) {
        const newTask = e.currentTarget.value
        this.setState({ newTask })
        // newTask.length === 0 && this.state.position !== -1 && this.setState({ position: -1, })
    }

    handleAdd() {
        if (this.state.newTask.length > 0) {
            if (this.state.position === -1) {
                const newTask = this.state.newTask
                this.setState({ newTask: "", tasks: [...this.state.tasks, newTask] })
            } else {
                const tasks = [...this.state.tasks]
                tasks[this.state.position] = this.state.newTask
                this.setState({ position: -1, newTask: "", tasks })
            }
        }
    }

    handleCancel() {
        this.setState({ newTask: "" })
        this.state.position !== -1 && this.setState({ position: -1, })
    }

    handleDelete(index) {
        const tasks = this.state.tasks.filter((t, i) => i !== index)
        this.setState({ tasks })
    }

    handleEdit(index) {
        const newTask = this.state.tasks[index]
        this.setState({ position: index, newTask })
    }

    render() {
        return (
            <div className="App">
                <h1>ToDo List</h1>
                <div>Current number of tasks: {this.state.tasks.length}</div>
                <ul>
                    {this.state.tasks.map((task, i) => {
                        return <ToDoItem key={task} onDelete={() => this.handleDelete(i)} onEdit={() => this.handleEdit(i)}>{task}</ToDoItem>
                    })}
                </ul>
                <p>{this.state.position === -1 ? "Add new task:" : "Edit task:"}</p>
                <input onChange={(e) => this.handleChange(e)} type='text' value={this.state.newTask} />
                <button onClick={() => this.handleAdd()}>Add</button>
                <button onClick={() => this.handleCancel()}>Cancel</button>
            </div>
        );
    }
}

export default ToDoList;