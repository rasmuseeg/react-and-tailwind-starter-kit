import produce from "immer";
import { useTypedSelector } from "../../hooks";
import { AuthActionTypes, UPDATE_AUTH } from "./types";

export type AuthState = Readonly<{
    loggedIn: boolean;
    session: string;
    userName: string;
}>

const initialState: AuthState = {
    loggedIn: false,
    session: "",
    userName: ""
};

const reducer = (state = initialState, action: AuthActionTypes) => produce(state, draft =>
{
    switch (action.type)
    {
        case UPDATE_AUTH: {
            draft = { ...action.payload }
        }
        default:
            return draft;
    }
});

export const isAuthenticated = () => useTypedSelector(state=> state.auth.loggedIn === true);

export default reducer;