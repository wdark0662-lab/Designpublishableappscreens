import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Menu, Search } from 'lucide-react';
import { Screen } from '../App';
import { ImageWithFallback } from './figma/ImageWithFallback';
import Button3D from './Button3D';

interface NewAppointmentScreenProps {
  onNavigate: (screen: Screen) => void;
}

export default function NewAppointmentScreen({ onNavigate }: NewAppointmentScreenProps) {
  const [step, setStep] = useState<'date' | 'doctor'>('date');
  const [selectedDate, setSelectedDate] = useState(19);
  const [selectedMonth, setSelectedMonth] = useState(11); // December (0-indexed)
  const [selectedYear, setSelectedYear] = useState(2021);
  const [selectedTime, setSelectedTime] = useState<'morning' | 'afternoon' | null>('morning');
  const [morningTime, setMorningTime] = useState('10:00');
  const [afternoonTime, setAfternoonTime] = useState('14:00');

  const doctors = [
    {
      id: 1,
      name: 'Dr Mary Patricia',
      image: 'https://images.unsplash.com/photo-1758691462477-976f771224d8?w=200&h=200&fit=crop',
    },
    {
      id: 2,
      name: 'Dr Mary Patricia',
      image: 'https://images.unsplash.com/photo-1624727828489-a1e03b79bba8?w=200&h=200&fit=crop',
    },
    {
      id: 3,
      name: 'Dr Catilina Dorty',
      image: 'https://images.unsplash.com/photo-1758691463605-f4a3a92d6d37?w=200&h=200&fit=crop',
    },
    {
      id: 4,
      name: 'Dr Catilina Dorty',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&h=200&fit=crop',
    },
    {
      id: 5,
      name: 'Dr Mary Patricia',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=200&h=200&fit=crop',
    },
    {
      id: 6,
      name: 'Dr Mary Patricia',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop',
    },
  ];

  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month: number, year: number) => {
    return new Date(year, month, 1).getDay();
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(selectedMonth, selectedYear);
    const firstDay = getFirstDayOfMonth(selectedMonth, selectedYear);
    const days = [];

    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} style={{ width: '40px', height: '40px' }} />);
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const isSelected = day === selectedDate;
      days.push(
        <button
          key={day}
          onClick={() => setSelectedDate(day)}
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            border: 'none',
            background: isSelected ? '#00BFA5' : 'transparent',
            color: isSelected ? '#fff' : '#1a1a1a',
            fontSize: '14px',
            fontWeight: isSelected ? '600' : '400',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {day}
        </button>
      );
    }

    return days;
  };

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  if (step === 'doctor') {
    return (
      <div
        style={{
          height: 'calc(var(--vh, 1vh) * 100)',
          width: '100%',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Hospital Consultation Room Background */}
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 0,
          }}
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1758101512269-660feabf64fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMGNvbnN1bHRhdGlvbiUyMHJvb20lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjIwNDcwNzl8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Hospital Consultation Room"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: 0.08,
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(to bottom, rgba(245, 245, 245, 0.95) 0%, rgba(245, 245, 245, 0.98) 100%)',
            }}
          />
        </div>
        {/* Header */}
        <div
          style={{
            paddingLeft: '20px',
            paddingRight: '20px',
            paddingBottom: '20px',
            paddingTop: 'calc(20px + env(safe-area-inset-top))',
            background: '#fff',
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <button
            onClick={() => setStep('date')}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
            }}
          >
            <ChevronLeft size={24} color="#1a1a1a" />
          </button>
          
          <h2 style={{ fontSize: '18px', fontWeight: '600', color: '#1a1a1a', margin: 0 }}>
            Choose a doctor
          </h2>

          <button
            style={{
              marginLeft: 'auto',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            <Menu size={24} color="#1a1a1a" />
          </button>
        </div>

        {/* Search */}
        <div style={{ padding: '20px', background: '#fff', position: 'relative', zIndex: 1 }}>
          <div
            style={{
              position: 'relative',
              maxWidth: '480px',
              margin: '0 auto',
            }}
          >
            <input
              type="text"
              placeholder="All Doctor"
              style={{
                width: '100%',
                padding: '12px 16px 12px 44px',
                borderRadius: '8px',
                border: '1px solid #e0e0e0',
                fontSize: '14px',
                outline: 'none',
              }}
            />
            <Search
              size={20}
              color="#999"
              style={{
                position: 'absolute',
                left: '14px',
                top: '50%',
                transform: 'translateY(-50%)',
              }}
            />
          </div>
        </div>

        {/* Doctors Grid */}
        <div
          style={{
            flex: 1,
            overflowY: 'auto',
            WebkitOverflowScrolling: 'touch',
            padding: '20px',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <div
            style={{
              maxWidth: '480px',
              margin: '0 auto',
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '20px',
            }}
          >
            {doctors.map((doctor) => (
              <button
                key={doctor.id}
                onClick={() => onNavigate('home')}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '12px',
                }}
              >
                <div
                  style={{
                    width: '120px',
                    height: '120px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    border: '3px solid #fff',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </div>
                <p
                  style={{
                    fontSize: '14px',
                    fontWeight: '500',
                    color: '#1a1a1a',
                    margin: 0,
                    textAlign: 'center',
                  }}
                >
                  {doctor.name}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Bottom Navigation */}
        <div
          style={{
            paddingLeft: '20px',
            paddingRight: '20px',
            paddingTop: '16px',
            paddingBottom: 'calc(16px + env(safe-area-inset-bottom))',
            background: '#fff',
            borderTop: '1px solid #f0f0f0',
            display: 'flex',
            justifyContent: 'space-around',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <button
            style={{
              background: 'none',
              border: 'none',
              color: '#999',
              cursor: 'pointer',
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
            </svg>
          </button>
          <button
            style={{
              background: 'none',
              border: 'none',
              color: '#999',
              cursor: 'pointer',
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
          </button>
          <button
            style={{
              background: 'none',
              border: 'none',
              color: '#00BFA5',
              cursor: 'pointer',
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
            </svg>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        height: 'calc(var(--vh, 1vh) * 100)',
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Hospital Examination Room Background */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
        }}
      >
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1758101512269-660feabf64fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZXhhbWluYXRpb24lMjByb29tJTIwbW9kZXJufGVufDF8fHx8MTc2MjA0NzA4MHww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Medical Examination Room"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.08,
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(to bottom, rgba(245, 245, 245, 0.95) 0%, rgba(245, 245, 245, 0.98) 100%)',
          }}
        />
        {/* Warm Glow */}
        <div
          style={{
            position: 'absolute',
            top: '20%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '80%',
            height: '40%',
            background: 'radial-gradient(ellipse at center, rgba(0, 191, 165, 0.08) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
      </div>

      {/* Header */}
      <div
        style={{
          paddingLeft: '20px',
          paddingRight: '20px',
          paddingBottom: '20px',
          paddingTop: 'calc(20px + env(safe-area-inset-top))',
          background: '#fff',
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <button
          onClick={() => onNavigate('home')}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
          }}
        >
          <ChevronLeft size={24} color="#1a1a1a" />
        </button>
        
        <h2 style={{ fontSize: '18px', fontWeight: '600', color: '#1a1a1a', margin: 0 }}>
          Make an appointment
        </h2>

        <button
          style={{
            marginLeft: 'auto',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          <Menu size={24} color="#1a1a1a" />
        </button>
      </div>

      {/* Content */}
      <div
        style={{
          flex: 1,
          overflowY: 'auto',
          WebkitOverflowScrolling: 'touch',
          paddingLeft: '20px',
          paddingRight: '20px',
          paddingTop: '20px',
          paddingBottom: 'calc(100px + env(safe-area-inset-bottom))',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div
          style={{
            maxWidth: '480px',
            margin: '0 auto',
          }}
        >
          {/* Choose a date */}
          <h3
            style={{
              fontSize: '16px',
              fontWeight: '600',
              color: '#1a1a1a',
              margin: '0 0 16px 0',
            }}
          >
            Choose a date
          </h3>

          {/* Calendar */}
          <div
            style={{
              background: '#fff',
              borderRadius: '16px',
              padding: '20px',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
              marginBottom: '32px',
            }}
          >
            {/* Month Header */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '20px',
              }}
            >
              <button
                onClick={() => setSelectedMonth(selectedMonth - 1)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '8px',
                }}
              >
                <ChevronLeft size={20} color="#1a1a1a" />
              </button>

              <span style={{ fontSize: '16px', fontWeight: '600', color: '#1a1a1a' }}>
                {monthNames[selectedMonth]} {selectedYear}
              </span>

              <button
                onClick={() => setSelectedMonth(selectedMonth + 1)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '8px',
                }}
              >
                <ChevronRight size={20} color="#1a1a1a" />
              </button>
            </div>

            {/* Week Days */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(7, 1fr)',
                gap: '8px',
                marginBottom: '12px',
              }}
            >
              {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map((day) => (
                <div
                  key={day}
                  style={{
                    textAlign: 'center',
                    fontSize: '12px',
                    fontWeight: '600',
                    color: '#999',
                  }}
                >
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Days */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(7, 1fr)',
                gap: '8px',
              }}
            >
              {renderCalendar()}
            </div>
          </div>

          {/* Choose a time */}
          <h3
            style={{
              fontSize: '16px',
              fontWeight: '600',
              color: '#1a1a1a',
              margin: '0 0 16px 0',
            }}
          >
            Choose a time
          </h3>

          {/* Time Selection */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '16px',
              marginBottom: '32px',
            }}
          >
            {/* Morning */}
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '8px',
                }}
              >
                <input
                  type="radio"
                  id="morning"
                  name="timeOfDay"
                  checked={selectedTime === 'morning'}
                  onChange={() => setSelectedTime('morning')}
                  style={{ cursor: 'pointer' }}
                />
                <label
                  htmlFor="morning"
                  style={{
                    fontSize: '14px',
                    color: '#666',
                    cursor: 'pointer',
                  }}
                >
                  🌅 Morning
                </label>
              </div>
              <select
                value={morningTime}
                onChange={(e) => setMorningTime(e.target.value)}
                disabled={selectedTime !== 'morning'}
                style={{
                  width: '100%',
                  padding: '12px',
                  borderRadius: '8px',
                  border: '1px solid #e0e0e0',
                  fontSize: '14px',
                  background: '#fff',
                  cursor: 'pointer',
                  opacity: selectedTime === 'morning' ? 1 : 0.5,
                }}
              >
                <option value="08:00">08:00</option>
                <option value="09:00">09:00</option>
                <option value="10:00">10:00</option>
                <option value="11:00">11:00</option>
              </select>
            </div>

            {/* Afternoon */}
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '8px',
                }}
              >
                <input
                  type="radio"
                  id="afternoon"
                  name="timeOfDay"
                  checked={selectedTime === 'afternoon'}
                  onChange={() => setSelectedTime('afternoon')}
                  style={{ cursor: 'pointer' }}
                />
                <label
                  htmlFor="afternoon"
                  style={{
                    fontSize: '14px',
                    color: '#666',
                    cursor: 'pointer',
                  }}
                >
                  ☀️ Afternoon
                </label>
              </div>
              <select
                value={afternoonTime}
                onChange={(e) => setAfternoonTime(e.target.value)}
                disabled={selectedTime !== 'afternoon'}
                style={{
                  width: '100%',
                  padding: '12px',
                  borderRadius: '8px',
                  border: '1px solid #e0e0e0',
                  fontSize: '14px',
                  background: '#fff',
                  cursor: 'pointer',
                  opacity: selectedTime === 'afternoon' ? 1 : 0.5,
                }}
              >
                <option value="13:00">13:00</option>
                <option value="14:00">14:00</option>
                <option value="15:00">15:00</option>
                <option value="16:00">16:00</option>
              </select>
            </div>
          </div>

          {/* Selected DateTime Display */}
          <div
            style={{
              background: '#fff',
              borderRadius: '12px',
              padding: '16px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '20px',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00BFA5" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            <div>
              <p style={{ fontSize: '14px', color: '#1a1a1a', margin: 0, fontWeight: '500' }}>
                {monthNames[selectedMonth]} {selectedDate}, {selectedYear}
              </p>
              <p style={{ fontSize: '12px', color: '#666', margin: 0 }}>
                {selectedTime === 'morning' ? morningTime : afternoonTime}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Button */}
      <div
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          paddingLeft: '20px',
          paddingRight: '20px',
          paddingTop: '16px',
          paddingBottom: 'calc(16px + env(safe-area-inset-bottom))',
          background: '#fff',
          borderTop: '1px solid #f0f0f0',
          zIndex: 10,
        }}
      >
        <Button3D
          onClick={() => setStep('doctor')}
          variant="primary"
          size="lg"
          fullWidth
          style={{
            maxWidth: '480px',
            margin: '0 auto',
            display: 'block',
          }}
        >
          Next - Find a doctor
        </Button3D>
      </div>
    </div>
  );
}
