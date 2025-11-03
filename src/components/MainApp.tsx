import { useState } from 'react';
import { Home, Book, ShieldCheck, Calculator, HelpCircle, User, Settings, LogOut, Sun, Moon } from 'lucide-react';
import HomeScreen from './HomeScreen';
import GuideScreen from './GuideScreen';
import EligibilityScreen from './EligibilityScreen';
import CalculatorScreen from './CalculatorScreen';
import FAQScreen from './FAQScreen';
import ProfileScreen from './ProfileScreen';
import SettingsScreen from './SettingsScreen';
import PWAPrompt from './PWAPrompt';
import NetworkStatus from './NetworkStatus';

type Screen = 'home' | 'guide' | 'eligibility' | 'calculator' | 'faq' | 'profile' | 'settings';

interface MainAppProps {
  colors: any;
  darkMode: boolean;
  onToggleDarkMode: () => void;
  onLogout: () => void;
}

export default function MainApp({ colors, darkMode, onToggleDarkMode, onLogout }: MainAppProps) {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');

  const navigation = [
    { id: 'home' as Screen, label: 'Início', icon: Home },
    { id: 'guide' as Screen, label: 'Guia', icon: Book },
    { id: 'eligibility' as Screen, label: 'Verificar', icon: ShieldCheck },
    { id: 'calculator' as Screen, label: 'Calcular', icon: Calculator },
    { id: 'faq' as Screen, label: 'FAQ', icon: HelpCircle },
  ];

  const renderScreen = () => {
    const screenProps = { colors };
    switch (currentScreen) {
      case 'home':
        return <HomeScreen {...screenProps} onNavigate={(screen) => setCurrentScreen(screen as Screen)} />;
      case 'guide':
        return <GuideScreen {...screenProps} />;
      case 'eligibility':
        return <EligibilityScreen {...screenProps} />;
      case 'calculator':
        return <CalculatorScreen {...screenProps} />;
      case 'faq':
        return <FAQScreen {...screenProps} />;
      case 'profile':
        return <ProfileScreen {...screenProps} />;
      case 'settings':
        return <SettingsScreen {...screenProps} darkMode={darkMode} onToggleDarkMode={onToggleDarkMode} />;
      default:
        return <HomeScreen {...screenProps} onNavigate={(screen) => setCurrentScreen(screen as Screen)} />;
    }
  };

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column' as const,
      height: '100%',
      backgroundColor: colors.background,
      touchAction: 'pan-y',
      position: 'relative' as const,
    },
    topBar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '56px',
      padding: '0 16px',
      paddingTop: 'env(safe-area-inset-top)',
      backgroundColor: colors.surface,
      borderBottom: `1px solid ${colors.border}`,
      position: 'sticky' as const,
      top: 0,
      left: 0,
      right: 0,
      zIndex: 10,
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
    },
    topBarTitle: {
      fontSize: '18px',
      fontWeight: '500' as const,
      color: colors.text,
    },
    topBarActions: {
      display: 'flex',
      gap: '4px',
    },
    iconButton: {
      width: '44px',
      height: '44px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: colors.textSecondary,
      borderRadius: '8px',
      touchAction: 'manipulation' as const,
      WebkitTapHighlightColor: 'transparent',
      transition: 'background-color 0.15s ease',
    },
    content: {
      flex: 1,
      overflowY: 'auto' as const,
      overflowX: 'hidden' as const,
      WebkitOverflowScrolling: 'touch' as const,
      position: 'relative' as const,
    },
    bottomNav: {
      display: 'flex',
      height: '64px',
      backgroundColor: colors.surface,
      borderTop: `1px solid ${colors.border}`,
      position: 'sticky' as const,
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 10,
      paddingBottom: 'env(safe-area-inset-bottom)',
      boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.05)',
    },
    navButton: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column' as const,
      alignItems: 'center',
      justifyContent: 'center',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '8px',
      gap: '4px',
      touchAction: 'manipulation' as const,
      WebkitTapHighlightColor: 'transparent',
      transition: 'all 0.2s ease',
      minHeight: '44px',
    },
    navLabel: {
      fontSize: '12px',
    },
  };

  return (
    <div style={styles.container}>
      {/* Network Status Indicator */}
      <NetworkStatus colors={colors} />

      {/* Top App Bar */}
      <div style={styles.topBar}>
        <div style={styles.topBarTitle}>Guia de Benefícios</div>
        <div style={styles.topBarActions}>
          <button
            onClick={onToggleDarkMode}
            style={styles.iconButton}
            aria-label={darkMode ? 'Ativar modo claro' : 'Ativar modo escuro'}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={() => setCurrentScreen('profile')}
            style={styles.iconButton}
            aria-label="Perfil"
          >
            <User size={20} />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div style={styles.content}>
        {renderScreen()}
      </div>

      {/* Bottom Navigation */}
      <div style={styles.bottomNav}>
        {navigation.map((item) => {
          const isActive = currentScreen === item.id;
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setCurrentScreen(item.id)}
              style={{
                ...styles.navButton,
                color: isActive ? colors.primary : colors.textSecondary,
              }}
              aria-label={item.label}
              aria-current={isActive ? 'page' : undefined}
            >
              <Icon size={24} />
              <span style={styles.navLabel}>{item.label}</span>
            </button>
          );
        })}
      </div>

      {/* PWA Install Prompt (iOS) */}
      <PWAPrompt colors={colors} />
    </div>
  );
}
