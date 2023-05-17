import * as types from './types';

export function getVideoById({id}){
    return {type: types.GET_VIDEO, id}
}

export function getVideoSeriesById({id}){
    return {type: types.GET_SERIES_VIDEO, id}
}