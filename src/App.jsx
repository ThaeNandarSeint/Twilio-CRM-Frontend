import { ToastContainer } from 'react-toastify';
import {
  AccountDetailPage,
  CreateAccountPage,
  EditAccountPage,
  ErrorBoundary,
} from './pages';
import { QueryClientProvider } from 'react-query';
import { ThemeProvider } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/layouts';
import { queryClient } from './lib';
import { theme } from './assets/theme';

function App() {
  return (
    <ErrorBoundary>
      <ToastContainer />
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/:id" element={<AccountDetailPage />} />
              <Route path="" element={<CreateAccountPage />} />
              <Route path="/:id/edit" element={<EditAccountPage />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
