import produce from "immer";
import { UsersActionTypes, UPDATE_USERS } from "./types";

export type UsersState = Readonly<{
    users: []
}>

const initialState: UsersState = {
    users: []
}

const reducer = (state = initialState, action: UsersActionTypes) => produce(state, draft =>
{
    switch (action.type)
    {
        case UPDATE_USERS: {
            draft.users = action.payload;
        }
    }
});

export default reducer;