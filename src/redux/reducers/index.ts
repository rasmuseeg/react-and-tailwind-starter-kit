import { combineReducers } from "redux";
import agents from "./agents";
import collections, { CollectionActionTypes } from "./collections";
import users from "./users";
import auth from "./auth/reducer";
import { connectRouter } from "connected-react-router";
import { History } from "history";
import { ActivityActionTypes } from "./activities/types";
import { AgentsActionTypes } from "./agents/types";
import { AuthActionTypes } from "./auth/types";
import { UsersActionTypes } from "./users/types";

const createRootReducer = (history: History) => combineReducers({
    agents,
    collections,
    users,
    auth,
    router: connectRouter(history)
});

export type RootState = ReturnType<ReturnType<typeof createRootReducer>>

export type ActionTypes = ActivityActionTypes | AgentsActionTypes | AuthActionTypes | CollectionActionTypes | UsersActionTypes;

declare module 'react-redux' {
  interface DefaultRootState extends RootState { }
}

export default createRootReducer;