import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from '@mui/material';
import { useRef } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useRouteError } from 'react-router-dom';
import { useDisclosure } from '../../hooks/useDisclosure';
import { colors } from '../../assets/theme';

const Topbar = ({ isOpen, onOpen, onClose }) => {
  const anchorEl = useRef();
  const { user, logout } = useAuth();
  const router = useRouteError();

  const { isOpen: open, onOpen: setOpen, onClose: setClose } = useDisclosure();

  const handleLogout = async () => {
    await logout();
    router.push('/auth/login');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        px: 2,
        bgcolor: colors.green,
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <IconButton onClick={isOpen ? onClose : onOpen}>
          <Menu fontSize="large" />
        </IconButton>
        {/* <img
          alt="logo"
          src={LogoImg}
          style={{ height: '64px', width: '64px' }}
        /> */}
      </Box>

      <Box
        sx={{ display: 'flex', gap: 1 }}
        onClick={setOpen}
        ref={anchorEl}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
      >
        <Avatar
          alt={user?.displayName || ''}
          src={user?.photoURL || ''}
          sx={{
            width: 45,
            height: 45,
            border: `1px solid ${colors.white}`,
            bgcolor: colors.green,
          }}
        />
        <Box color={colors.white}>
          <Typography fontSize={'14px'}>{user?.displayName}</Typography>
          <Typography fontSize={'12px'}>{user?.email}</Typography>
        </Box>
      </Box>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl.current}
        open={open}
        onClose={setClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </Box>
  );
};

export default Topbar;
