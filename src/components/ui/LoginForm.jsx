import { Box, Button, CircularProgress } from '@mui/material';
import { Formik } from 'formik';
import { useAuth } from '../../hooks';
import { CustomFormLabel, FormTextField, PasswordTextField } from './form';
import { loginSchema, loginValues } from '../../schemas';

export const LoginForm = () => {
  const { login, isLoggingIn } = useAuth();

  const handleLogin = async (values) => {
    await login(values);
  };

  return (
    <Formik
      initialValues={loginValues}
      validationSchema={loginSchema}
      onSubmit={handleLogin}
    >
      {(props) => (
        <form onSubmit={props.handleSubmit}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, pb: 5 }}>
            <Box>
              <CustomFormLabel label="Email" />
              <FormTextField
                type="text"
                formProps={props}
                name="email"
                placeholder="Enter Email"
              />
            </Box>
            <Box>
              <PasswordTextField
                formProps={props}
                label="Password"
                placeholder="Enter Password"
                name="password"
                width="100%"
              />
            </Box>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={isLoggingIn}
            >
              {isLoggingIn ? <CircularProgress size="20px" /> : 'Login'}
            </Button>
          </Box>
        </form>
      )}
    </Formik>
  );
};
