import {all , put , takeLatest} from 'redux-saga/effects';
import * as types from '../actions/types';
import axios from 'axios'


function* getSeriesById({id}){
    try{
        const series = yield axios.get(`https://api.themoviedb.org/3/tv/${id}?language=en-US&api_key=b6c1b5a41f7ab1a8a29ad5bf4f2d5530`).then(res => res.data);
        yield put({type:types.RECIEVED_GET_SERIES , payload : series})
    }catch(e){
        yield put({type: types.FAILED_GET_SERIES , errors: e})
    }
}


export function* serieSagas(){
    yield all([
        yield takeLatest(types.GET_SERIES, getSeriesById),
    ])
}

