import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import GhostButton from "../components/UI/Buttons/GhostButton";
import PrimaryButton from "../components/UI/Buttons/PrimaryButton";
import StyledInput from "../components/UI/Forms/StyledInput";
import Modal from "../components/UI/Overlays/Modals/Modal";

type ThingFormData = {

};

const ItemForm: React.FC<{ onSubmit(data: ThingFormData): void }> = ({ onSubmit }) =>
{
  const { register, handleSubmit } = useForm<ThingFormData>();

  return (
    <Modal>
      <h2>Automatic</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <StyledInput name="url" ref={register} />
      </form>
      <GhostButton type="submit">Manual</GhostButton>
      <PrimaryButton type="submit">Create</PrimaryButton>
    </Modal>
  );
}

export const CollectionPage = () =>
{
  const { collectionId } = useParams<{ collectionId: string }>();

  const [ showCreateForm, setShowCreateForm ] = useState(false);

  const collection = useSelector(state => state.collections.collections.find(x => x.id === collectionId));

  if (!collection)
  {
    return (
      <div>
        <h1>Not found</h1>
        <div>
          <Link to="/collections">Tilbage</Link>
        </div>
      </div>
    );
  }

  const handleCreateClicked = () =>
  {
    setShowCreateForm(true);
  }

  const handleFormSubmit = (data: ThingFormData) =>
  {
    setShowCreateForm(false);
  };

  return (
    <div>
      <Link to="/collections">Tilbage</Link>
      <img src={collection.cover} />
      <h1 className="text-lg">{collection.name}</h1>
      <div>
        {collection.items?.map((item, index) => (
          <div key={index}>
            {item.type}
          </div>
        ))}
      </div>

      <div className="rounded-full bg-red h-18 w-18" onClick={handleCreateClicked}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      </div>
      {showCreateForm ? <ItemForm onSubmit={handleFormSubmit} /> : null}
    </div>
  );
}

export default CollectionPage;
