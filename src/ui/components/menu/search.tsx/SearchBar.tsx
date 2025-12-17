import { Autocomplete, TextField } from '@mui/material';
import React from 'react';
import { useData } from '../../../context/DataContext';
import { useFilters } from '../../../context/FilterContext';
import { applyFilters } from '../../../utils/filters';

const searchBarStyle = {
  position: 'absolute',
  width: '30%',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  borderRadius: '5%',
};

const searchBarTextStyle = {
  '& .MuiOutlinedInput-input': {
    color: 'text.primary',
  },
  '& .MuiOutlinedInput-input::placeholder': {
    color: 'text.primary',
    opacity: 1,
  },
};

const SearchBar: React.FC = () => {
  const { items } = useData();
  const { filters, setFilters } = useFilters();

  const allDisplayNames = items.map((item) => {
    return item.displayName;
  });
  const filteredItems = applyFilters(items, filters);
  const filteredDisplayNames = filteredItems.map((item) => {
    return item.displayName;
  });

  return (
    <Autocomplete
      disablePortal
      options={allDisplayNames}
      getOptionDisabled={(option) => !filteredDisplayNames.includes(option)}
      sx={searchBarStyle}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder="Item Search"
          sx={searchBarTextStyle}
        />
      )}
      onChange={(_, searchItem) => {
        setFilters({ ...filters, searchItem });
      }}
      value={filters.searchItem}
    />
  );
};

export default SearchBar;
