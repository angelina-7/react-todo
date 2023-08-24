import { Component } from "react";
import styles from './Counter.module.css'

class Counter extends Component {
    render() {
        const all = this.props.isDone.length
        const notDone = this.props.isDone.filter(t => t === false).length

        if (notDone === all) {
            return <div>You have <span className={styles.counter}>{all}</span> tasks today!</div>
        }

        if (notDone === 0) {
            return <div>You have completed all <span className={styles.counterComplete}>{all}</span> tasks today!</div>
        }

        return <div>You have completed <span className={styles.counter}>{all - notDone}/{all}</span> tasks today!</div>
    }
}

export default Counter;