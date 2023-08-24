import { Component } from "react";
import styles from './ToDoForm.module.css'

class ToDoForm extends Component {
    render() {
        return (
            <div className={styles.wraper}>
                <p className={styles.label}>{this.props.isEdit ? "Edit task" : "Add new task"}</p>
                <input className={styles.input} onChange={this.props.onChange} type='text' value={this.props.newTask} />
                <div className={styles.actions}>
                    <button className={styles.buttonAdd} onClick={this.props.onAdd}>Add</button>
                    <button className={styles.buttonCancel} onClick={this.props.onCancel}>Cancel</button>
                </div>
            </div>
        );
    }
}

export default ToDoForm;