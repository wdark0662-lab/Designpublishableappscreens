import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  colors: {
    background: string;
    cardBackground: string;
    text: string;
    textSecondary: string;
    primary: string;
    primaryGradient: string;
    border: string;
    shadow: string;
    inputBackground: string;
  };
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('healix-theme');
    return (saved as Theme) || 'light';
  });

  useEffect(() => {
    localStorage.setItem('healix-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const colors = theme === 'light' ? {
    background: '#f5f5f5',
    cardBackground: '#ffffff',
    text: '#1a1a1a',
    textSecondary: '#666666',
    primary: '#00BFA5',
    primaryGradient: 'linear-gradient(135deg, #00BFA5 0%, #00897B 100%)',
    border: 'rgba(0, 0, 0, 0.08)',
    shadow: 'rgba(0, 0, 0, 0.08)',
    inputBackground: '#fff',
    teal: '#00BFA5',
    tealDark: '#00897B',
  } : {
    background: '#121212',
    cardBackground: '#1e1e1e',
    text: '#f5f5f5',
    textSecondary: '#999999',
    primary: '#00BFA5',
    primaryGradient: 'linear-gradient(135deg, #00BFA5 0%, #00897B 100%)',
    border: 'rgba(255, 255, 255, 0.1)',
    shadow: 'rgba(0, 0, 0, 0.3)',
    inputBackground: '#2a2a2a',
    teal: '#00BFA5',
    tealDark: '#00897B',
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, colors }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
