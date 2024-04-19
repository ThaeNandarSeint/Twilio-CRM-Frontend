import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks';
import { Box, CircularProgress } from '@mui/material';
import { colors } from '../assets/theme';

export const Protected = ({ children }) => {
  const { user, isValidatingUser } = useAuth();

  const navigate = useNavigate();

  if (isValidatingUser) {
    return (
      <Box
        bgcolor={colors.bgColor}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <CircularProgress size={48} />
      </Box>
    );
  }

  if (!user) {
    return navigate('/login');
  }
  return <>{children}</>;
};
