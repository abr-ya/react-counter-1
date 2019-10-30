import {ADD, SUB, POW, RES, ADD_NUM} from './actionTypes';

// длинная запись action creator - надо переходить на стрелочные функции!
// export function add() {
//     return {
//         type: ADD
//     }
// }
export const add = () => ({
    type: ADD
});

export const sub = () => ({
    type: SUB
});

export const pow = () => ({
    type: POW
});

export const res = () => ({
    type: RES
});

export const addNum = number => ({
    type: ADD_NUM,
    payload: number,
});
