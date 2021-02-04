import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {todoAdd, todoDelete} from "./actions";


export const TodoList = () => {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todoReducer.todos);

    const [state, setState] = useState({title: '', description: 's'});
    const inputChangeHandler = (e) => {
        setState({...state, [e.target.name]: e.target.value})
    };
    const addButtonHandler = () => {
        dispatch(todoAdd({...state, id: Date.now()}))
    };
    const deleteButtonHandler = (id) => {
        dispatch(todoDelete(id))
    }

    return <div>
        <button onClick={addButtonHandler}>ADD</button>
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
            : todos.map(item => {
                return <div key={item.id}>
                    <div>id: {item.id} text: {item.title} description: {item.description}</div>
                    <button onClick={() => deleteButtonHandler(item.id)}>Delete</button>
                </div>
            })
        }
    </div>
}

