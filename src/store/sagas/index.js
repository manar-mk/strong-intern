import {all} from 'redux-saga/effects';
import { castSagas } from './castSagas';
import { movieSagas } from './movieSaga';
import { serieSagas } from './serieSagas';
import { videoSagas } from './videoSagas';



export default function* rootSaga(){
    yield all([
        movieSagas(),
        castSagas(),
        videoSagas(),
        serieSagas()
    ])
}