import './App.css';
import { Component } from 'react';
import ToDoList from './components/ToDoList/';

class App extends Component {
    render() {
        return (
            <div className="App">
                <ToDoList />
            </div>
        );
    }
}

export default App;
