import { KeyboardArrowDown } from '@mui/icons-material';
import { Box, Button, CircularProgress, Menu, MenuItem } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const ModalButton = ({ onOpen, innerText, icon, color, width, mb }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'right', mb }}>
      <Button
        sx={{ width }}
        className="no-underline"
        variant="contained"
        color={color}
        onClick={onOpen}
      >
        {innerText} {icon}
      </Button>
    </Box>
  );
};

export const FormActionButtons = ({
  loading,
  innerText,
  justifyContent,
  width,
  onClick,
}) => {
  return (
    <Box display="flex" justifyContent={justifyContent} gap={2} mt={2}>
      <Button
        sx={{ width }}
        type="reset"
        color="primary"
        variant="outlined"
        onClick={onClick}
      >
        Cancel
      </Button>
      <Button
        sx={{ width }}
        type="submit"
        color="primary"
        variant="contained"
        disabled={loading ? true : false}
      >
        {loading ? <CircularProgress size="20px" /> : innerText}
      </Button>
    </Box>
  );
};

export const TableActionButton = ({ userId }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigate = useNavigate();

  return (
    <div>
      <Button
        id="table-action-button"
        aria-controls={open ? 'table-action-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDown />}
      >
        Actions
      </Button>
      <Menu
        id="table-action-menu"
        MenuListProps={{
          'aria-labelledby': 'table-action-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem
          sx={{ fontSize: '14px' }}
          onClick={() => navigate(`/users/${userId}`)}
          disableRipple
        >
          View
        </MenuItem>
        <MenuItem sx={{ fontSize: '14px' }} disableRipple>
          Edit
        </MenuItem>
      </Menu>
    </div>
  );
};
