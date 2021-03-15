import produce from "immer";
import { ADD_NEW_COLLECTION, CollectionActionTypes, CollectionListItem, DELETE_COLLECTION, UPDATE_COLLECTIONS } from "./types";
export type { CollectionActionTypes, CollectionListItem } from "./types";

export type CollectionState = Readonly<{
  collections: CollectionListItem[],
}>

const initialState: CollectionState = {
  collections: []
};

const reducer = (state = initialState, action: CollectionActionTypes) => produce(state, draft =>
{
  switch (action.type)
  {
    case UPDATE_COLLECTIONS: {
      draft.collections = action.payload;
      break;
    }
    case DELETE_COLLECTION: {
      draft.collections = [ ...state.collections.filter(c => c.id !== action.payload.id) ];
      break;
    }
    case ADD_NEW_COLLECTION: {
      draft.collections.push({...action.payload});
      break;
    }
  }
});

export default reducer;