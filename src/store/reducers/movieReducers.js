import * as types from '../actions/types';

const initialState = {
    isLoading: false,
    movies: [],
    details: []
}


export default function moviesReducers(state=initialState, action) {
    switch(action.type) {
        case types.RECIEVED_POPULAR_MOVIES: 
            return {...state, movies: action.payload};
        case types.FAILED_POPULAR_MOVIES:
            alert("Ведутся технические работы, по пробуйте позже!");
            return state;
        case types.RECIEVED_GET_MOVIE:
            return {...state, details: action.payload};
        case types.FAILED_GET_MOVIE:
            alert("Ведутся технические работы, по пробуйте позже!");
            return state;
        default:
            return state;
    }
}

