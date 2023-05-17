import * as types from '../actions/types';

const initialState = {
    isLoading: false,
    series: [],
}


export default function seriesReducers(state=initialState, action) {
    switch(action.type) {
        case types.RECIEVED_GET_SERIES:
            return {...state, series: action.payload};
        case types.FAILED_GET_SERIES:
            alert("Ведутся технические работы, по пробуйте позже!");
            return state;
        default:
            return state;
    }
}

