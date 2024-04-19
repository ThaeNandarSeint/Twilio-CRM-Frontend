import axios, { isAxiosError } from 'axios';
import { fetcher } from '../lib';
import { useNavigate } from 'react-router-dom';
import { createContext, useEffect, useReducer } from 'react';
import { useErrorBoundary } from 'react-error-boundary';
import { toast } from 'react-toastify';
import { AUTH_ACTIONS } from '../constants';

const {
  START_LOG_IN,
  END_LOG_IN,
  LOG_IN,
  LOG_OUT,
  START_VALIDATING_USER,
  END_VALIDATING_USER,
} = AUTH_ACTIONS;

function reducer(state, action) {
  switch (action.type) {
    case START_LOG_IN:
      return {
        ...state,
        isLoggingIn: true,
      };

    case END_LOG_IN:
      return {
        ...state,
        ...action.payload,
        isLoggingIn: false,
      };

    case LOG_IN:
      return {
        ...state,
        ...action.payload,
        isLoggingIn: false,
        isValidatingUser: false,
      };

    case LOG_OUT:
      return {
        ...state,
        user: null,
        isValidatingUser: false,
      };

    case START_VALIDATING_USER:
      return {
        ...state,
        isValidatingUser: true,
      };

    case END_VALIDATING_USER:
      return {
        ...state,
        isValidatingUser: false,
      };

    default:
      return state;
  }
}

const initialState = {
  user: null,
  isValidatingUser: true,
  isLoggingIn: false,
};

export const AuthContext = createContext({
  ...initialState,
  login: () => {},
  logout: () => {},
  validateUser: () => {},
});

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { showBoundary } = useErrorBoundary();

  const navigate = useNavigate();

  const validateUser = async () => {
    try {
      if (!state.user) {
        dispatch({ type: START_VALIDATING_USER });
      }

      const { data } = await fetcher.get(`/users/me`);

      if (data.payload) {
        dispatch({ type: LOG_IN, payload: { user: data?.payload } });
      }
    } catch (error) {
      if (isAxiosError(error) && error.response?.status === 401) {
        logout();
        navigate('/login');
      } else {
        showBoundary(error);
      }
    } finally {
      dispatch({ type: END_VALIDATING_USER });
    }
  };

  useEffect(() => {
    validateUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate]);

  const login = async (payload) => {
    try {
      dispatch({ type: START_LOG_IN });

      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/login`,
        payload
      );

      if (data?.payload) {
        localStorage.setItem('access-token', data?.payload?.accessToken);

        dispatch({ type: LOG_IN, payload: { user: data?.payload } });

        // if (data?.payload?.user?.role === ROLES.SUPER_ADMIN) {
        //   return navigate('/users');
        // }
        navigate('/');
      }
    } catch (error) {
      toast.error(error.response.data.message);
      dispatch({ type: END_LOG_IN, payload: null });
    }
  };

  const logout = () => {
    localStorage.removeItem('access-token');
    dispatch({ type: LOG_OUT });
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        login,
        logout,
        validateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
