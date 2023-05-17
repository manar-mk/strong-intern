import * as types from './types'

export function getSeriesById({id}){
    return {type: types.GET_SERIES, id}
}