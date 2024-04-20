import { useEffect, useState } from 'react';
import { useDisclosure } from './useDisclosure';

export const useMultipleSelectWithCheckbox = ({
  data,
  setFieldValue,
  field,
}) => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const [items, setItems] = useState([]);

  useEffect(() => {
    if (data) {
      setItems(data?.payload);
    }
  }, [data]);

  // SEARCH
  const [search, setSearch] = useState('');

  const [searchedItems, setSearchedItems] = useState([]);

  const handleSearch = (value) => {
    setSearch(value);
    const searchedValue = items.filter((item) => {
      return Object.values(item)
        .join(' ')
        .toLowerCase()
        .includes(value.toLowerCase());
    });
    setSearchedItems(searchedValue);
  };

  // SEARCH CANCEL
  const handleSearchCancel = () => {
    setSearch('');
  };

  // HANDLE CHECKBOX
  const handleChange = ({ name, checked }) => {
    if (name === 'clearAll') {
      let tempUser = items.map((item) => {
        return { ...item, isChecked: false };
      });
      setItems(tempUser);
    } else {
      let tempUser = items.map((item) =>
        item.name === name ? { ...item, isChecked: checked } : item
      );
      setItems(tempUser);
      setSearchedItems(tempUser);
    }
  };

  // FILTER BOX OK BUTTON
  const [filteredItems, setFilteredItems] = useState([]);
  const handleFilter = () => {
    const filteredValue = items
      .filter((department) => department.isChecked === true)
      .map((item) => ({
        id: item._id,
        name: item.name,
      }));
    setFilteredItems(filteredValue);
    setFieldValue([field], filteredValue);
    onClose();
  };

  // DELETE CHIP
  const handleDelete = ({ id, name }) => {
    const filteredValue = filteredItems.filter(
      (department) => department.id !== id
    );
    setFilteredItems(filteredValue);
    handleChange({ name, checked: false, items });
  };

  // (CLEAR ALL) CHIP
  const handleClearAll = () => {
    setFilteredItems([]);
    handleChange({ name: 'clearAll' });
  };

  return {
    isOpen,
    onOpen,
    onClose,
    items,
    filteredItems,
    setFilteredItems,
    search,
    searchedItems,
    handleSearch,
    handleSearchCancel,
    handleFilter,
    handleClearAll,
    handleChange,
    handleDelete,
  };
};
