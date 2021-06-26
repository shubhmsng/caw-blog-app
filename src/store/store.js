import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from "./reducers";

let middlewares;

if (process.env.NODE_ENV === `development`) {
    middlewares = applyMiddleware(thunk, logger);
} else {
    middlewares = applyMiddleware(thunk);
}

const store = createStore(reducers, middlewares);

export default store;
