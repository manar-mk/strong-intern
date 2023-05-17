import * as types from '../actions/types';

const initialState = {
    isLoading: false,
    video: []
}


export default function videoReducers(state=initialState, action) {
    switch(action.type) {
        case types.RECIEVED_GET_VIDEO:
            return {...state, video: action.payload};
        case types.FAILED_GET_VIDEO:
            alert("Ведутся технические работы, по пробуйте позже!");
            return state
        case types.RECIEVED_GET_SERIES_VIDEO:
            return {...state, video: action.payload};
        case types.FAILED_GET_SERIES_VIDEO:
            alert("Ведутся технические работы, по пробуйте позже!");
            return state;
        default:
            return state;
    }
}

