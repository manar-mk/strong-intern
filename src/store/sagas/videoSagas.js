import {all , put , takeLatest} from 'redux-saga/effects';
import * as types from '../actions/types';
import axios from 'axios'

function* getVideoById({id}){
    try{
        const video = yield axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US&api_key=b6c1b5a41f7ab1a8a29ad5bf4f2d5530`).then(res => res.data);
        yield put({type:types.RECIEVED_GET_VIDEO , payload : video})
    }catch(e){
        yield put({type: types.FAILED_GET_VIDEO, errors: e})
    }
}

function* getVideoSeriesById({id}){
    try{
        const video = yield axios.get(`https://api.themoviedb.org/3/tv/${id}/videos?language=en-US&api_key=b6c1b5a41f7ab1a8a29ad5bf4f2d5530`).then(res => res.data);
        yield put({type:types.RECIEVED_GET_SERIES_VIDEO, payload : video})
    }catch(e){
        yield put({type: types.FAILED_GET_SERIES_VIDEO, errors: e})
    }
}


export function* videoSagas(){
    yield all([
        yield takeLatest(types.GET_VIDEO, getVideoById),
        yield takeLatest(types.GET_SERIES_VIDEO, getVideoSeriesById)
    ])
}