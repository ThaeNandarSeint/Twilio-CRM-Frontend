import { isAxiosError } from 'axios';

export const GlobalFallbackRender = ({ error }) => {
  let message = 'Service unavailable';
  if (isAxiosError(error)) {
    if (error?.code === 'ERR_NETWORK') {
      message =
        'Service unavailable. No connectivity or the server is in maintenance. Please wait for a moment.';
    }

    if (error.response?.status === 503) {
      message = 'Service unavailable. Server is in maintenance';
    }

    if (error.response?.status === 401) {
      message = 'You are not authorized';
    }
  }
  return (
    <div className="bg-white flex items-center justify-center h-screen">
      <p className="text-red-500 text-xl font-semibold">{message}</p>
    </div>
  );
};
