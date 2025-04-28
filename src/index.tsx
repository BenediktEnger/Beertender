import App from './App';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './shared/contexts/ThemeContext';
import StyledSnackbarProvider from './shared/contexts/StyledSnackbarContext';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <BrowserRouter>
    <ThemeProvider>
      <StyledSnackbarProvider>
        <App />
      </StyledSnackbarProvider>
    </ThemeProvider>
  </BrowserRouter>,
);
