// app/dashboard/theme.js
import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false); // Dark mode state

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode); // Toggle between light and dark mode
  };

  const theme = {
    isDarkMode,
    toggleDarkMode,
    colors: {
      background: isDarkMode ? '#333' : '#fff',
      text: isDarkMode ? '#dcdcdc' : '#333',
      primary: isDarkMode ? '#6b8f71' : '#3e7139',  
      secondary: isDarkMode ? '#dcdcdc' : '#3e7139',
    },
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};
