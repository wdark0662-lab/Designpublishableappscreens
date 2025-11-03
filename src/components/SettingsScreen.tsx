import { ArrowLeft, Moon, Sun, Globe, Bell, Shield, Info, ChevronRight, User, Lock, HelpCircle, LogOut } from 'lucide-react';
import { Screen } from '../App';
import BottomNav from './BottomNav';
import { useTheme } from '../contexts/ThemeContext';
import HealixLogo from './HealixLogo';

interface SettingsScreenProps {
  onNavigate: (screen: Screen) => void;
  onLogout: () => void;
}

export default function SettingsScreen({ onNavigate, onLogout }: SettingsScreenProps) {
  const { theme, toggleTheme, colors } = useTheme();

  const settingsGroups = [
    {
      title: 'Preferences',
      items: [
        {
          icon: theme === 'light' ? Moon : Sun,
          label: 'Theme',
          value: theme === 'light' ? 'Light Mode' : 'Dark Mode',
          hasToggle: true,
          action: toggleTheme,
        },
        {
          icon: Globe,
          label: 'Language',
          value: 'English (US)',
          hasChevron: true,
        },
        {
          icon: Bell,
          label: 'Notifications',
          value: 'Enabled',
          hasChevron: true,
        },
      ],
    },
    {
      title: 'Account',
      items: [
        {
          icon: User,
          label: 'Edit Profile',
          hasChevron: true,
        },
        {
          icon: Lock,
          label: 'Privacy & Security',
          hasChevron: true,
        },
      ],
    },
    {
      title: 'Support',
      items: [
        {
          icon: HelpCircle,
          label: 'Help Center',
          hasChevron: true,
        },
        {
          icon: Info,
          label: 'About Healix',
          value: 'Version 1.0.0',
          hasChevron: true,
        },
        {
          icon: Shield,
          label: 'Terms & Privacy',
          hasChevron: true,
        },
      ],
    },
  ];

  return (
    <div
      style={{
        height: 'calc(var(--vh, 1vh) * 100)',
        width: '100%',
        position: 'relative',
        backgroundColor: colors.background,
        overflow: 'hidden',
      }}
    >
      {/* Enhanced Header */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          padding: '24px 20px',
          paddingTop: 'calc(24px + env(safe-area-inset-top))',
          background: colors.primaryGradient,
          boxShadow: `0 8px 32px ${colors.shadow}, inset 0 -4px 8px rgba(0, 0, 0, 0.1)`,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
          <button
            onClick={() => onNavigate('profile')}
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '16px',
              background: 'rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              touchAction: 'manipulation',
              WebkitTapHighlightColor: 'transparent',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15), inset 0 -2px 4px rgba(0, 0, 0, 0.2)',
            }}
          >
            <ArrowLeft size={22} color="#fff" />
          </button>
          
          <h1 style={{ fontSize: '32px', fontWeight: '800', color: '#fff', margin: 0, flex: 1 }}>
            Settings
          </h1>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '16px',
              background: 'rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              touchAction: 'manipulation',
              WebkitTapHighlightColor: 'transparent',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15), inset 0 -2px 4px rgba(0, 0, 0, 0.2)',
            }}
          >
            {theme === 'light' ? <Moon size={22} color="#fff" /> : <Sun size={22} color="#fff" />}
          </button>
        </div>

        <p style={{ fontSize: '15px', color: 'rgba(255, 255, 255, 0.95)', margin: 0 }}>
          Customize your experience
        </p>
      </div>

      {/* Content */}
      <div
        style={{
          position: 'relative',
          height: 'calc(100% - 180px)',
          maxWidth: '480px',
          margin: '0 auto',
        }}
      >
        <div
          style={{
            height: '100%',
            overflowY: 'auto',
            WebkitOverflowScrolling: 'touch',
            paddingBottom: 'calc(80px + env(safe-area-inset-bottom))',
          }}
        >
          <div style={{ padding: '20px' }}>
            {/* Settings Groups */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {settingsGroups.map((group, groupIndex) => (
                <div key={groupIndex}>
                  <h2
                    style={{
                      fontSize: '13px',
                      fontWeight: '700',
                      color: colors.textSecondary,
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      margin: '0 0 12px 0',
                    }}
                  >
                    {group.title}
                  </h2>
                  <div
                    style={{
                      background: colors.cardBackground,
                      borderRadius: '20px',
                      overflow: 'hidden',
                      boxShadow: `0 4px 20px ${colors.shadow}, inset 0 -2px 0 ${colors.border}`,
                      border: `1px solid ${colors.border}`,
                    }}
                  >
                    {group.items.map((item, itemIndex) => {
                      const Icon = item.icon;
                      const isLast = itemIndex === group.items.length - 1;
                      
                      return (
                        <button
                          key={itemIndex}
                          onClick={item.action}
                          style={{
                            width: '100%',
                            padding: '18px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '14px',
                            background: 'transparent',
                            border: 'none',
                            borderBottom: isLast ? 'none' : `1px solid ${colors.border}`,
                            cursor: item.action || item.hasChevron ? 'pointer' : 'default',
                            textAlign: 'left',
                            touchAction: 'manipulation',
                            WebkitTapHighlightColor: 'transparent',
                            transition: 'all 0.2s ease',
                          }}
                        >
                          {/* Icon */}
                          <div
                            style={{
                              width: '44px',
                              height: '44px',
                              borderRadius: '12px',
                              background: `${colors.primary}15`,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              flexShrink: 0,
                            }}
                          >
                            <Icon size={22} color={colors.primary} />
                          </div>
                          
                          {/* Text */}
                          <div style={{ flex: 1, minWidth: 0 }}>
                            <div
                              style={{
                                fontSize: '16px',
                                fontWeight: '600',
                                color: colors.text,
                                marginBottom: item.value ? '4px' : '0',
                              }}
                            >
                              {item.label}
                            </div>
                            {item.value && (
                              <div
                                style={{
                                  fontSize: '13px',
                                  color: colors.textSecondary,
                                }}
                              >
                                {item.value}
                              </div>
                            )}
                          </div>

                          {/* Toggle */}
                          {item.hasToggle && (
                            <div
                              style={{
                                width: '54px',
                                height: '32px',
                                borderRadius: '16px',
                                background: theme === 'dark' ? colors.primary : '#cbd5e1',
                                position: 'relative',
                                transition: 'background-color 0.3s ease',
                                flexShrink: 0,
                              }}
                            >
                              <div
                                style={{
                                  width: '28px',
                                  height: '28px',
                                  borderRadius: '50%',
                                  background: '#fff',
                                  position: 'absolute',
                                  top: '2px',
                                  left: theme === 'dark' ? '24px' : '2px',
                                  transition: 'left 0.3s ease',
                                  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.2)',
                                }}
                              />
                            </div>
                          )}

                          {/* Chevron */}
                          {item.hasChevron && (
                            <ChevronRight size={20} color={colors.textSecondary} />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}

              {/* App Info Card */}
              <div
                style={{
                  background: colors.primaryGradient,
                  borderRadius: '24px',
                  padding: '32px 24px',
                  textAlign: 'center',
                  boxShadow: `0 8px 32px ${colors.primary}40`,
                }}
              >
                <div style={{ marginBottom: '16px' }}>
                  <HealixLogo size={64} showText={false} color="#fff" />
                </div>
                <h3 style={{ fontSize: '22px', fontWeight: '800', color: '#fff', margin: '0 0 8px 0' }}>
                  Healix Healthcare
                </h3>
                <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.9)', margin: '0 0 4px 0' }}>
                  Version 1.0.0
                </p>
                <p style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.7)', margin: 0 }}>
                  © 2025 • Making healthcare accessible
                </p>
              </div>

              {/* Logout Button */}
              <button
                onClick={onLogout}
                style={{
                  width: '100%',
                  padding: '18px',
                  borderRadius: '18px',
                  border: `2px solid #ef4444`,
                  background: colors.cardBackground,
                  color: '#ef4444',
                  fontSize: '16px',
                  fontWeight: '700',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  touchAction: 'manipulation',
                  WebkitTapHighlightColor: 'transparent',
                  boxShadow: '0 4px 16px rgba(239, 68, 68, 0.2), inset 0 -2px 0 rgba(239, 68, 68, 0.15)',
                  transform: 'translateY(0)',
                  transition: 'all 0.2s ease',
                }}
                onMouseDown={(e) => {
                  e.currentTarget.style.transform = 'translateY(2px)';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(239, 68, 68, 0.2), inset 0 -1px 0 rgba(239, 68, 68, 0.15)';
                }}
                onMouseUp={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(239, 68, 68, 0.2), inset 0 -2px 0 rgba(239, 68, 68, 0.15)';
                }}
                onTouchStart={(e) => {
                  e.currentTarget.style.transform = 'translateY(2px)';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(239, 68, 68, 0.2), inset 0 -1px 0 rgba(239, 68, 68, 0.15)';
                }}
                onTouchEnd={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(239, 68, 68, 0.2), inset 0 -2px 0 rgba(239, 68, 68, 0.15)';
                }}
              >
                <LogOut size={20} />
                Logout
              </button>
            </div>
          </div>
        </div>

        <BottomNav currentScreen="profile" onNavigate={onNavigate} />
      </div>
    </div>
  );
}
