import {all , put , takeLatest} from 'redux-saga/effects';
import * as types from '../actions/types';
import axios from 'axios'

function* getCastById({id}){
    try{
        const cast = yield axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?language=en-US&api_key=b6c1b5a41f7ab1a8a29ad5bf4f2d5530`).then(res => res.data);
        yield put({type:types.RECIEVED_GET_CAST , payload : cast})
    }catch(e){
        yield put({type: types.FAILED_GET_CAST , errors: e})
    }
}

function* getCastSeriesById({id}){
    try{
        const cast = yield axios.get(`https://api.themoviedb.org/3/tv/${id}/credits?language=en-US&api_key=b6c1b5a41f7ab1a8a29ad5bf4f2d5530`).then(res => res.data);
        yield put({type:types.RECIEVED_GET_SERIES_CAST, payload : cast})
    }catch(e){
        yield put({type: types.FAILED_GET_SERIES_CAST, errors: e})
    }
}

export function* castSagas(){
    yield all([
        yield takeLatest(types.GET_SERIES_CAST, getCastSeriesById),
        yield takeLatest(types.GET_CAST, getCastById),
    ])
}