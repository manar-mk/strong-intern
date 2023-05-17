import {all , put , takeLatest} from 'redux-saga/effects';
import * as types from '../actions/types';
import axios from 'axios'


function* getPopularMovies(){
    try{
        const movies = yield axios.get(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&language=en-US&page=1&sort_by=popularity.desc&api_key=b6c1b5a41f7ab1a8a29ad5bf4f2d5530`).then(res => res.data);
        yield put({type:types.RECIEVED_POPULAR_MOVIES , payload : movies})
    }catch(e){
        yield put({type: types.FAILED_POPULAR_MOVIES , errors: e})
    }
}

function* getMovieById({id}){
    try{
        const movies = yield axios.get(`https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=b6c1b5a41f7ab1a8a29ad5bf4f2d5530`).then(res => res.data);
        yield put({type:types.RECIEVED_GET_MOVIE , payload : movies})
    }catch(e){
        yield put({type: types.FAILED_GET_MOVIE , errors: e})
    }
}


export function* movieSagas(){
    yield all([
        yield takeLatest(types.GET_POPULAR_MOVIES, getPopularMovies),
        yield takeLatest(types.GET_MOVIE, getMovieById),
    ])
}

