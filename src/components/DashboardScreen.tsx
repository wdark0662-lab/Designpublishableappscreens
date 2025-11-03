import { useState, useEffect } from 'react';
import { 
  Calendar, 
  Video, 
  Stethoscope, 
  Activity, 
  FileText,
  Heart,
  Pill,
  Clock,
  MapPin,
  Star,
  ArrowRight,
  Bell,
  User,
  Plus,
  TrendingUp,
  Droplet,
  Footprints,
} from 'lucide-react';
import { Screen } from '../App';
import { ImageWithFallback } from './figma/ImageWithFallback';
import BottomNav from './BottomNav';
import Button3D from './Button3D';

interface DashboardScreenProps {
  userName: string;
  onNavigate: (screen: Screen) => void;
}

export default function DashboardScreen({ userName, onNavigate }: DashboardScreenProps) {
  const [scrollY, setScrollY] = useState(0);
  const [greeting, setGreeting] = useState('Good morning');

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    // Set greeting based on time
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('Good morning');
    else if (hour < 18) setGreeting('Good afternoon');
    else setGreeting('Good evening');

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const quickActions = [
    { 
      id: 'new-appointment', 
      icon: Calendar, 
      label: 'Book', 
      bgColor: '#E8F5E9',
      iconColor: '#00BFA5'
    },
    { 
      id: 'doctors', 
      icon: Stethoscope, 
      label: 'Doctors', 
      bgColor: '#E3F2FD',
      iconColor: '#2196F3'
    },
    { 
      id: 'telemedicine', 
      icon: Video, 
      label: 'Video', 
      bgColor: '#F3E5F5',
      iconColor: '#9C27B0'
    },
    { 
      id: 'health-diagnosis', 
      icon: Activity, 
      label: 'Diagnosis', 
      bgColor: '#FFF3E0',
      iconColor: '#FF9800'
    },
  ];

  const upcomingAppointments = [
    {
      id: 1,
      doctor: 'Dr. Sarah Johnson',
      specialty: 'Cardiologist',
      date: 'Today',
      time: '2:30 PM',
      type: 'Video Call',
      avatar: 'https://images.unsplash.com/photo-1758691462477-976f771224d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBkb2N0b3IlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzYyMDA1NjI0fDA&ixlib=rb-4.1.0&q=80&w=400',
      status: 'upcoming',
    },
    {
      id: 2,
      doctor: 'Dr. Michael Chen',
      specialty: 'General Physician',
      date: 'Tomorrow',
      time: '10:00 AM',
      type: 'In-person',
      avatar: 'https://images.unsplash.com/photo-1758691463605-f4a3a92d6d37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwZG9jdG9yJTIwbWVkaWNhbHxlbnwxfHx8fDE3NjIwMTQ0NzZ8MA&ixlib=rb-4.1.0&q=80&w=400',
      status: 'upcoming',
    },
  ];

  const healthMetrics = [
    {
      id: 1,
      label: 'Heart Rate',
      value: '72',
      unit: 'bpm',
      icon: Heart,
      color: '#EF4444',
      bgColor: '#FEE2E2',
      trend: 'normal',
    },
    {
      id: 2,
      label: 'Blood Pressure',
      value: '120/80',
      unit: 'mmHg',
      icon: Activity,
      color: '#8B5CF6',
      bgColor: '#EDE9FE',
      trend: 'normal',
    },
    {
      id: 3,
      label: 'Steps',
      value: '8,432',
      unit: 'steps',
      icon: Footprints,
      color: '#10B981',
      bgColor: '#D1FAE5',
      trend: 'up',
    },
    {
      id: 4,
      label: 'Water',
      value: '1.5',
      unit: 'liters',
      icon: Droplet,
      color: '#3B82F6',
      bgColor: '#DBEAFE',
      trend: 'normal',
    },
  ];

  const recentActivity = [
    {
      id: 1,
      title: 'Lab Results Available',
      description: 'Blood test results from Nov 1',
      time: '2 hours ago',
      icon: FileText,
      color: '#00BFA5',
    },
    {
      id: 2,
      title: 'Prescription Refill',
      description: 'Ready for pickup at pharmacy',
      time: '5 hours ago',
      icon: Pill,
      color: '#FF9800',
    },
  ];

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
      {/* Modern Hospital Background with Parallax */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
          transform: `translateY(${scrollY * 0.3}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
          alt="Modern Medical Center"
          style={{
            width: '100%',
            height: '110%',
            objectFit: 'cover',
            opacity: 0.05,
          }}
        />
      </div>

      {/* Light Overlay */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(to bottom, rgba(248, 250, 251, 0.98) 0%, rgba(248, 250, 251, 0.95) 100%)',
          zIndex: 0,
        }}
      />

      {/* Header with Greeting */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          background: 'linear-gradient(135deg, #00BFA5 0%, #00897B 100%)',
          paddingLeft: '20px',
          paddingRight: '20px',
          paddingTop: 'calc(20px + env(safe-area-inset-top))',
          paddingBottom: '30px',
          borderBottomLeftRadius: '30px',
          borderBottomRightRadius: '30px',
          boxShadow: '0 10px 30px rgba(0, 191, 165, 0.2)',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
          <div>
            <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.8)', margin: '0 0 4px 0' }}>
              {greeting}
            </p>
            <h1 style={{ fontSize: '28px', color: '#fff', margin: 0 }}>
              {userName || 'Welcome'}
            </h1>
          </div>
          
          <div style={{ display: 'flex', gap: '12px', marginTop: '4px' }}>
            <button
              onClick={() => onNavigate('notifications')}
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '14px',
                background: 'rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                position: 'relative',
              }}
            >
              <Bell size={20} color="#fff" />
              <div
                style={{
                  position: 'absolute',
                  top: '8px',
                  right: '8px',
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#FF5252',
                  border: '2px solid #00BFA5',
                }}
              />
            </button>
            
            <button
              onClick={() => onNavigate('profile')}
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '14px',
                background: 'rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <User size={20} color="#fff" />
            </button>
          </div>
        </div>

        {/* Quick Actions Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '12px',
          }}
        >
          {quickActions.map((action) => (
            <button
              key={action.id}
              onClick={() => onNavigate(action.id as Screen)}
              style={{
                background: 'rgba(255, 255, 255, 0.95)',
                borderRadius: '16px',
                padding: '16px 8px',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                transition: 'transform 0.2s ease',
              }}
              onMouseDown={(e) => {
                e.currentTarget.style.transform = 'scale(0.95)';
              }}
              onMouseUp={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
              onTouchStart={(e) => {
                e.currentTarget.style.transform = 'scale(0.95)';
              }}
              onTouchEnd={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '14px',
                  background: action.bgColor,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <action.icon size={24} color={action.iconColor} />
              </div>
              <span style={{ fontSize: '12px', color: '#1a1a1a', textAlign: 'center' }}>
                {action.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div style={{ position: 'relative', zIndex: 1, padding: '20px' }}>
        
        {/* Health Metrics Cards */}
        <div style={{ marginBottom: '24px' }}>
          <h2 style={{ fontSize: '18px', color: '#1a1a1a', margin: '0 0 16px 0' }}>
            Today's Health
          </h2>
          
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '12px',
            }}
          >
            {healthMetrics.map((metric) => (
              <div
                key={metric.id}
                style={{
                  background: '#fff',
                  borderRadius: '16px',
                  padding: '16px',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
                  border: '1px solid rgba(0, 0, 0, 0.05)',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '12px',
                      background: metric.bgColor,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <metric.icon size={20} color={metric.color} />
                  </div>
                  {metric.trend === 'up' && (
                    <TrendingUp size={16} color="#10B981" />
                  )}
                </div>
                
                <p style={{ fontSize: '12px', color: '#64748b', margin: '0 0 4px 0' }}>
                  {metric.label}
                </p>
                <p style={{ fontSize: '20px', color: '#1a1a1a', margin: '0' }}>
                  {metric.value}
                  <span style={{ fontSize: '12px', color: '#94a3b8', marginLeft: '4px' }}>
                    {metric.unit}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Appointments */}
        <div style={{ marginBottom: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <h2 style={{ fontSize: '18px', color: '#1a1a1a', margin: 0 }}>
              Upcoming Appointments
            </h2>
            <button
              onClick={() => onNavigate('my-appointments')}
              style={{
                background: 'none',
                border: 'none',
                color: '#00BFA5',
                fontSize: '14px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
              }}
            >
              See all
              <ArrowRight size={16} />
            </button>
          </div>

          {upcomingAppointments.map((appointment) => (
            <div
              key={appointment.id}
              onClick={() => onNavigate('my-appointments')}
              style={{
                background: '#fff',
                borderRadius: '16px',
                padding: '16px',
                marginBottom: '12px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
                border: '1px solid rgba(0, 0, 0, 0.05)',
                cursor: 'pointer',
              }}
            >
              <div style={{ display: 'flex', gap: '12px' }}>
                <ImageWithFallback
                  src={appointment.avatar}
                  alt={appointment.doctor}
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '14px',
                    objectFit: 'cover',
                  }}
                />
                
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: '16px', color: '#1a1a1a', margin: '0 0 4px 0' }}>
                    {appointment.doctor}
                  </h3>
                  <p style={{ fontSize: '13px', color: '#64748b', margin: '0 0 8px 0' }}>
                    {appointment.specialty}
                  </p>
                  
                  <div style={{ display: 'flex', gap: '12px', fontSize: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#64748b' }}>
                      <Calendar size={14} />
                      {appointment.date}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#64748b' }}>
                      <Clock size={14} />
                      {appointment.time}
                    </div>
                  </div>
                </div>
                
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '12px',
                    background: appointment.type === 'Video Call' ? '#E3F2FD' : '#E8F5E9',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {appointment.type === 'Video Call' ? (
                    <Video size={20} color="#2196F3" />
                  ) : (
                    <MapPin size={20} color="#00BFA5" />
                  )}
                </div>
              </div>
            </div>
          ))}

          <Button3D
            onClick={() => onNavigate('new-appointment')}
            variant="outline"
            size="md"
            fullWidth
            style={{
              background: '#fff',
              border: '2px dashed #00BFA5',
              color: '#00BFA5',
            }}
          >
            <Plus size={18} />
            Book New Appointment
          </Button3D>
        </div>

        {/* Recent Activity */}
        <div style={{ marginBottom: '24px' }}>
          <h2 style={{ fontSize: '18px', color: '#1a1a1a', margin: '0 0 16px 0' }}>
            Recent Activity
          </h2>

          {recentActivity.map((activity) => (
            <div
              key={activity.id}
              style={{
                background: '#fff',
                borderRadius: '16px',
                padding: '16px',
                marginBottom: '12px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
                border: '1px solid rgba(0, 0, 0, 0.05)',
                display: 'flex',
                gap: '12px',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: `${activity.color}15`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <activity.icon size={20} color={activity.color} />
              </div>
              
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: '14px', color: '#1a1a1a', margin: '0 0 4px 0' }}>
                  {activity.title}
                </h3>
                <p style={{ fontSize: '12px', color: '#64748b', margin: 0 }}>
                  {activity.description}
                </p>
              </div>
              
              <span style={{ fontSize: '11px', color: '#94a3b8' }}>
                {activity.time}
              </span>
            </div>
          ))}
        </div>
      </div>

      <BottomNav currentScreen="dashboard" onNavigate={onNavigate} />
    </div>
  );
}
