const initialState = {
    counter: 0,
}

export default function rootReducer(state = initialState, action) {
    switch(action.type) {
        case 'ADD':
            return {
                counter: state.counter + 1
            }
        case 'SUB':
            return {
                counter: state.counter - 1
            }
        case 'POW':
            return {
                counter: state.counter * state.counter
            }
        case 'RES':
            return {
                counter: 0
            }
    }

    return state;
}