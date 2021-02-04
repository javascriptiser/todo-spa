import {TODO_ADD, TODO_DELETE} from "./actionTypes";

let initialState = {
    todos: [
        {id: 1, title: 'qwerty1', description: 'description0'}
    ]
};


export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case TODO_ADD: {
            return {...state, todos: state.todos.concat(action.payload)}
        }
        case TODO_DELETE: {
            return {...state, todos: state.todos.filter(item => item.id !== action.payload)}
        }
        default:
            return state;
    }

};