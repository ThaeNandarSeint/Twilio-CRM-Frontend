import { useNavigate } from 'react-router-dom';
import { useAuth, useDisclosure } from '../../hooks';
import { useRef } from 'react';
import { Avatar, Box, Menu, MenuItem, Typography } from '@mui/material';
import { colors } from '../../assets/theme';
import { ArrowDropDownOutlined } from '@mui/icons-material';

export const Topbar = () => {
  const navigate = useNavigate();

  const { user, logout } = useAuth();

  const anchorEl = useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <Box
      sx={{
        backgroundColor: colors.white[100],
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        m: 2,
        borderRadius: '10px',
        p: 1,
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        {/* <img
          style={{
            borderRight: `0.2px solid ${colors.grey[500]}`,
            width: '70px',
            objectFit: 'scale-down',
            marginLeft: '.5rem',
            paddingRight: '.5rem',
          }}
          src={ParamiLogo}
          alt=""
        /> */}
        <Typography
          sx={{ fontSize: '18px', fontWeight: 600, color: colors.black[200] }}
        >
          Parami Hospital
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderLeft: `0.2px solid ${colors.grey[500]}`,
            pl: '10px',
            cursor: 'pointer',
          }}
          id="basic-button"
          aria-controls={isOpen ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={isOpen ? 'true' : undefined}
          onClick={onOpen}
          ref={anchorEl}
        >
          <Avatar sx={{ bgcolor: colors.paleBlue[800] }} alt={user.name} />
          <Typography
            sx={{
              fontSize: '14px',
              fontWeight: 400,
              ml: 1,
              color: colors.black[300],
            }}
          >
            {user.email}
          </Typography>
          <ArrowDropDownOutlined />
        </Box>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl.current}
          open={isOpen}
          onClose={onClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem sx={{ fontSize: '14px' }} onClick={handleLogout}>
            Logout
          </MenuItem>
        </Menu>
      </Box>
    </Box>
  );
};
