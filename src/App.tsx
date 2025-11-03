import { useState, useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import LandingPage from './components/LandingPage';
import DashboardScreen from './components/DashboardScreen';
import AppointmentScreen from './components/AppointmentScreen';
import NewAppointmentScreen from './components/NewAppointmentScreen';
import HealthDiagnosisScreen from './components/HealthDiagnosisScreen';
import DoctorsScreen from './components/DoctorsScreen';
import TelemedicineScreen from './components/TelemedicineScreen';
import ProfileScreen from './components/ProfileScreen';
import MyAppointmentsScreen from './components/MyAppointmentsScreen';
import HealthRecordsScreen from './components/HealthRecordsScreen';
import FavoriteDoctorsScreen from './components/FavoriteDoctorsScreen';
import NotificationsScreen from './components/NotificationsScreen';
import SettingsScreen from './components/SettingsScreen';

export type Screen = 'landing' | 'dashboard' | 'appointments' | 'new-appointment' | 'health-diagnosis' | 'doctors' | 'telemedicine' | 'profile' | 'my-appointments' | 'health-records' | 'favorite-doctors' | 'notifications' | 'settings';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('dashboard');
  const [userName, setUserName] = useState('John');

  useEffect(() => {
    // Set viewport height for mobile
    const setVH = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    
    setVH();
    window.addEventListener('resize', setVH);
    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', setVH);
    }
    
    return () => {
      window.removeEventListener('resize', setVH);
      if (window.visualViewport) {
        window.visualViewport.removeEventListener('resize', setVH);
      }
    };
  }, []);

  const handleGetStarted = (name: string) => {
    setUserName(name);
    setCurrentScreen('dashboard');
  };

  const handleNavigate = (screen: Screen) => {
    setCurrentScreen(screen);
  };

  const handleLogout = () => {
    // Clear user data
    setUserName('');
    // Navigate to landing page
    setCurrentScreen('landing');
    // Optional: Clear any stored data from localStorage
    localStorage.removeItem('healix-user-data');
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'landing':
        return <LandingPage onNavigate={handleNavigate} onGetStarted={handleGetStarted} />;
      case 'dashboard':
        return <DashboardScreen userName={userName} onNavigate={handleNavigate} />;
      case 'appointments':
        return <AppointmentScreen onNavigate={handleNavigate} />;
      case 'new-appointment':
        return <NewAppointmentScreen onNavigate={handleNavigate} />;
      case 'health-diagnosis':
        return <HealthDiagnosisScreen userName={userName} onNavigate={handleNavigate} />;
      case 'doctors':
        return <DoctorsScreen onNavigate={handleNavigate} />;
      case 'telemedicine':
        return <TelemedicineScreen onNavigate={handleNavigate} />;
      case 'profile':
        return <ProfileScreen onNavigate={handleNavigate} />;
      case 'my-appointments':
        return <MyAppointmentsScreen onNavigate={handleNavigate} />;
      case 'health-records':
        return <HealthRecordsScreen onNavigate={handleNavigate} />;
      case 'favorite-doctors':
        return <FavoriteDoctorsScreen onNavigate={handleNavigate} />;
      case 'notifications':
        return <NotificationsScreen onNavigate={handleNavigate} />;
      case 'settings':
        return <SettingsScreen onNavigate={handleNavigate} onLogout={handleLogout} />;
      default:
        return <DashboardScreen userName={userName} onNavigate={handleNavigate} />;
    }
  };

  return (
    <ThemeProvider>
      <div
        style={{
          height: '100%',
          width: '100%',
          overflow: 'hidden',
        }}
      >
        {renderScreen()}
      </div>
    </ThemeProvider>
  );
}
