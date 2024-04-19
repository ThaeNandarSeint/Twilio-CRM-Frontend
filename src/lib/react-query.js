import { QueryClient } from 'react-query';
import { toast } from 'react-toastify';
import { isAxiosError } from 'axios';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      useErrorBoundary: (error) => {
        if (isAxiosError(error)) {
          return error.response.status === 401 || error.response.status === 503;
        }

        return false;
      },
      refetchOnWindowFocus: false,
    },
    mutations: {
      useErrorBoundary: (error) => {
        if (isAxiosError(error)) {
          return error.status === 401 || error.status === 503;
        }

        return false;
      },
      onError: (error) => {
        if (isAxiosError(error)) {
          const { response } = error;

          toast.error(response?.data?.message ?? 'Unknown Error');
        } else {
          toast.error('Something went wrong.');
        }
      },
    },
  },
});
