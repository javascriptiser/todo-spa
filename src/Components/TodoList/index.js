import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {todoAdd} from "./actions";


export const TodoList = () => {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todoReducer.todos);

    const [state, setState] = useState({title: '', description: 's'});
    const inputChangeHandler = (e) => {
        setState({...state, [e.target.name]: e.target.value})
    };
    const buttonHandler = () => {
        dispatch(todoAdd({...state, id: Date.now()}))
    };

    return <div>
        <button onClick={buttonHandler}>ADD</button>
        <form>
            <input placeholder={'title'}
                   value={state.title}
                   name={'title'}
                   onChange={inputChangeHandler}
            />
            <input placeholder={'description'}
                   value={state.description}
                   name={'description'}
                   onChange={inputChangeHandler}
            />
        </form>
        {!todos.length
            ? <div>Todos is empty </div>
            : todos.map(item => <div
                key={item.id}>id: {item.id} text: {item.title} description: {item.description}</div>)}
    </div>
}

