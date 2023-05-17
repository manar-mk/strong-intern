import * as types from './types';

export function getPopularMovies(){
    return {type: types.GET_POPULAR_MOVIES}
}

export function getMovieById({id}){
    return {type: types.GET_MOVIE, id}
}