import { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  MapPin, 
  Video, 
  Phone,
  MessageCircle,
  MoreVertical,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Filter,
} from 'lucide-react';
import { Screen } from '../App';
import { ImageWithFallback } from './figma/ImageWithFallback';
import BottomNav from './BottomNav';
import Button3D from './Button3D';

interface MyAppointmentsScreenProps {
  onNavigate: (screen: Screen) => void;
}

export default function MyAppointmentsScreen({ onNavigate }: MyAppointmentsScreenProps) {
  const [scrollY, setScrollY] = useState(0);
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past' | 'cancelled'>('upcoming');

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const appointments = {
    upcoming: [
      {
        id: 1,
        doctor: 'Dr. Sarah Johnson',
        specialty: 'Cardiologist',
        date: 'Nov 3, 2024',
        time: '2:30 PM',
        type: 'Video Call',
        avatar: 'https://images.unsplash.com/photo-1758691462477-976f771224d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
        hospital: 'City General Hospital',
        status: 'confirmed',
      },
      {
        id: 2,
        doctor: 'Dr. Michael Chen',
        specialty: 'General Physician',
        date: 'Nov 4, 2024',
        time: '10:00 AM',
        type: 'In-person',
        avatar: 'https://images.unsplash.com/photo-1758691463605-f4a3a92d6d37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
        hospital: 'Metro Medical Center',
        status: 'confirmed',
      },
      {
        id: 3,
        doctor: 'Dr. Emily Rodriguez',
        specialty: 'Pediatrician',
        date: 'Nov 5, 2024',
        time: '4:00 PM',
        type: 'In-person',
        avatar: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
        hospital: "Children's Hospital",
        status: 'pending',
      },
    ],
    past: [
      {
        id: 4,
        doctor: 'Dr. James Williams',
        specialty: 'Orthopedic',
        date: 'Oct 28, 2024',
        time: '3:00 PM',
        type: 'In-person',
        avatar: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
        hospital: 'Sports Medicine Clinic',
        status: 'completed',
      },
    ],
    cancelled: [
      {
        id: 5,
        doctor: 'Dr. Lisa Anderson',
        specialty: 'Dermatologist',
        date: 'Oct 25, 2024',
        time: '11:00 AM',
        type: 'Video Call',
        avatar: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
        hospital: 'Skin Care Center',
        status: 'cancelled',
      },
    ],
  };

  const getStatusBadge = (status: string) => {
    const badges = {
      confirmed: { bg: '#E8F5E9', color: '#2E7D32', icon: CheckCircle2, text: 'Confirmed' },
      pending: { bg: '#FFF3E0', color: '#F57C00', icon: AlertCircle, text: 'Pending' },
      completed: { bg: '#E3F2FD', color: '#1976D2', icon: CheckCircle2, text: 'Completed' },
      cancelled: { bg: '#FFEBEE', color: '#C62828', icon: XCircle, text: 'Cancelled' },
    };
    return badges[status as keyof typeof badges] || badges.pending;
  };

  const currentAppointments = appointments[activeTab];

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
      {/* Hospital Background */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      >
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
          alt="Medical Center"
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
          background: 'rgba(248, 250, 251, 0.98)',
          zIndex: 0,
        }}
      />

      {/* Header */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 10,
          background: '#fff',
          paddingLeft: '20px',
          paddingRight: '20px',
          paddingTop: 'calc(16px + env(safe-area-inset-top))',
          paddingBottom: '16px',
          borderBottom: '1px solid rgba(0, 0, 0, 0.06)',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
          <button
            onClick={() => onNavigate('dashboard')}
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '12px',
              background: '#F8FAFB',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <ArrowLeft size={20} color="#1a1a1a" />
          </button>
          
          <h1 style={{ fontSize: '24px', color: '#1a1a1a', margin: 0, flex: 1 }}>
            My Appointments
          </h1>
          
          <button
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '12px',
              background: '#F8FAFB',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <Filter size={20} color="#1a1a1a" />
          </button>
        </div>

        {/* Tabs */}
        <div
          style={{
            display: 'flex',
            gap: '8px',
            background: '#F8FAFB',
            padding: '4px',
            borderRadius: '12px',
          }}
        >
          {['upcoming', 'past', 'cancelled'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as typeof activeTab)}
              style={{
                flex: 1,
                padding: '10px 16px',
                borderRadius: '10px',
                border: 'none',
                background: activeTab === tab ? '#fff' : 'transparent',
                color: activeTab === tab ? '#00BFA5' : '#64748b',
                fontSize: '14px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: activeTab === tab ? '0 2px 8px rgba(0, 0, 0, 0.06)' : 'none',
                textTransform: 'capitalize',
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1, padding: '20px' }}>
        {currentAppointments.length === 0 ? (
          <div
            style={{
              textAlign: 'center',
              padding: '60px 20px',
            }}
          >
            <Calendar size={64} color="#cbd5e1" style={{ margin: '0 auto 16px' }} />
            <h3 style={{ fontSize: '18px', color: '#1a1a1a', margin: '0 0 8px 0' }}>
              No {activeTab} appointments
            </h3>
            <p style={{ fontSize: '14px', color: '#64748b', margin: '0 0 24px 0' }}>
              {activeTab === 'upcoming' && "You don't have any upcoming appointments"}
              {activeTab === 'past' && "No past appointments to show"}
              {activeTab === 'cancelled' && "No cancelled appointments"}
            </p>
            {activeTab === 'upcoming' && (
              <Button3D
                onClick={() => onNavigate('new-appointment')}
                variant="primary"
                size="lg"
              >
                Book an Appointment
              </Button3D>
            )}
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {currentAppointments.map((appointment) => {
              const badge = getStatusBadge(appointment.status);
              
              return (
                <div
                  key={appointment.id}
                  style={{
                    background: '#fff',
                    borderRadius: '20px',
                    padding: '20px',
                    boxShadow: '0 2px 12px rgba(0, 0, 0, 0.06)',
                    border: '1px solid rgba(0, 0, 0, 0.05)',
                  }}
                >
                  {/* Doctor Info */}
                  <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
                    <ImageWithFallback
                      src={appointment.avatar}
                      alt={appointment.doctor}
                      style={{
                        width: '64px',
                        height: '64px',
                        borderRadius: '16px',
                        objectFit: 'cover',
                      }}
                    />
                    
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '4px' }}>
                        <h3 style={{ fontSize: '17px', color: '#1a1a1a', margin: 0 }}>
                          {appointment.doctor}
                        </h3>
                        <button
                          style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            padding: '4px',
                          }}
                        >
                          <MoreVertical size={18} color="#94a3b8" />
                        </button>
                      </div>
                      
                      <p style={{ fontSize: '14px', color: '#64748b', margin: '0 0 8px 0' }}>
                        {appointment.specialty}
                      </p>
                      
                      {/* Status Badge */}
                      <div
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          padding: '6px 12px',
                          borderRadius: '8px',
                          background: badge.bg,
                          fontSize: '12px',
                          color: badge.color,
                        }}
                      >
                        <badge.icon size={14} />
                        {badge.text}
                      </div>
                    </div>
                  </div>

                  {/* Appointment Details */}
                  <div
                    style={{
                      background: '#F8FAFB',
                      borderRadius: '12px',
                      padding: '16px',
                      marginBottom: '16px',
                    }}
                  >
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div
                          style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '10px',
                            background: '#fff',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <Calendar size={18} color="#00BFA5" />
                        </div>
                        <div>
                          <p style={{ fontSize: '12px', color: '#64748b', margin: '0 0 2px 0' }}>
                            Date
                          </p>
                          <p style={{ fontSize: '14px', color: '#1a1a1a', margin: 0 }}>
                            {appointment.date}
                          </p>
                        </div>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div
                          style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '10px',
                            background: '#fff',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <Clock size={18} color="#00BFA5" />
                        </div>
                        <div>
                          <p style={{ fontSize: '12px', color: '#64748b', margin: '0 0 2px 0' }}>
                            Time
                          </p>
                          <p style={{ fontSize: '14px', color: '#1a1a1a', margin: 0 }}>
                            {appointment.time}
                          </p>
                        </div>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div
                          style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '10px',
                            background: '#fff',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          {appointment.type === 'Video Call' ? (
                            <Video size={18} color="#00BFA5" />
                          ) : (
                            <MapPin size={18} color="#00BFA5" />
                          )}
                        </div>
                        <div>
                          <p style={{ fontSize: '12px', color: '#64748b', margin: '0 0 2px 0' }}>
                            {appointment.type === 'Video Call' ? 'Type' : 'Location'}
                          </p>
                          <p style={{ fontSize: '14px', color: '#1a1a1a', margin: 0 }}>
                            {appointment.type === 'Video Call' ? 'Video Consultation' : appointment.hospital}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  {appointment.status === 'confirmed' && activeTab === 'upcoming' && (
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px' }}>
                      <button
                        style={{
                          padding: '12px',
                          borderRadius: '12px',
                          border: '1px solid rgba(0, 0, 0, 0.1)',
                          background: '#fff',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          gap: '4px',
                          cursor: 'pointer',
                        }}
                      >
                        <MessageCircle size={18} color="#00BFA5" />
                        <span style={{ fontSize: '11px', color: '#64748b' }}>Message</span>
                      </button>

                      <button
                        style={{
                          padding: '12px',
                          borderRadius: '12px',
                          border: '1px solid rgba(0, 0, 0, 0.1)',
                          background: '#fff',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          gap: '4px',
                          cursor: 'pointer',
                        }}
                      >
                        <Phone size={18} color="#00BFA5" />
                        <span style={{ fontSize: '11px', color: '#64748b' }}>Call</span>
                      </button>

                      <button
                        style={{
                          padding: '12px',
                          borderRadius: '12px',
                          border: '1px solid rgba(0, 0, 0, 0.1)',
                          background: '#fff',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          gap: '4px',
                          cursor: 'pointer',
                        }}
                      >
                        {appointment.type === 'Video Call' ? (
                          <>
                            <Video size={18} color="#00BFA5" />
                            <span style={{ fontSize: '11px', color: '#64748b' }}>Join</span>
                          </>
                        ) : (
                          <>
                            <MapPin size={18} color="#00BFA5" />
                            <span style={{ fontSize: '11px', color: '#64748b' }}>Directions</span>
                          </>
                        )}
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>

      <BottomNav currentScreen="my-appointments" onNavigate={onNavigate} />
    </div>
  );
}
