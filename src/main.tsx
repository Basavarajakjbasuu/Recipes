import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

import './index.css';

import ThemeProvider from './context/themeProvider.tsx';

import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { SnackbarProvider } from './context/SnackbarProvider.tsx';

const queryClient = new QueryClient();


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <SnackbarProvider>
          <App />
        </SnackbarProvider>
      </ThemeProvider>
    </QueryClientProvider> 
  </React.StrictMode>,
)
