import React, { useCallback, useEffect, useMemo } from 'react';
import { THEMES } from '../../constants';


const initialState = {
  theme: THEMES.DEFAULT,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setTheme: (theme: string) => {},
};
const ThemeContext = React.createContext(initialState);

type ThemeProviderProps = {
  children: React.ReactNode
}

function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, _setTheme] = React.useState<string>(initialState.theme);

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
    theme,
    setTheme,
  }), [theme, setTheme]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeProvider, ThemeContext };
