import {ADD, SUB, ADD_NUM} from './actionTypes';

export function add() {
    return {
        type: ADD
    }
}

export function sub() {
    return {
        type: SUB
    }
}

export const addNum = number => ({
    type: ADD_NUM,
    payload: number,
});

export const res = () => ({
    type: 'RES'
});
