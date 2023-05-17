import {combineReducers} from 'redux';
import moviesReducers from './movieReducers';
import castReducers from './castReducers';
import videoReducers from './videoReducers';
import seriesReducers from './seriesReducers';

export default combineReducers({
    moviesReducers,
    castReducers,
    videoReducers,
    seriesReducers,
})