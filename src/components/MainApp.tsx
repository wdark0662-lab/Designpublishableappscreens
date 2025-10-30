import { useState } from 'react';
import { Home, Book, ShieldCheck, Calculator, HelpCircle, Sun, Moon, MoreVertical, User, Settings, LogOut } from 'lucide-react';
import HomeScreen from './HomeScreen';
import GuideScreen from './GuideScreen';
import EligibilityScreen from './EligibilityScreen';
import CalculatorScreen from './CalculatorScreen';
import FAQScreen from './FAQScreen';

type Screen = 'home' | 'guide' | 'eligibility' | 'calculator' | 'faq';

interface MainAppProps {
  colors: any;
  darkMode: boolean;
  onToggleDarkMode: () => void;
  onLogout: () => void;
}

export default function MainApp({ colors, darkMode, onToggleDarkMode, onLogout }: MainAppProps) {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');
  const [showMenu, setShowMenu] = useState(false);

  const navigation = [
    { id: 'home' as Screen, label: 'Home', icon: Home },
    { id: 'guide' as Screen, label: 'Guide', icon: Book },
    { id: 'eligibility' as Screen, label: 'Check', icon: ShieldCheck },
    { id: 'calculator' as Screen, label: 'Calculate', icon: Calculator },
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
      default:
        return <HomeScreen {...screenProps} onNavigate={(screen) => setCurrentScreen(screen as Screen)} />;
    }
  };

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column' as const,
      height: '100vh',
      backgroundColor: colors.background,
    },
    topBar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '56px',
      padding: '0 16px',
      backgroundColor: colors.surface,
      borderBottom: `1px solid ${colors.border}`,
      position: 'relative' as const,
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
    },
    menu: {
      position: 'absolute' as const,
      top: '56px',
      right: '16px',
      backgroundColor: colors.surface,
      border: `1px solid ${colors.border}`,
      borderRadius: '12px',
      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
      minWidth: '180px',
      zIndex: 1000,
    },
    menuItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '12px 16px',
      cursor: 'pointer',
      background: 'none',
      border: 'none',
      width: '100%',
      textAlign: 'left' as const,
      transition: 'background-color 0.2s',
    },
    menuText: {
      fontSize: '15px',
      color: colors.text,
    },
    menuTextDanger: {
      fontSize: '15px',
      color: '#ef4444',
    },
    menuDivider: {
      height: '1px',
      backgroundColor: colors.border,
      margin: '4px 0',
    },
    content: {
      flex: 1,
      overflowY: 'auto' as const,
    },
    bottomNav: {
      display: 'flex',
      height: '64px',
      backgroundColor: colors.surface,
      borderTop: `1px solid ${colors.border}`,
    },
    navButton: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column' as const,
      justifyContent: 'center',
      alignItems: 'center',
      padding: '8px',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
    },
    navLabel: {
      fontSize: '12px',
      marginTop: '4px',
    },
  };

  return (
    <div style={styles.container}>
      {/* Top App Bar */}
      <div style={styles.topBar}>
        <div style={styles.topBarTitle}>Benefits Guide</div>
        <div style={styles.topBarActions}>
          <button
            onClick={onToggleDarkMode}
            style={styles.iconButton}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = colors.surfaceLight}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={() => setShowMenu(!showMenu)}
            style={styles.iconButton}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = colors.surfaceLight}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            aria-label="Menu"
          >
            <MoreVertical size={20} />
          </button>
        </div>

        {/* Dropdown Menu */}
        {showMenu && (
          <>
            <div
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 999,
              }}
              onClick={() => setShowMenu(false)}
            />
            <div style={styles.menu}>
              <button
                style={styles.menuItem}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = colors.surfaceLight}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                onClick={() => {
                  setShowMenu(false);
                }}
              >
                <User size={20} color={colors.text} />
                <span style={styles.menuText}>Profile</span>
              </button>
              <button
                style={styles.menuItem}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = colors.surfaceLight}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                onClick={() => {
                  setShowMenu(false);
                }}
              >
                <Settings size={20} color={colors.text} />
                <span style={styles.menuText}>Settings</span>
              </button>
              <div style={styles.menuDivider} />
              <button
                style={styles.menuItem}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = colors.surfaceLight}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                onClick={() => {
                  setShowMenu(false);
                  onLogout();
                }}
              >
                <LogOut size={20} color="#ef4444" />
                <span style={styles.menuTextDanger}>Logout</span>
              </button>
            </div>
          </>
        )}
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
              style={styles.navButton}
              aria-label={item.label}
            >
              <Icon
                size={24}
                color={isActive ? colors.primary : colors.textSecondary}
              />
              <span
                style={{
                  ...styles.navLabel,
                  color: isActive ? colors.primary : colors.textSecondary,
                }}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
