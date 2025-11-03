import { useState } from 'react';
import { ArrowLeft, Calendar, Clock, MapPin, Search, ChevronRight } from 'lucide-react';
import { Screen } from '../App';
import { ImageWithFallback } from './figma/ImageWithFallback';
import BottomNav from './BottomNav';

interface AppointmentScreenProps {
  onNavigate: (screen: Screen) => void;
}

export default function AppointmentScreen({ onNavigate }: AppointmentScreenProps) {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const availableDates = [
    { date: 'Mon, 3', full: '2025-01-03' },
    { date: 'Tue, 4', full: '2025-01-04' },
    { date: 'Wed, 5', full: '2025-01-05' },
    { date: 'Thu, 6', full: '2025-01-06' },
    { date: 'Fri, 7', full: '2025-01-07' },
  ];

  const availableTimes = [
    '09:00 AM', '10:00 AM', '11:00 AM',
    '02:00 PM', '03:00 PM', '04:00 PM',
  ];

  const specialties = [
    { name: 'Cardiology', icon: '❤️', color: '#ef4444' },
    { name: 'Neurology', icon: '🧠', color: '#8b5cf6' },
    { name: 'Orthopedics', icon: '🦴', color: '#06b6d4' },
    { name: 'Pediatrics', icon: '👶', color: '#10b981' },
    { name: 'Dermatology', icon: '🔬', color: '#f59e0b' },
    { name: 'Dentistry', icon: '🦷', color: '#3b82f6' },
  ];

  return (
    <div
      style={{
        height: 'calc(var(--vh, 1vh) * 100)',
        width: '100%',
        position: 'relative',
        backgroundColor: '#f8fafc',
        overflow: 'hidden',
      }}
    >
      {/* 3D Background */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '300px',
          overflow: 'hidden',
          zIndex: 0,
        }}
      >
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1758691463198-dc663b8a64e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwY29uc3VsdGF0aW9uJTIwcm9vbXxlbnwxfHx8fDE3NjIwMTA2OTh8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Consultation Room"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'brightness(0.6) blur(2px)',
          }}
        />
        
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(180deg, rgba(59, 130, 246, 0.4) 0%, rgba(248, 250, 252, 1) 100%)',
          }}
        />
      </div>

      {/* Content */}
      <div
        style={{
          position: 'relative',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '480px',
          margin: '0 auto',
        }}
      >
        {/* Header */}
        <div
          style={{
            position: 'relative',
            zIndex: 10,
            padding: '20px',
            paddingTop: 'calc(20px + env(safe-area-inset-top))',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
            <button
              onClick={() => onNavigate('home')}
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '14px',
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(0, 0, 0, 0.05)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1), inset 0 -2px 0 rgba(0, 0, 0, 0.05)',
                touchAction: 'manipulation',
                WebkitTapHighlightColor: 'transparent',
              }}
            >
              <ArrowLeft size={20} color="#0f172a" />
            </button>
            
            <h1 style={{ fontSize: '28px', fontWeight: '700', color: '#fff', margin: 0 }}>
              Book Appointment
            </h1>
          </div>
        </div>

        {/* Scrollable Content */}
        <div
          style={{
            flex: 1,
            overflowY: 'auto',
            WebkitOverflowScrolling: 'touch',
            paddingBottom: 'calc(80px + env(safe-area-inset-bottom))',
          }}
        >
          {/* Search */}
          <div style={{ padding: '0 20px 24px 20px' }}>
            <div
              style={{
                background: '#fff',
                borderRadius: '20px',
                padding: '14px 20px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08), inset 0 -2px 0 rgba(0, 0, 0, 0.03)',
              }}
            >
              <Search size={20} color="#64748b" />
              <input
                type="text"
                placeholder="Search specialty or doctor..."
                style={{
                  flex: 1,
                  border: 'none',
                  outline: 'none',
                  fontSize: '16px',
                  backgroundColor: 'transparent',
                }}
              />
            </div>
          </div>

          {/* Specialties */}
          <div style={{ padding: '0 20px 24px 20px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#0f172a', marginBottom: '16px' }}>
              Select Specialty
            </h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
              {specialties.map((specialty) => (
                <button
                  key={specialty.name}
                  style={{
                    background: '#fff',
                    borderRadius: '20px',
                    padding: '20px 12px',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '8px',
                    touchAction: 'manipulation',
                    WebkitTapHighlightColor: 'transparent',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.06), inset 0 -2px 0 rgba(0, 0, 0, 0.03)',
                    transform: 'translateY(0)',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseDown={(e) => {
                    e.currentTarget.style.transform = 'translateY(2px)';
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.06), inset 0 -1px 0 rgba(0, 0, 0, 0.03)';
                  }}
                  onMouseUp={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.06), inset 0 -2px 0 rgba(0, 0, 0, 0.03)';
                  }}
                  onTouchStart={(e) => {
                    e.currentTarget.style.transform = 'translateY(2px)';
                  }}
                  onTouchEnd={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '14px',
                      background: `${specialty.color}15`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '24px',
                    }}
                  >
                    {specialty.icon}
                  </div>
                  <span style={{ fontSize: '12px', fontWeight: '600', color: '#0f172a', textAlign: 'center' }}>
                    {specialty.name}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Select Date */}
          <div style={{ padding: '0 20px 24px 20px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#0f172a', marginBottom: '16px' }}>
              Select Date
            </h2>
            
            <div style={{ display: 'flex', gap: '12px', overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
              {availableDates.map((dateItem) => (
                <button
                  key={dateItem.full}
                  onClick={() => setSelectedDate(dateItem.full)}
                  style={{
                    minWidth: '80px',
                    padding: '16px',
                    borderRadius: '16px',
                    border: 'none',
                    cursor: 'pointer',
                    background: selectedDate === dateItem.full
                      ? 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)'
                      : '#fff',
                    color: selectedDate === dateItem.full ? '#fff' : '#0f172a',
                    fontWeight: '600',
                    fontSize: '14px',
                    touchAction: 'manipulation',
                    WebkitTapHighlightColor: 'transparent',
                    boxShadow: selectedDate === dateItem.full
                      ? '0 6px 20px rgba(59, 130, 246, 0.3), inset 0 -2px 0 rgba(0, 0, 0, 0.1)'
                      : '0 4px 12px rgba(0, 0, 0, 0.06), inset 0 -2px 0 rgba(0, 0, 0, 0.03)',
                    transform: 'translateY(0)',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseDown={(e) => {
                    e.currentTarget.style.transform = 'translateY(2px)';
                  }}
                  onMouseUp={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                  onTouchStart={(e) => {
                    e.currentTarget.style.transform = 'translateY(2px)';
                  }}
                  onTouchEnd={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <Calendar size={20} style={{ margin: '0 auto' }} />
                    <span>{dateItem.date}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Select Time */}
          {selectedDate && (
            <div style={{ padding: '0 20px 24px 20px' }}>
              <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#0f172a', marginBottom: '16px' }}>
                Select Time
              </h2>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
                {availableTimes.map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    style={{
                      padding: '16px 12px',
                      borderRadius: '14px',
                      border: 'none',
                      cursor: 'pointer',
                      background: selectedTime === time
                        ? 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)'
                        : '#fff',
                      color: selectedTime === time ? '#fff' : '#0f172a',
                      fontWeight: '600',
                      fontSize: '14px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      touchAction: 'manipulation',
                      WebkitTapHighlightColor: 'transparent',
                      boxShadow: selectedTime === time
                        ? '0 6px 20px rgba(59, 130, 246, 0.3), inset 0 -2px 0 rgba(0, 0, 0, 0.1)'
                        : '0 4px 12px rgba(0, 0, 0, 0.06), inset 0 -2px 0 rgba(0, 0, 0, 0.03)',
                      transform: 'translateY(0)',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseDown={(e) => {
                      e.currentTarget.style.transform = 'translateY(2px)';
                    }}
                    onMouseUp={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                    onTouchStart={(e) => {
                      e.currentTarget.style.transform = 'translateY(2px)';
                    }}
                    onTouchEnd={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <Clock size={16} />
                    {time}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Confirm Button */}
          {selectedDate && selectedTime && (
            <div style={{ padding: '0 20px 24px 20px' }}>
              <button
                style={{
                  width: '100%',
                  padding: '18px',
                  borderRadius: '18px',
                  border: 'none',
                  background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                  color: '#fff',
                  fontSize: '18px',
                  fontWeight: '700',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  touchAction: 'manipulation',
                  WebkitTapHighlightColor: 'transparent',
                  boxShadow: '0 10px 30px rgba(16, 185, 129, 0.4), inset 0 -3px 0 rgba(0, 0, 0, 0.2)',
                  transform: 'translateY(0)',
                  transition: 'all 0.2s ease',
                }}
                onMouseDown={(e) => {
                  e.currentTarget.style.transform = 'translateY(3px)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(16, 185, 129, 0.3), inset 0 -1px 0 rgba(0, 0, 0, 0.2)';
                }}
                onMouseUp={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(16, 185, 129, 0.4), inset 0 -3px 0 rgba(0, 0, 0, 0.2)';
                }}
                onTouchStart={(e) => {
                  e.currentTarget.style.transform = 'translateY(3px)';
                }}
                onTouchEnd={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                Confirm Appointment
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </div>

        <BottomNav currentScreen="appointments" onNavigate={onNavigate} />
      </div>
    </div>
  );
}
