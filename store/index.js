import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import * as appReducers from './root-reducer';
const appReducer = combineReducers(appReducers);
const rootReducer = (state, action) => {
    if (action.type === 'CLEAR_AUTH_STATE') {
        state = undefined
    }
    return appReducer(state, action)
}
export default createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));


