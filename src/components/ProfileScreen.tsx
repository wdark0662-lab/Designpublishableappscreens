import { useState } from 'react';
import { 
  User,
  Settings,
  Bell,
  Heart,
  FileText,
  CreditCard,
  HelpCircle,
  Shield,
  ChevronRight,
  LogOut,
  Star,
  Award,
  Calendar,
  Activity,
} from 'lucide-react';
import { Screen } from '../App';
import { ImageWithFallback } from './figma/ImageWithFallback';
import BottomNav from './BottomNav';

interface ProfileScreenProps {
  onNavigate: (screen: Screen) => void;
}

export default function ProfileScreen({ onNavigate }: ProfileScreenProps) {
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  const userStats = [
    {
      id: 1,
      label: 'Appointments',
      value: '24',
      icon: Calendar,
      color: '#00BFA5',
      bgColor: '#E8F5E9',
    },
    {
      id: 2,
      label: 'Health Score',
      value: '85',
      icon: Activity,
      color: '#2196F3',
      bgColor: '#E3F2FD',
    },
    {
      id: 3,
      label: 'Reviews',
      value: '12',
      icon: Star,
      color: '#FF9800',
      bgColor: '#FFF3E0',
    },
    {
      id: 4,
      label: 'Saved',
      value: '8',
      icon: Heart,
      color: '#E91E63',
      bgColor: '#FCE4EC',
    },
  ];

  const menuSections = [
    {
      title: 'Account',
      items: [
        { 
          icon: User, 
          label: 'Personal Information', 
          screen: 'profile' as Screen,
          color: '#00BFA5'
        },
        { 
          icon: FileText, 
          label: 'Medical Records', 
          screen: 'health-records' as Screen,
          color: '#2196F3'
        },
        { 
          icon: Heart, 
          label: 'Favorite Doctors', 
          screen: 'favorite-doctors' as Screen,
          color: '#E91E63',
          badge: '5'
        },
        { 
          icon: CreditCard, 
          label: 'Payment Methods', 
          screen: 'profile' as Screen,
          color: '#FF9800'
        },
      ],
    },
    {
      title: 'Preferences',
      items: [
        { 
          icon: Bell, 
          label: 'Notifications', 
          screen: 'notifications' as Screen,
          color: '#9C27B0'
        },
        { 
          icon: Settings, 
          label: 'Settings', 
          screen: 'settings' as Screen,
          color: '#607D8B'
        },
        { 
          icon: Shield, 
          label: 'Privacy & Security', 
          screen: 'settings' as Screen,
          color: '#4CAF50'
        },
      ],
    },
    {
      title: 'Support',
      items: [
        { 
          icon: HelpCircle, 
          label: 'Help Center', 
          screen: 'profile' as Screen,
          color: '#00BCD4'
        },
        { 
          icon: Award, 
          label: 'About Healix', 
          screen: 'profile' as Screen,
          color: '#FF5722'
        },
      ],
    },
  ];

  const handleLogout = () => {
    localStorage.removeItem('healix-user-data');
    onNavigate('landing');
  };

  return (
    <div
      style={{
        minHeight: 'calc(var(--vh, 1vh) * 100)',
        width: '100%',
        position: 'relative',
        backgroundColor: '#F8FAFB',
        overflow: 'auto',
        paddingBottom: '80px',
      }}
    >
      {/* Header with Profile */}
      <div
        style={{
          background: 'linear-gradient(135deg, #00BFA5 0%, #00897B 100%)',
          paddingLeft: '20px',
          paddingRight: '20px',
          paddingTop: 'calc(20px + env(safe-area-inset-top))',
          paddingBottom: '30px',
          borderBottomLeftRadius: '30px',
          borderBottomRightRadius: '30px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Profile Picture and Info */}
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <div
            style={{
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              background: '#fff',
              margin: '0 auto 16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
              position: 'relative',
            }}
          >
            <User size={48} color="#00BFA5" />
            
            {/* Edit Button */}
            <button
              style={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: '#fff',
                border: '3px solid #00BFA5',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
              }}
            >
              <Settings size={14} color="#00BFA5" />
            </button>
          </div>
          
          <h1 style={{ fontSize: '24px', color: '#fff', margin: '0 0 4px 0' }}>
            John Doe
          </h1>
          <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.8)', margin: 0 }}>
            john.doe@email.com
          </p>
        </div>

        {/* Stats Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '12px',
          }}
        >
          {userStats.map((stat) => (
            <div
              key={stat.id}
              style={{
                background: 'rgba(255, 255, 255, 0.95)',
                borderRadius: '16px',
                padding: '16px 8px',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '12px',
                  background: stat.bgColor,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 8px',
                }}
              >
                <stat.icon size={20} color={stat.color} />
              </div>
              <p style={{ fontSize: '18px', color: '#1a1a1a', margin: '0 0 2px 0' }}>
                {stat.value}
              </p>
              <p style={{ fontSize: '11px', color: '#64748b', margin: 0 }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Menu Sections */}
      <div style={{ padding: '20px', position: 'relative', zIndex: 1 }}>
        {menuSections.map((section, sectionIndex) => (
          <div key={sectionIndex} style={{ marginBottom: '24px' }}>
            <h2 style={{ fontSize: '16px', color: '#64748b', margin: '0 0 12px 0', paddingLeft: '4px' }}>
              {section.title}
            </h2>
            
            <div
              style={{
                background: '#fff',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
                border: '1px solid rgba(0, 0, 0, 0.05)',
              }}
            >
              {section.items.map((item, itemIndex) => (
                <button
                  key={itemIndex}
                  onClick={() => onNavigate(item.screen)}
                  style={{
                    width: '100%',
                    padding: '16px',
                    background: 'none',
                    border: 'none',
                    borderBottom: itemIndex < section.items.length - 1 ? '1px solid rgba(0, 0, 0, 0.05)' : 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    cursor: 'pointer',
                    transition: 'background 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#F8FAFB';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'none';
                  }}
                >
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '12px',
                      background: `${item.color}15`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <item.icon size={20} color={item.color} />
                  </div>
                  
                  <span style={{ flex: 1, textAlign: 'left', fontSize: '15px', color: '#1a1a1a' }}>
                    {item.label}
                  </span>
                  
                  {item.badge && (
                    <div
                      style={{
                        padding: '4px 8px',
                        borderRadius: '8px',
                        background: '#00BFA5',
                        color: '#fff',
                        fontSize: '12px',
                      }}
                    >
                      {item.badge}
                    </div>
                  )}
                  
                  <ChevronRight size={20} color="#cbd5e1" />
                </button>
              ))}
            </div>
          </div>
        ))}

        {/* Logout Button */}
        <button
          onClick={() => setShowLogoutConfirm(true)}
          style={{
            width: '100%',
            padding: '16px',
            borderRadius: '16px',
            background: '#fff',
            border: '1px solid rgba(239, 68, 68, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
          }}
        >
          <LogOut size={20} color="#EF4444" />
          <span style={{ fontSize: '15px', color: '#EF4444' }}>
            Log Out
          </span>
        </button>

        {/* App Version */}
        <p style={{ textAlign: 'center', fontSize: '12px', color: '#94a3b8', marginTop: '24px' }}>
          Healix v1.0.0
        </p>
      </div>

      {/* Logout Confirmation Modal */}
      {showLogoutConfirm && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '20px',
          }}
          onClick={() => setShowLogoutConfirm(false)}
        >
          <div
            style={{
              background: '#fff',
              borderRadius: '20px',
              padding: '24px',
              maxWidth: '340px',
              width: '100%',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                background: '#FEE2E2',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px',
              }}
            >
              <LogOut size={28} color="#EF4444" />
            </div>
            
            <h3 style={{ fontSize: '20px', color: '#1a1a1a', textAlign: 'center', margin: '0 0 8px 0' }}>
              Log Out
            </h3>
            <p style={{ fontSize: '14px', color: '#64748b', textAlign: 'center', margin: '0 0 24px 0' }}>
              Are you sure you want to log out of your account?
            </p>
            
            <div style={{ display: 'flex', gap: '12px' }}>
              <button
                onClick={() => setShowLogoutConfirm(false)}
                style={{
                  flex: 1,
                  padding: '14px',
                  borderRadius: '12px',
                  border: '1px solid rgba(0, 0, 0, 0.1)',
                  background: '#fff',
                  color: '#1a1a1a',
                  fontSize: '15px',
                  cursor: 'pointer',
                }}
              >
                Cancel
              </button>
              <button
                onClick={handleLogout}
                style={{
                  flex: 1,
                  padding: '14px',
                  borderRadius: '12px',
                  border: 'none',
                  background: '#EF4444',
                  color: '#fff',
                  fontSize: '15px',
                  cursor: 'pointer',
                }}
              >
                Log Out
              </button>
            </div>
          </div>
        </div>
      )}

      <BottomNav currentScreen="profile" onNavigate={onNavigate} />
    </div>
  );
}
