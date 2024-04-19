import { ToastContainer } from 'react-toastify';
import { ErrorBoundary, LoginPage, Protected } from './pages';
import { AuthProvider } from './providers';
import { QueryClientProvider } from 'react-query';
import { ThemeProvider } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/layouts';
import { queryClient } from './lib';
import { theme } from './assets/theme';

function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <ToastContainer />
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            <Routes>
              <Route
                path="/"
                element={
                  <Protected>
                    <Layout />
                  </Protected>
                }
              >
                {/* <Route path="" element={<InboxPage />} /> */}
              </Route>
              <Route path="/login" element={<LoginPage />} />
            </Routes>
          </ThemeProvider>
        </QueryClientProvider>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;
