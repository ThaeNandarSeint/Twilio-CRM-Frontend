import { Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks';
import { useEffect } from 'react';
import { Box } from '@mui/material';
import { colors } from '../../assets/theme';
import { Topbar } from './Topbar';
import { Sidebar } from './Sidebar';

export const Layout = () => {
  const { user } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    // if (user?.role === ROLES.SUPER_ADMIN) {
    //   return navigate('/users');
    // } else {

    // }
    return navigate('/');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box>
      <Topbar />
      <div className="flex">
        <Sidebar />
        <Outlet />
      </div>
    </Box>
  );
};
