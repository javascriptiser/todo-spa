import {TODO_ADD} from "./actionTypes";

let initialState = {
    todos: [
        {id: 1, text: 'qwerty1'}
    ]
};


export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case TODO_ADD: {
            console.log(TODO_ADD);
            return {...state, todos: state.todos.concat(action.payload)}
        }
        default:
            return state;
    }

};