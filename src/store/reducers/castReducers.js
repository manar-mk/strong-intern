import * as types from '../actions/types';

const initialState = {
    isLoading: false,
    cast: [],
}


export default function castReducers(state=initialState, action) {
    switch(action.type) {
        case types.RECIEVED_GET_CAST:
            return {...state, cast: action.payload};
        case types.FAILED_GET_CAST:
            alert("Ведутся технические работы, по пробуйте позже!");
            return state;
        case types.RECIEVED_GET_SERIES_CAST:
            return {...state, cast: action.payload};
        case types.FAILED_GET_SERIES_CAST:
            alert("Ведутся технические работы, по пробуйте позже!");
            return state;
        default:
            return state;
    }
}

