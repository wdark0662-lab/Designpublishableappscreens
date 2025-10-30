import { useState, useEffect } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import LoginScreen from './components/LoginScreen';
import SignUpScreen from './components/SignUpScreen';
import MainApp from './components/MainApp';

type AuthScreen = 'welcome' | 'login' | 'signup' | 'app';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<AuthScreen>('welcome');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsAuthenticated(true);
      setCurrentScreen('app');
    }
  }, []);

  const colors = darkMode ? {
    background: '#030712',
    surface: '#111827',
    surfaceLight: '#1f2937',
    border: '#374151',
    text: '#f9fafb',
    textSecondary: '#9ca3af',
    primary: '#3b82f6',
    primaryDark: '#2563eb',
    green: '#22c55e',
  } : {
    background: '#f9fafb',
    surface: '#ffffff',
    surfaceLight: '#f3f4f6',
    border: '#e5e7eb',
    text: '#111827',
    textSecondary: '#6b7280',
    primary: '#3b82f6',
    primaryDark: '#2563eb',
    green: '#22c55e',
  };

  const handleLogin = async (email: string, password: string) => {
    localStorage.setItem('authToken', 'mock-token-' + Date.now());
    localStorage.setItem('userEmail', email);
    setIsAuthenticated(true);
    setCurrentScreen('app');
  };

  const handleSignUp = async (name: string, email: string, password: string) => {
    localStorage.setItem('authToken', 'mock-token-' + Date.now());
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userName', name);
    setIsAuthenticated(true);
    setCurrentScreen('app');
  };

  const handleLogout = async () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userName');
    setIsAuthenticated(false);
    setCurrentScreen('welcome');
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'welcome':
        return (
          <WelcomeScreen
            colors={colors}
            onLogin={() => setCurrentScreen('login')}
            onSignUp={() => setCurrentScreen('signup')}
          />
        );
      case 'login':
        return (
          <LoginScreen
            colors={colors}
            onLogin={handleLogin}
            onBack={() => setCurrentScreen('welcome')}
            onSignUp={() => setCurrentScreen('signup')}
          />
        );
      case 'signup':
        return (
          <SignUpScreen
            colors={colors}
            onSignUp={handleSignUp}
            onBack={() => setCurrentScreen('welcome')}
            onLogin={() => setCurrentScreen('login')}
          />
        );
      case 'app':
        return (
          <MainApp
            colors={colors}
            darkMode={darkMode}
            onToggleDarkMode={() => setDarkMode(!darkMode)}
            onLogout={handleLogout}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div style={{ 
      backgroundColor: colors.background,
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '480px',
        minHeight: '100vh',
        backgroundColor: colors.background,
        position: 'relative'
      }}>
        {renderScreen()}
      </div>
    </div>
  );
}
