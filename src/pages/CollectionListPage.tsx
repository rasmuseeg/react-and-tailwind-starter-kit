import React, { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { Route, Switch, useHistory, useLocation, useRouteMatch } from "react-router";
import DefaultButton from "../components/UI/Buttons/DefaultButton";
import StyledInput from "../components/UI/Forms/StyledInput";
import Modal from "../components/UI/Overlays/Modals/Modal";
import DictionaryItem from "../lib/locale/DictionaryItem";
import { useThunkDispatch } from "../redux/hooks";
import { CollectionListItem } from "../redux/reducers/collections";
import { addCollectionAsync, removeCollectionAsync } from "../redux/reducers/collections/actions";
import CollectionPage from "./CollectionPage";

type CollectionFormData = {
  id: string;
  name: string;
}

const CollectionForm: React.FC<{ onSubmit(data: CollectionFormData): void; }> = ({ onSubmit }) =>
{
  const { register, handleSubmit } = useForm<CollectionFormData>();

  const handleCreate = (data: CollectionFormData) =>
  {
    debugger;
    onSubmit(data);
  }

  return (
    <Modal>
      <form onSubmit={handleSubmit(handleCreate)}>
        <div className="flex flex-row">
          <StyledInput autoFocus={true} type="text" name="name" placeholder="New collection"
          className={'rounded-r-none'}
           ref={register({ required: true, minLength: 2 })} />
          <DefaultButton type="submit" className={'rounded-l-none'}><DictionaryItem alias="Create" /></DefaultButton>
        </div>
      </form>
    </Modal>
  );
};

const CollectionCard = ({ onClick, children }) => (
  <div onClick={onClick} className="rounded-lg shadow-lg overflow-hidden">
    {children}
  </div>
);

const CollectionListPage: React.FC = () =>
{
  const match = useRouteMatch();
  const history = useHistory();
  const [ createIntent, setCreateIntent ] = useState(false);

  const collections = useSelector(state => state.collections.collections);

  const dispatch = useThunkDispatch();

  useEffect(() =>
  {
    const handleKeyUp = (e: KeyboardEvent) =>
    {
      if (e.key === 'Escape')
      {
        setCreateIntent(false);
      }
    };

    window.addEventListener("keyup", handleKeyUp)

    return () =>
    {
      window.removeEventListener("keyup", handleKeyUp);
    }
  }, [ setCreateIntent ]);

  const handleAddCollection = useCallback((data: CollectionFormData) =>
  {
    const action = addCollectionAsync({
      name: data.name
    });

    dispatch(action);
    setCreateIntent(false);
  }, [ dispatch ]);

  const handleDeleteCollection = useCallback((item) =>
  {
    dispatch(removeCollectionAsync(item));
  }, [ dispatch ]);

  const handleCreate = () =>
  {
    setCreateIntent(true);
  };

  const handleOpenCollection = (item: CollectionListItem) => () =>
  {
    history.push(`/collections/${item.id}`)
  };

  return (
    <div>
      <Switch>
        <Route path={`${match.path}/:collectionId`}>
          <CollectionPage />
        </Route>
        <Route path={match.path}>
          <div className="grid gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-auto">
            {collections.map((item, key) => (
              <CollectionCard key={key} onClick={handleOpenCollection(item)}>
                <div className="flex-shrink-0">
                  {item.cover ?
                    <img className="h-48 w-full object-cover" src={item.cover} alt="" />
                    : <div className="h-48 bg-gray-500"></div>}
                </div>
                <div>
                  <span>{item.name}</span>
                </div>
                <div></div>
              </CollectionCard>
            ))}
            <div className="group border-gray-300 border-dashed cursor-pointer hover:bg-white hover:border-none hover:shadow-lg" onClick={handleCreate}>
              <p>New collection</p>
              <p>Create new collection</p>
            </div>
          </div>
          {createIntent ? <CollectionForm onSubmit={handleAddCollection} /> : null}
        </Route>
      </Switch>
    </div>
  );
};

export default CollectionListPage;