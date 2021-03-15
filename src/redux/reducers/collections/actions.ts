import { AppThunk } from "../../.";
import { ADD_NEW_COLLECTION, CollectionListItem, DELETE_COLLECTION } from "./types";
import { v4 as uuidv4 } from "uuid";

export const addCollectionAsync = (data:{ name: string }): AppThunk => async (dispatch, getState) =>
{
  // TODO: POST COLLECTIOn
  const id = uuidv4();
  dispatch({
    type: ADD_NEW_COLLECTION,
    payload: {
      id: id,
      name: data.name,
      cover: "",
    }
  });
};

export const removeCollectionAsync = (item: CollectionListItem): AppThunk =>
{
  return async (dispatch) =>
  {
    // TODO: HTTP DELETE COLLECTION
    dispatch({
      type: DELETE_COLLECTION,
      payload: item
    });
  }
}