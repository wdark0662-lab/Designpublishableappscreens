import { Home, Calendar, Stethoscope, FileText, User } from 'lucide-react';
import { Screen } from '../App';

interface BottomNavProps {
  currentScreen: string;
  onNavigate: (screen: Screen) => void;
}

export default function BottomNav({ currentScreen, onNavigate }: BottomNavProps) {
  const navItems = [
    { 
      id: 'dashboard', 
      icon: Home, 
      label: 'Home',
      screen: 'dashboard' as Screen
    },
    { 
      id: 'appointments', 
      icon: Calendar, 
      label: 'Appointments',
      screen: 'my-appointments' as Screen
    },
    { 
      id: 'doctors', 
      icon: Stethoscope, 
      label: 'Doctors',
      screen: 'doctors' as Screen
    },
    { 
      id: 'records', 
      icon: FileText, 
      label: 'Records',
      screen: 'health-records' as Screen
    },
    { 
      id: 'profile', 
      icon: User, 
      label: 'Profile',
      screen: 'profile' as Screen
    },
  ];

  const isActive = (itemId: string, screen: Screen) => {
    // Map current screens to nav items
    if (itemId === 'dashboard' && currentScreen === 'dashboard') return true;
    if (itemId === 'appointments' && (currentScreen === 'my-appointments' || currentScreen === 'appointments' || currentScreen === 'new-appointment')) return true;
    if (itemId === 'doctors' && currentScreen === 'doctors') return true;
    if (itemId === 'records' && (currentScreen === 'health-records' || currentScreen === 'health-diagnosis')) return true;
    if (itemId === 'profile' && (currentScreen === 'profile' || currentScreen === 'settings')) return true;
    return false;
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        background: '#fff',
        borderTop: '1px solid rgba(0, 0, 0, 0.06)',
        paddingLeft: '8px',
        paddingRight: '8px',
        paddingTop: '8px',
        paddingBottom: 'calc(8px + env(safe-area-inset-bottom))',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        zIndex: 100,
        boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.05)',
      }}
    >
      {navItems.map((item) => {
        const active = isActive(item.id, item.screen);
        return (
          <button
            key={item.id}
            onClick={() => onNavigate(item.screen)}
            style={{
              flex: 1,
              background: 'none',
              border: 'none',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '4px',
              padding: '8px 4px',
              cursor: 'pointer',
              position: 'relative',
              transition: 'all 0.3s ease',
              WebkitTapHighlightColor: 'transparent',
            }}
          >
            {/* Active Indicator */}
            {active && (
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '32px',
                  height: '3px',
                  borderRadius: '0 0 3px 3px',
                  background: 'linear-gradient(135deg, #00BFA5 0%, #00897B 100%)',
                }}
              />
            )}
            
            {/* Icon Container */}
            <div
              style={{
                width: '48px',
                height: '32px',
                borderRadius: '12px',
                background: active ? 'rgba(0, 191, 165, 0.1)' : 'transparent',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
              }}
            >
              <item.icon
                size={22}
                color={active ? '#00BFA5' : '#94a3b8'}
                strokeWidth={active ? 2.5 : 2}
              />
            </div>
            
            {/* Label */}
            <span
              style={{
                fontSize: '11px',
                color: active ? '#00BFA5' : '#94a3b8',
                transition: 'all 0.3s ease',
              }}
            >
              {item.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
