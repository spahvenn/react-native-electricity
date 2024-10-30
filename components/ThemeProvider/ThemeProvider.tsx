// ThemeProvider.tsx
import React, {createContext, ReactNode, useContext, useState} from 'react';
import {
  DefaultTheme,
  MD3DarkTheme,
  Provider as PaperProvider,
} from 'react-native-paper';

const ThemeContext = createContext({
  toggleTheme: () => {},
  isDarkMode: false,
});

export const ThemeProvider = ({children}: {children: ReactNode}) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeContext.Provider value={{toggleTheme, isDarkMode}}>
      <PaperProvider theme={isDarkMode ? MD3DarkTheme : DefaultTheme}>
        {children}
      </PaperProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
