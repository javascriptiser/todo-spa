import './App.css';
import React, {useState} from "react";
import {TodoList} from "./Components/TodoList";
import {Provider} from "react-redux";
import {store} from "./Redux/store";


function App() {
    return <Provider store={store}>
        <TodoList/>
    </Provider>
}

export default App;
