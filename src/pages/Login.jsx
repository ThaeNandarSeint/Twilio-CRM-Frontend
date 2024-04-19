import { Box, Typography } from '@mui/material';
import { colors } from '../assets/theme';
import { LoginForm } from '../components/ui';
import Login_Bg from '../assets/images/login_bg.jpg';

export const LoginPage = () => {
  return (
    <Box sx={{ position: 'relative' }}>
      <img className="login_bg" src={Login_Bg} alt="Login Background" />
      <Box
        className="login_form"
        sx={{ bgcolor: colors.white[100], p: 3, borderRadius: '1rem', gap: 2 }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          {/* <img
            className="login_logo"
            src={Parami_Login_Logo}
            alt="Parami Login Logo"
          /> */}
        </Box>
        <Typography
          sx={{
            fontSize: '20px',
            fontWeight: 'bold',
            color: colors.black[100],
          }}
          textAlign="center"
        >
          Login with your Email and Password
        </Typography>
        <LoginForm />
      </Box>
    </Box>
  );
};
