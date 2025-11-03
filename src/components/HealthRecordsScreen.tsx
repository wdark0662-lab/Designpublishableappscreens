import { ArrowLeft, FileText, Download, Eye, Calendar, Activity, Moon, Sun } from 'lucide-react';
import { Screen } from '../App';
import BottomNav from './BottomNav';
import { useTheme } from '../contexts/ThemeContext';

interface HealthRecordsScreenProps {
  onNavigate: (screen: Screen) => void;
}

export default function HealthRecordsScreen({ onNavigate }: HealthRecordsScreenProps) {
  const { theme, toggleTheme, colors } = useTheme();

  const records = [
    {
      id: 1,
      title: 'Blood Test Results',
      date: 'October 28, 2025',
      doctor: 'Dr. Sarah Johnson',
      type: 'Lab Report',
      status: 'Completed',
      icon: '🩸',
      color: '#ef4444',
    },
    {
      id: 2,
      title: 'ECG Report',
      date: 'October 25, 2025',
      doctor: 'Dr. Sarah Johnson',
      type: 'Cardiac Test',
      status: 'Completed',
      icon: '❤️',
      color: '#3b82f6',
    },
    {
      id: 3,
      title: 'X-Ray - Chest',
      date: 'October 20, 2025',
      doctor: 'Dr. Michael Chen',
      type: 'Imaging',
      status: 'Completed',
      icon: '📷',
      color: '#8b5cf6',
    },
    {
      id: 4,
      title: 'Annual Physical Exam',
      date: 'October 15, 2025',
      doctor: 'Dr. Emily Rodriguez',
      type: 'General Checkup',
      status: 'Completed',
      icon: '🏥',
      color: '#10b981',
    },
    {
      id: 5,
      title: 'Prescription - Medication',
      date: 'October 10, 2025',
      doctor: 'Dr. Lisa Anderson',
      type: 'Prescription',
      status: 'Active',
      icon: '💊',
      color: '#f59e0b',
    },
    {
      id: 6,
      title: 'MRI Scan - Brain',
      date: 'September 28, 2025',
      doctor: 'Dr. Michael Chen',
      type: 'Imaging',
      status: 'Completed',
      icon: '🧠',
      color: '#06b6d4',
    },
  ];

  const categories = [
    { label: 'All Records', count: 6, active: true },
    { label: 'Lab Reports', count: 2, active: false },
    { label: 'Imaging', count: 2, active: false },
    { label: 'Prescriptions', count: 1, active: false },
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
      {/* Enhanced Header with More Height */}
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
            Health Records
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

        <p style={{ fontSize: '15px', color: 'rgba(255, 255, 255, 0.95)', marginBottom: '16px' }}>
          {records.length} medical records available
        </p>

        {/* Category Filters */}
        <div
          style={{
            display: 'flex',
            gap: '8px',
            overflowX: 'auto',
            WebkitOverflowScrolling: 'touch',
            paddingBottom: '8px',
          }}
        >
          {categories.map((category) => (
            <button
              key={category.label}
              style={{
                padding: '10px 18px',
                borderRadius: '14px',
                border: 'none',
                background: category.active
                  ? 'rgba(255, 255, 255, 0.95)'
                  : 'rgba(255, 255, 255, 0.2)',
                color: category.active ? colors.primary : '#fff',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                touchAction: 'manipulation',
                WebkitTapHighlightColor: 'transparent',
                transition: 'all 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              {category.label}
              <span
                style={{
                  padding: '2px 8px',
                  borderRadius: '8px',
                  background: category.active ? colors.primary : 'rgba(255, 255, 255, 0.3)',
                  color: '#fff',
                  fontSize: '12px',
                  fontWeight: '700',
                }}
              >
                {category.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div
        style={{
          position: 'relative',
          height: 'calc(100% - 280px)',
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
            {/* Records List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {records.map((record) => (
                <div
                  key={record.id}
                  style={{
                    background: colors.cardBackground,
                    borderRadius: '24px',
                    padding: '20px',
                    boxShadow: `0 8px 32px ${colors.shadow}, inset 0 -3px 0 ${colors.border}`,
                    border: `1px solid ${colors.border}`,
                  }}
                >
                  <div style={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
                    {/* Icon */}
                    <div
                      style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '18px',
                        background: `${record.color}15`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '32px',
                        flexShrink: 0,
                      }}
                    >
                      {record.icon}
                    </div>

                    {/* Info */}
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <h3
                        style={{
                          fontSize: '18px',
                          fontWeight: '700',
                          color: colors.text,
                          margin: '0 0 6px 0',
                        }}
                      >
                        {record.title}
                      </h3>
                      <p
                        style={{
                          fontSize: '14px',
                          color: colors.primary,
                          fontWeight: '600',
                          margin: '0 0 4px 0',
                        }}
                      >
                        {record.doctor}
                      </p>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <span
                          style={{
                            fontSize: '13px',
                            color: colors.textSecondary,
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px',
                          }}
                        >
                          <Calendar size={14} />
                          {record.date}
                        </span>
                      </div>
                    </div>

                    {/* Status Badge */}
                    <div
                      style={{
                        padding: '6px 12px',
                        borderRadius: '10px',
                        background: record.status === 'Active' ? '#10b98115' : '#3b82f615',
                        color: record.status === 'Active' ? '#10b981' : colors.primary,
                        fontSize: '12px',
                        fontWeight: '600',
                        height: 'fit-content',
                      }}
                    >
                      {record.status}
                    </div>
                  </div>

                  {/* Type Badge */}
                  <div
                    style={{
                      padding: '8px 12px',
                      borderRadius: '12px',
                      background: `${record.color}10`,
                      marginBottom: '16px',
                      display: 'inline-block',
                    }}
                  >
                    <span style={{ fontSize: '13px', color: record.color, fontWeight: '600' }}>
                      {record.type}
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
                    <button
                      style={{
                        padding: '14px',
                        borderRadius: '14px',
                        border: `2px solid ${colors.primary}`,
                        background: colors.cardBackground,
                        color: colors.primary,
                        fontSize: '14px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        touchAction: 'manipulation',
                        WebkitTapHighlightColor: 'transparent',
                        boxShadow: `0 4px 12px ${colors.primary}25, inset 0 -2px 0 ${colors.primary}15`,
                        transform: 'translateY(0)',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      <Eye size={18} />
                      View
                    </button>

                    <button
                      style={{
                        padding: '14px',
                        borderRadius: '14px',
                        border: 'none',
                        background: colors.primaryGradient,
                        color: '#fff',
                        fontSize: '14px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        touchAction: 'manipulation',
                        WebkitTapHighlightColor: 'transparent',
                        boxShadow: `0 6px 20px ${colors.primary}40, inset 0 -2px 0 rgba(0, 0, 0, 0.15)`,
                        transform: 'translateY(0)',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      <Download size={18} />
                      Download
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <BottomNav currentScreen="profile" onNavigate={onNavigate} />
      </div>
    </div>
  );
}
