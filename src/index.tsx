import App from './App';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from './shared/contexts/ThemeContext';
import { DomainServiceProvider } from './shared/contexts/ServiceContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StrictMode } from 'react';
// Import i18n configuration
import './i18n/i18n';

const container = document.getElementById('root');
const root = createRoot(container!);
const queryClient = new QueryClient();

root.render(
  <StrictMode>
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <DomainServiceProvider>
          <App />
        </DomainServiceProvider>
      </QueryClientProvider>
    </ThemeProvider>
  </StrictMode>,
);
