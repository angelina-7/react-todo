import React, { Component } from "react";
import styles from './ToDoItem.module.css'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

class ToDoItem extends Component {
    render() {
        const { onEdit, onDelete, onDone, isDone, children } = this.props

        return (
            <li className={[(isDone ? styles.done : ''), styles.li].join(' ')}>
                <div className={styles.icon} onClick={onDone}>{isDone ? <CheckBoxIcon fontSize="small" sx={{ color: '#77CBB9' }} /> : <CheckBoxOutlineBlankIcon fontSize="small" />}</div>
                <p className={styles.p}>
                    {children}
                </p>
                <div className={styles.actions}>
                    <div className={styles.icon} onClick={onEdit}><EditIcon fontSize="small" /></div>
                    <div className={styles.icon} onClick={onDelete}><DeleteIcon fontSize="small" /></div>
                </div>
            </li>
        );
    }
}

export default ToDoItem;