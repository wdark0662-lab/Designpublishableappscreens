import { ArrowLeft, Heart, Star, Video, Calendar, Moon, Sun } from 'lucide-react';
import { Screen } from '../App';
import { ImageWithFallback } from './figma/ImageWithFallback';
import BottomNav from './BottomNav';
import { useTheme } from '../contexts/ThemeContext';

interface FavoriteDoctorsScreenProps {
  onNavigate: (screen: Screen) => void;
}

export default function FavoriteDoctorsScreen({ onNavigate }: FavoriteDoctorsScreenProps) {
  const { theme, toggleTheme, colors } = useTheme();

  const favoriteDoctors = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      specialty: 'Cardiology',
      rating: 4.9,
      reviews: 256,
      experience: '15 years',
      image: 'https://images.unsplash.com/photo-1758691462477-976f771224d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBkb2N0b3IlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzYyMDA1NjI0fDA&ixlib=rb-4.1.0&q=80&w=400',
      available: true,
      price: '$150',
      hospital: 'City General Hospital',
      consultations: 12,
    },
    {
      id: 2,
      name: 'Dr. Michael Chen',
      specialty: 'Neurology',
      rating: 4.8,
      reviews: 312,
      experience: '18 years',
      image: 'https://images.unsplash.com/photo-1758691463605-f4a3a92d6d37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwZG9jdG9yJTIwbWVkaWNhbHxlbnwxfHx8fDE3NjIwMTQ0NzZ8MA&ixlib=rb-4.1.0&q=80&w=400',
      available: true,
      price: '$160',
      hospital: 'Metro Medical Center',
      consultations: 8,
    },
    {
      id: 3,
      name: 'Dr. Lisa Anderson',
      specialty: 'Psychiatry',
      rating: 4.9,
      reviews: 423,
      experience: '16 years',
      image: 'https://images.unsplash.com/photo-1624727828489-a1e03b79bba8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxudXJzZSUyMGhlYWx0aGNhcmUlMjB3b3JrZXJ8ZW58MXx8fHwxNzYxOTM5MzQzfDA&ixlib=rb-4.1.0&q=80&w=400',
      available: false,
      price: '$145',
      hospital: 'Mental Wellness Clinic',
      consultations: 15,
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
            Favorite Doctors
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
          {favoriteDoctors.length} doctors in your favorites
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
            {/* Doctors List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {favoriteDoctors.map((doctor) => (
                <div
                  key={doctor.id}
                  style={{
                    background: colors.cardBackground,
                    borderRadius: '24px',
                    overflow: 'hidden',
                    boxShadow: `0 8px 32px ${colors.shadow}, inset 0 -3px 0 ${colors.border}`,
                    border: `1px solid ${colors.border}`,
                  }}
                >
                  {/* Doctor Image */}
                  <div style={{ position: 'relative', height: '180px', overflow: 'hidden' }}>
                    <ImageWithFallback
                      src={doctor.image}
                      alt={doctor.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />

                    {/* Favorite Badge */}
                    <div
                      style={{
                        position: 'absolute',
                        top: '16px',
                        right: '16px',
                        width: '44px',
                        height: '44px',
                        borderRadius: '12px',
                        background: 'rgba(239, 68, 68, 0.95)',
                        backdropFilter: 'blur(10px)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                      }}
                    >
                      <Heart size={20} color="#fff" fill="#fff" />
                    </div>

                    {/* Availability */}
                    <div
                      style={{
                        position: 'absolute',
                        top: '16px',
                        left: '16px',
                        padding: '8px 16px',
                        borderRadius: '12px',
                        background: doctor.available
                          ? 'rgba(16, 185, 129, 0.95)'
                          : 'rgba(239, 68, 68, 0.95)',
                        backdropFilter: 'blur(10px)',
                        color: '#fff',
                        fontSize: '12px',
                        fontWeight: '600',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                      }}
                    >
                      <div
                        style={{
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          backgroundColor: '#fff',
                        }}
                      />
                      {doctor.available ? 'Available' : 'Busy'}
                    </div>

                    {/* Gradient Overlay */}
                    <div
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '60%',
                        background: 'linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent)',
                      }}
                    />
                  </div>

                  {/* Doctor Info */}
                  <div style={{ padding: '20px' }}>
                    <div style={{ marginBottom: '16px' }}>
                      <h3
                        style={{
                          fontSize: '20px',
                          fontWeight: '700',
                          color: colors.text,
                          margin: '0 0 6px 0',
                        }}
                      >
                        {doctor.name}
                      </h3>
                      <p
                        style={{
                          fontSize: '14px',
                          color: colors.primary,
                          fontWeight: '600',
                          margin: '0 0 4px 0',
                        }}
                      >
                        {doctor.specialty}
                      </p>
                      <p style={{ fontSize: '13px', color: colors.textSecondary, margin: 0 }}>
                        📍 {doctor.hospital}
                      </p>
                    </div>

                    {/* Stats */}
                    <div
                      style={{
                        display: 'flex',
                        gap: '16px',
                        marginBottom: '16px',
                        paddingBottom: '16px',
                        borderBottom: `1px solid ${colors.border}`,
                      }}
                    >
                      <div style={{ flex: 1 }}>
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px',
                            marginBottom: '4px',
                          }}
                        >
                          <Star size={16} color="#f59e0b" fill="#f59e0b" />
                          <span style={{ fontSize: '14px', fontWeight: '700', color: colors.text }}>
                            {doctor.rating}
                          </span>
                        </div>
                        <p style={{ fontSize: '12px', color: colors.textSecondary, margin: 0 }}>
                          {doctor.reviews} reviews
                        </p>
                      </div>

                      <div style={{ flex: 1 }}>
                        <p
                          style={{
                            fontSize: '14px',
                            fontWeight: '700',
                            color: colors.text,
                            margin: '0 0 4px 0',
                          }}
                        >
                          {doctor.consultations}
                        </p>
                        <p style={{ fontSize: '12px', color: colors.textSecondary, margin: 0 }}>
                          Consultations
                        </p>
                      </div>

                      <div style={{ flex: 1 }}>
                        <p
                          style={{
                            fontSize: '14px',
                            fontWeight: '700',
                            color: colors.text,
                            margin: '0 0 4px 0',
                          }}
                        >
                          {doctor.price}
                        </p>
                        <p style={{ fontSize: '12px', color: colors.textSecondary, margin: 0 }}>
                          Per Visit
                        </p>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
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
                          gap: '6px',
                          touchAction: 'manipulation',
                          WebkitTapHighlightColor: 'transparent',
                          boxShadow: `0 4px 12px ${colors.primary}25, inset 0 -2px 0 ${colors.primary}15`,
                        }}
                      >
                        <Video size={18} />
                        Video Call
                      </button>

                      <button
                        disabled={!doctor.available}
                        style={{
                          padding: '14px',
                          borderRadius: '14px',
                          border: 'none',
                          background: doctor.available ? colors.primaryGradient : colors.textSecondary,
                          color: '#fff',
                          fontSize: '14px',
                          fontWeight: '600',
                          cursor: doctor.available ? 'pointer' : 'not-allowed',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '6px',
                          touchAction: 'manipulation',
                          WebkitTapHighlightColor: 'transparent',
                          boxShadow: doctor.available
                            ? `0 6px 20px ${colors.primary}40, inset 0 -2px 0 rgba(0, 0, 0, 0.15)`
                            : 'none',
                        }}
                      >
                        <Calendar size={18} />
                        Book Now
                      </button>
                    </div>
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
