import React from "react";
import TodoList from "./components/TodoList/TodoList";
import TodoForm from "./components/TodoForm/TodoForm";
import "./App.scss";

function App() {
    return (
        <div className="App">
            <div className="container">
                <TodoForm />
                <TodoList />
            </div>
        </div>
    );
}

export default App;
