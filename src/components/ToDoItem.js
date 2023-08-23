import React, { Component } from "react";

class ToDoItem extends Component {
    state = {
        done: false
    }

    handleDone(e) {
        this.setState({ done: !this.state.done })
    }

    render() {
        return (
            <li style={{ textDecorationLine: this.state.done ? 'line-through' : 'none' }}>
                <button onClick={this.props.onEdit}>Edit</button>
                <button onClick={this.props.onDelete}>Delete</button>
                <button onClick={(e) => this.handleDone(e)}>{this.state.done ? "Done" : "Do"}</button>
                <span style={{ paddingLeft: 15 }}>
                    {this.props.children}
                </span>
            </li>
        );
    }
}

export default ToDoItem;