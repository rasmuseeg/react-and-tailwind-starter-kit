import createRootReducer, { ActionTypes, RootState } from "./reducers";
import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";
import isDevelopment from "../lib/env/isDevelopment";

export const history = createBrowserHistory();

export default function configureStore(preloadedState?)
{
    const middleware = [
        thunk,
        routerMiddleware(history)
    ];

    const composeEnhancers = isDevelopment() && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        : compose;

    const enhancer = composeEnhancers(
        applyMiddleware(...middleware)
    );
    const store = createStore<RootState, ActionTypes, unknown, unknown>(
        createRootReducer(history),
        preloadedState,
        enhancer
    );

    return store;
}