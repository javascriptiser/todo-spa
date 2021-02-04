import {TODO_ADD} from "./actionTypes";

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
        default:
            return state;
    }

};