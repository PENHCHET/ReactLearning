import { cretaeStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';
import { createStore } from 'redux';
import usersReducer from './reducers/users';

export default createStore(
    usersReducer,
    applyMiddleware(
        logger,
        promise()
    )
)