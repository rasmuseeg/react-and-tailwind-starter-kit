import { AgentsActionTypes } from "./types";

export type AgentsState = Readonly<{
    agents: []
}>

const initialState: AgentsState = {
    agents: []
};

const reducer = (state = initialState, action: AgentsActionTypes) =>
{
    switch (action.type)
    {
        default:
            return state;
    }
};

export default reducer;