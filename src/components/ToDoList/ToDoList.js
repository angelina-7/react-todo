import React, { Component } from 'react';
import ToDoItem from './ToDoItem';
import ToDoForm from './ToDoForm';
import Counter from './Counter';
import styles from './ToDoList.module.css'

class ToDoList extends Component {
    state = {
        position: -1,
        newTask: "",
        tasks: [
            'Wake up',
            'Work',
            'Cook dinner',
            'Eat'
        ],
        isDone: [
            false,
            false,
            false,
            false
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
                this.setState({ newTask: "", tasks: [...this.state.tasks, newTask], isDone: [...this.state.isDone, false] })
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
        this.state.position === index && this.setState({ newTask: "", position: -1, })
        const tasks = this.state.tasks.filter((t, i) => i !== index)
        const isDone = this.state.isDone.filter((t, i) => i !== index)
        this.setState({ tasks, isDone })
    }

    handleEdit(index) {
        const newTask = this.state.tasks[index]
        this.setState({ position: index, newTask })
    }

    handleDone(index) {
        const isDone = [...this.state.isDone]
        isDone[index] = !this.state.isDone[index]
        this.setState({ isDone })
    }

    render() {
        return (
            <div className={styles.component}>
                <h1 className={styles.text}>ToDo List</h1>
                <Counter isDone={this.state.isDone} />
                <ul className={styles.ul}>
                    {this.state.tasks.map((task, i) => {
                        return <ToDoItem key={task} onDelete={() => this.handleDelete(i)} onEdit={() => this.handleEdit(i)} onDone={() => this.handleDone(i)} isDone={this.state.isDone[i]}>{task}</ToDoItem>
                    })}
                </ul>
                <ToDoForm isEdit={this.state.position !== -1} newTask={this.state.newTask} onChange={(e) => this.handleChange(e)} onAdd={() => this.handleAdd()} onCancel={() => this.handleCancel()} />
            </div >
        );
    }
}

export default ToDoList;