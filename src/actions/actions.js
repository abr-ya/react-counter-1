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

export function addNum(number) {
    return {
        type: ADD_NUM,
        payload: number,
    }
}