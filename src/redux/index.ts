
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { ActionTypes, RootState } from "./reducers";

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    ActionTypes
>

export type AppThunkDispatch<T = void> = ThunkDispatch<RootState, T, ActionTypes>;

declare module 'react-redux' {
  interface DefaultRootState extends RootState { }
}