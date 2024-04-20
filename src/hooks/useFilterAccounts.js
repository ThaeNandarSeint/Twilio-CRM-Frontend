import { useState } from 'react';

export const useCustomeFilter = ({ initialValue }) => {
  const [filterItem, setfilterItem] = useState(initialValue);

  const handleChangefilterItem = (value) => {
    setfilterItem(value);
  };

  return { filterItem, handleChangefilterItem };
};
