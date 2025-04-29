import React, { useCallback, useEffect, useMemo } from 'react';
import { THEMES } from '../../constants';
import { createTheme, ThemeOptions, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';

// Define your theme options for each theme name
const themeOptions: Record<string, ThemeOptions> = {
  DEFAULT: {
    palette: {
      primary: { main: '#1976d2', // Your primary color
      },
      // Add other palette colors as needed
    },
  },
  // Add other themes if needed
};

const initialState = {
  themeName: THEMES.DEFAULT,
  setTheme: (themeName: string) => {},
};
const ThemeContext = React.createContext(initialState);

type ThemeProviderProps = {
  children: React.ReactNode
}

function ThemeProvider({ children }: ThemeProviderProps) {
  const [themeName, _setTheme] = React.useState<string>(initialState.themeName);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      _setTheme(JSON.parse(storedTheme));
    }
  }, []);

  const setTheme = useCallback((newTheme: string) => {
    localStorage.setItem('theme', JSON.stringify(newTheme));
    _setTheme(newTheme);
  }, []);

  const contextValue = useMemo(() => ({
    themeName,
    setTheme,
  }), [themeName, setTheme]);

  // Create the actual MUI theme based on the selected theme name
  const muiTheme = useMemo(() => createTheme(themeOptions[themeName] || themeOptions[THEMES.DEFAULT]),
    [themeName],
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      <MuiThemeProvider theme={muiTheme}>
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
}

export { ThemeProvider, ThemeContext };