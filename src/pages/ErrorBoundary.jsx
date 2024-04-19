/* eslint-disable react/prop-types */
import { ErrorBoundary as EB } from 'react-error-boundary';
import { GlobalFallbackRender } from '../components';

export const ErrorBoundary = ({ children }) => {
  return <EB fallbackRender={GlobalFallbackRender}>{children}</EB>;
};
