import * as types from './types';

export function getCastById({id}){
    return {type: types.GET_CAST, id}
}

export function getCastSeriesById({id}){
    return {type: types.GET_SERIES_CAST, id}
}
