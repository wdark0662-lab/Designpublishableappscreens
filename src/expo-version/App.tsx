/**
 * VERSÃO EXPO DO APP PRINCIPAL
 * 
 * Este é um exemplo de como estruturar o App.tsx para Expo.
 * Para usar:
 * 1. npx create-expo-app guia-de-beneficios
 * 2. Copie este arquivo para App.tsx
 * 3. Instale as dependências (veja package.json de exemplo)
 */

import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Importar screens convertidos para React Native
import WelcomeScreen from './src/screens/WelcomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import MainApp from './src/screens/MainApp';

type AuthScreen = 'welcome' | 'login' | 'signup' | 'app';

export default function App() {
  const systemColorScheme = useColorScheme();
  const [currentScreen, setCurrentScreen] = useState<AuthScreen>('welcome');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [darkMode, setDarkMode] = useState(systemColorScheme === 'dark');
  const [isLoading, setIsLoading] = useState(true);

  // Carregar preferências ao iniciar
  useEffect(() => {
    loadPreferences();
  }, []);

  const loadPreferences = async () => {
    try {
      const savedDarkMode = await AsyncStorage.getItem('darkMode');
      const authToken = await AsyncStorage.getItem('authToken');
      
      if (savedDarkMode !== null) {
        setDarkMode(JSON.parse(savedDarkMode));
      }
      
      if (authToken) {
        setIsAuthenticated(true);
        setCurrentScreen('app');
      }
    } catch (error) {
      console.error('Erro ao carregar preferências:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const saveDarkMode = async (isDark: boolean) => {
    try {
      await AsyncStorage.setItem('darkMode', JSON.stringify(isDark));
      setDarkMode(isDark);
    } catch (error) {
      console.error('Erro ao salvar modo escuro:', error);
    }
  };

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
    try {
      const token = 'mock-token-' + Date.now();
      await AsyncStorage.setItem('authToken', token);
      await AsyncStorage.setItem('userEmail', email);
      setIsAuthenticated(true);
      setCurrentScreen('app');
    } catch (error) {
      console.error('Erro ao fazer login:', error);
    }
  };

  const handleSignUp = async (name: string, email: string, password: string) => {
    try {
      const token = 'mock-token-' + Date.now();
      await AsyncStorage.setItem('authToken', token);
      await AsyncStorage.setItem('userEmail', email);
      await AsyncStorage.setItem('userName', name);
      setIsAuthenticated(true);
      setCurrentScreen('app');
    } catch (error) {
      console.error('Erro ao criar conta:', error);
    }
  };

  const handleLogout = async () => {
    try {
      await AsyncStorage.multiRemove(['authToken', 'userEmail', 'userName']);
      setIsAuthenticated(false);
      setCurrentScreen('welcome');
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'welcome':
        return (
          <WelcomeScreen
            colors={colors}
            onContinue={async () => {
              const token = await AsyncStorage.getItem('authToken');
              if (token) {
                setIsAuthenticated(true);
                setCurrentScreen('app');
              } else {
                setCurrentScreen('login');
              }
            }}
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
            onToggleDarkMode={() => saveDarkMode(!darkMode)}
            onLogout={handleLogout}
          />
        );
      default:
        return null;
    }
  };

  if (isLoading) {
    // Você pode adicionar uma tela de splash aqui
    return null;
  }

  return (
    <>
      <StatusBar style={darkMode ? 'light' : 'dark'} />
      {renderScreen()}
    </>
  );
}
