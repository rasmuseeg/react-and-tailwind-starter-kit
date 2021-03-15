
/**
 * Update collection list
 */
export const UPDATE_COLLECTIONS = "UPDATE_COLLECTIONS";

/**
 * Add new collection to list
 */
export const ADD_NEW_COLLECTION = "ADD_NEW_COLLECTION";
/**
 * Remove single collection
 */
export const DELETE_COLLECTION = "DELETE_COLLECTION";

interface BaseItemType {
  id: string;
  type: string;
}

export type ItemTypes = BaseItemType;

export type CollectionListItem = {
  id: string;
  name: string;
  cover: string;
  items?: ItemTypes[];
}

export type UpdateCollectionsAction = {
  readonly type: typeof UPDATE_COLLECTIONS;
  readonly payload: CollectionListItem[];
}

export type AddNewCollectionAction = {
  readonly type: typeof ADD_NEW_COLLECTION;
  readonly payload: CollectionListItem;
}

export type DeleteCollectionAction = {
  readonly type: typeof DELETE_COLLECTION;
  readonly payload: {
    id: string;
  };
}

export type CollectionActionTypes =
  UpdateCollectionsAction |
  AddNewCollectionAction |
  DeleteCollectionAction;