import produce from "immer";
import { ActivityActionTypes, UPDATE_ACTIVITIES } from "./types";

export type ActivitiesState = Readonly<{
    activities: []
}>

const initialState: ActivitiesState = {
    activities: []
};

export default (state = initialState, action: ActivityActionTypes) => produce(state, draft =>
{
    switch (action.type)
    {
        case UPDATE_ACTIVITIES:{
            draft.activities = action.payload;
        }
    }
})