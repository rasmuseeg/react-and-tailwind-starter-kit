import React from "react";

type DictionaryItemProps = {
  alias: string;
}

const DictionaryItem: React.VFC<DictionaryItemProps> = ({ alias }) =>
{
  return (
    <>{alias}</>
  )
};

export default DictionaryItem;