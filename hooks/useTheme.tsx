import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useColorScheme } from 'react-native';

// Define theme colors
const lightTheme = {
  primary: '#0A84FF',
  secondary: '#30D158',
  accent: '#FF9500',
  background: '#F2F2F7',
  cardBackground: '#FFFFFF',
  text: '#1C1C1E',
  textSecondary: '#8E8E93',
  border: '#E0E0E0',
  error: '#FF375F',
  success: '#30D158',
  warning: '#FF9500',
  white: '#FFFFFF',
  black: '#000000',
};

const darkTheme = {
  primary: '#0A84FF',
  secondary: '#30D158',
  accent: '#FF9500',
  background: '#1C1C1E',
  cardBackground: '#2C2C2E',
  text: '#FFFFFF',
  textSecondary: '#AEAEB2',
  border: '#38383A',
  error: '#FF375F',
  success: '#30D158',
  warning: '#FF9500',
  white: '#FFFFFF',
  black: '#000000',
};

// Create theme context
type ThemeContextType = {
  isDark: boolean;
  colors: typeof lightTheme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Theme provider component
export function ThemeProvider({ children }: { children: ReactNode }) {
  const colorScheme = useColorScheme();
  const [isDark, setIsDark] = useState(colorScheme === 'dark');
  
  // Update theme when system theme changes
  useEffect(() => {
    setIsDark(colorScheme === 'dark');
  }, [colorScheme]);
  
  const colors = isDark ? darkTheme : lightTheme;
  
  const toggleTheme = () => setIsDark(!isDark);
  
  return (
    <ThemeContext.Provider value={{ isDark, colors, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook to use the theme
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    // Provide default theme if used outside provider
    return {
      isDark: false,
      colors: lightTheme,
      toggleTheme: () => console.warn('ThemeProvider not found'),
    };
  }
  return context;
}