import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

import './index.css';

import ThemeProvider from './context/themeProvider.tsx';

import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient();

import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <App />
        <ReactQueryDevtools initialIsOpen={false} />
      </ThemeProvider>
    </QueryClientProvider> 
  </React.StrictMode>,
)
