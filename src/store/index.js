import {applyMiddleware , createStore} from 'redux';
import {createLogger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import rootSaga from './sagas';
import {composeWithDevTools} from 'redux-devtools-extension';
const logger = createLogger({
    collapsed : true
})

export default function configureStore(initialState){
    const sagaMiddleware = createSagaMiddleware();

    const getMiddleware = () => {
        if(process.env.NODE_ENV === 'development'){
            return composeWithDevTools(applyMiddleware(sagaMiddleware))
        }
        return applyMiddleware(sagaMiddleware)
    }

    const store = createStore(
        reducers , 
        getMiddleware(),
        initialState,  
    )
    sagaMiddleware.run(rootSaga)
    return store;
}