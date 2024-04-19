import { Cancel, Search } from '@mui/icons-material';
import { Box } from '@mui/material';
import { useState } from 'react';
import { colors } from '../../assets/theme';

export const SearchBox = ({ setSearch, placeholder }) => {
  const [value, setValue] = useState('');

  const handleCancel = () => {
    setValue('');
    setSearch('');
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      setSearch(event.target.value);
    }
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Box sx={{ position: 'relative' }}>
        <input
          className="search_input"
          spellCheck="false"
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyUp={(e) => handleKeyPress(e)}
        />
        {value !== '' && (
          <div className="cancel_btn" onClick={handleCancel}>
            <Cancel sx={{ color: colors.grey[800], fontSize: '22px' }} />
          </div>
        )}
      </Box>
      <Box
        sx={{
          bgcolor: colors.paleBlue[800],
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '3rem',
          height: '3rem',
          cursor: 'pointer',
          borderTopRightRadius: '.5rem',
          borderBottomRightRadius: '.5rem',
        }}
        onClick={() => setSearch(value)}
      >
        <Search sx={{ fontSize: '1.5rem', color: colors.white[100] }} />
      </Box>
    </Box>
  );
};
