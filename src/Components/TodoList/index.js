import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {todoAdd} from "./actions";


export const TodoList = () => {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todoReducer.todos)
    const buttonHandler = () => {
        dispatch(todoAdd({id: 2, text: 'qwerty2'}))
    }
    console.log(todos)

    return <div>
        {!todos.length
            ? <div>Todos is empty </div>
            : todos.map(item => <div key={item.id}>id: {item.id} text : {item.text}</div>)}
        <button onClick={buttonHandler}>ADD</button>
    </div>
}

