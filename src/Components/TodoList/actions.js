import {TODO_ADD, TODO_DELETE, TODO_UPDATE} from "./actionTypes";

export const todoAdd = (payload) => {
    return {type: TODO_ADD, payload}
};

export const todoUpdate = (payload) => {
    return {type: TODO_UPDATE, payload}
};

export const todoDelete = (payload) => {
    return {type: TODO_DELETE, payload}
};