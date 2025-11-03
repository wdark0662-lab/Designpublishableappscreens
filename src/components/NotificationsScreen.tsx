import { ArrowLeft, Bell, Calendar, MessageSquare, Heart, AlertCircle, CheckCircle, Moon, Sun } from 'lucide-react';
import { Screen } from '../App';
import BottomNav from './BottomNav';
import { useTheme } from '../contexts/ThemeContext';

interface NotificationsScreenProps {
  onNavigate: (screen: Screen) => void;
}

export default function NotificationsScreen({ onNavigate }: NotificationsScreenProps) {
  const { theme, toggleTheme, colors } = useTheme();

  const notifications = [
    {
      id: 1,
      type: 'appointment',
      title: 'Upcoming Appointment',
      message: 'Your appointment with Dr. Sarah Johnson is in 2 hours',
      time: '30 min ago',
      icon: Calendar,
      color: '#3b82f6',
      unread: true,
    },
    {
      id: 2,
      type: 'message',
      title: 'New Message',
      message: 'Dr. Michael Chen sent you a message regarding your test results',
      time: '1 hour ago',
      icon: MessageSquare,
      color: '#10b981',
      unread: true,
    },
    {
      id: 3,
      type: 'reminder',
      title: 'Medication Reminder',
      message: 'Time to take your evening medication',
      time: '2 hours ago',
      icon: Bell,
      color: '#f59e0b',
      unread: true,
    },
    {
      id: 4,
      type: 'health',
      title: 'Health Tip',
      message: 'Remember to drink at least 8 glasses of water today',
      time: '4 hours ago',
      icon: Heart,
      color: '#ef4444',
      unread: false,
    },
    {
      id: 5,
      type: 'alert',
      title: 'Test Results Ready',
      message: 'Your blood test results are now available to view',
      time: '6 hours ago',
      icon: AlertCircle,
      color: '#8b5cf6',
      unread: false,
    },
    {
      id: 6,
      type: 'success',
      title: 'Appointment Confirmed',
      message: 'Your appointment for Nov 5 has been confirmed',
      time: '1 day ago',
      icon: CheckCircle,
      color: '#10b981',
      unread: false,
    },
    {
      id: 7,
      type: 'appointment',
      title: 'Appointment Reminder',
      message: 'Don\'t forget your checkup tomorrow at 10:00 AM',
      time: '1 day ago',
      icon: Calendar,
      color: '#3b82f6',
      unread: false,
    },
  ];

  const unreadCount = notifications.filter(n => n.unread).length;

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
            Notifications
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

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <p style={{ fontSize: '15px', color: 'rgba(255, 255, 255, 0.95)', margin: 0, flex: 1 }}>
            {notifications.length} notifications
          </p>
          
          {unreadCount > 0 && (
            <div
              style={{
                padding: '6px 14px',
                borderRadius: '12px',
                background: 'rgba(239, 68, 68, 0.95)',
                color: '#fff',
                fontSize: '13px',
                fontWeight: '700',
              }}
            >
              {unreadCount} unread
            </div>
          )}
          
          <button
            style={{
              padding: '8px 16px',
              borderRadius: '12px',
              background: 'rgba(255, 255, 255, 0.2)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              color: '#fff',
              fontSize: '13px',
              fontWeight: '600',
              cursor: 'pointer',
              touchAction: 'manipulation',
              WebkitTapHighlightColor: 'transparent',
            }}
          >
            Mark all read
          </button>
        </div>
      </div>

      {/* Content */}
      <div
        style={{
          position: 'relative',
          height: 'calc(100% - 200px)',
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
            {/* Notifications List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {notifications.map((notification) => {
                const Icon = notification.icon;
                return (
                  <div
                    key={notification.id}
                    style={{
                      background: notification.unread 
                        ? colors.cardBackground
                        : colors.cardBackground,
                      borderRadius: '20px',
                      padding: '16px',
                      display: 'flex',
                      gap: '16px',
                      boxShadow: notification.unread
                        ? `0 6px 24px ${colors.shadow}, inset 0 -3px 0 ${colors.border}`
                        : `0 4px 16px ${colors.shadow}`,
                      border: notification.unread
                        ? `2px solid ${notification.color}40`
                        : `1px solid ${colors.border}`,
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
                    {/* Unread Indicator */}
                    {notification.unread && (
                      <div
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '4px',
                          height: '100%',
                          background: notification.color,
                        }}
                      />
                    )}

                    {/* Icon */}
                    <div
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '14px',
                        background: `${notification.color}15`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <Icon size={24} color={notification.color} />
                    </div>

                    {/* Content */}
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'flex-start',
                          marginBottom: '6px',
                        }}
                      >
                        <h3
                          style={{
                            fontSize: '16px',
                            fontWeight: '700',
                            color: colors.text,
                            margin: 0,
                          }}
                        >
                          {notification.title}
                        </h3>
                        {notification.unread && (
                          <div
                            style={{
                              width: '8px',
                              height: '8px',
                              borderRadius: '50%',
                              background: notification.color,
                              flexShrink: 0,
                              marginLeft: '8px',
                            }}
                          />
                        )}
                      </div>
                      <p
                        style={{
                          fontSize: '14px',
                          color: colors.textSecondary,
                          margin: '0 0 8px 0',
                          lineHeight: '1.5',
                        }}
                      >
                        {notification.message}
                      </p>
                      <span
                        style={{
                          fontSize: '12px',
                          color: colors.textSecondary,
                          fontWeight: '500',
                        }}
                      >
                        {notification.time}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Empty State for Future */}
            {notifications.length === 0 && (
              <div
                style={{
                  textAlign: 'center',
                  padding: '60px 20px',
                }}
              >
                <div
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: `${colors.primary}15`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px',
                  }}
                >
                  <Bell size={40} color={colors.primary} />
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: '700', color: colors.text, marginBottom: '8px' }}>
                  No Notifications
                </h3>
                <p style={{ fontSize: '14px', color: colors.textSecondary, margin: 0 }}>
                  You're all caught up! Check back later for updates.
                </p>
              </div>
            )}
          </div>
        </div>

        <BottomNav currentScreen="profile" onNavigate={onNavigate} />
      </div>
    </div>
  );
}
