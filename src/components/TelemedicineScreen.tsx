import { ArrowLeft, Video, Phone, MessageSquare, Clock } from 'lucide-react';
import { Screen } from '../App';
import BottomNav from './BottomNav';

interface TelemedicineScreenProps {
  onNavigate: (screen: Screen) => void;
}

export default function TelemedicineScreen({ onNavigate }: TelemedicineScreenProps) {
  const consultationTypes = [
    {
      id: 'video',
      icon: Video,
      title: 'Video Consultation',
      description: 'Face-to-face consultation with doctors',
      duration: '30 min',
      price: '$80',
      color: '#3b82f6',
      gradient: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
    },
    {
      id: 'voice',
      icon: Phone,
      title: 'Voice Call',
      description: 'Quick consultation via phone call',
      duration: '20 min',
      price: '$50',
      color: '#10b981',
      gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
    },
    {
      id: 'chat',
      icon: MessageSquare,
      title: 'Chat Consultation',
      description: 'Text-based medical consultation',
      duration: '24 hrs',
      price: '$30',
      color: '#8b5cf6',
      gradient: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
    },
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
      {/* Header with Gradient */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          padding: '20px',
          paddingTop: 'calc(20px + env(safe-area-inset-top))',
          background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
          paddingBottom: '40px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
          <button
            onClick={() => onNavigate('home')}
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
              touchAction: 'manipulation',
              WebkitTapHighlightColor: 'transparent',
            }}
          >
            <ArrowLeft size={20} color="#fff" />
          </button>
          
          <h1 style={{ fontSize: '28px', fontWeight: '700', color: '#fff', margin: 0 }}>
            Telemedicine
          </h1>
        </div>

        <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.9)', margin: 0 }}>
          Consult with doctors anytime, anywhere
        </p>
      </div>

      {/* Content */}
      <div
        style={{
          position: 'relative',
          height: 'calc(100% - 140px)',
          maxWidth: '480px',
          margin: '-20px auto 0',
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
            {/* Consultation Types */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
              {consultationTypes.map((type) => {
                const Icon = type.icon;
                return (
                  <div
                    key={type.id}
                    style={{
                      background: '#fff',
                      borderRadius: '24px',
                      padding: '24px',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08), inset 0 -3px 0 rgba(0, 0, 0, 0.03)',
                      border: '1px solid rgba(0, 0, 0, 0.05)',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
                    <div style={{ display: 'flex', gap: '16px', marginBottom: '20px' }}>
                      <div
                        style={{
                          width: '64px',
                          height: '64px',
                          borderRadius: '18px',
                          background: type.gradient,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: `0 8px 24px ${type.color}40`,
                          flexShrink: 0,
                        }}
                      >
                        <Icon size={32} color="#fff" />
                      </div>

                      <div style={{ flex: 1 }}>
                        <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#0f172a', margin: '0 0 6px 0' }}>
                          {type.title}
                        </h3>
                        <p style={{ fontSize: '14px', color: '#64748b', margin: 0, lineHeight: '1.5' }}>
                          {type.description}
                        </p>
                      </div>
                    </div>

                    {/* Info Pills */}
                    <div style={{ display: 'flex', gap: '12px', marginBottom: '20px' }}>
                      <div
                        style={{
                          padding: '8px 16px',
                          borderRadius: '12px',
                          background: `${type.color}15`,
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                        }}
                      >
                        <Clock size={16} color={type.color} />
                        <span style={{ fontSize: '13px', fontWeight: '600', color: type.color }}>
                          {type.duration}
                        </span>
                      </div>

                      <div
                        style={{
                          padding: '8px 16px',
                          borderRadius: '12px',
                          background: `${type.color}15`,
                        }}
                      >
                        <span style={{ fontSize: '13px', fontWeight: '700', color: type.color }}>
                          {type.price}
                        </span>
                      </div>
                    </div>

                    {/* Start Button */}
                    <button
                      style={{
                        width: '100%',
                        padding: '16px',
                        borderRadius: '16px',
                        border: 'none',
                        background: type.gradient,
                        color: '#fff',
                        fontSize: '16px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        touchAction: 'manipulation',
                        WebkitTapHighlightColor: 'transparent',
                        boxShadow: `0 8px 24px ${type.color}40, inset 0 -2px 0 rgba(0, 0, 0, 0.1)`,
                        transform: 'translateY(0)',
                        transition: 'all 0.2s ease',
                      }}
                      onMouseDown={(e) => {
                        e.currentTarget.style.transform = 'translateY(2px)';
                        e.currentTarget.style.boxShadow = `0 4px 12px ${type.color}30, inset 0 -1px 0 rgba(0, 0, 0, 0.1)`;
                      }}
                      onMouseUp={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = `0 8px 24px ${type.color}40, inset 0 -2px 0 rgba(0, 0, 0, 0.1)`;
                      }}
                      onTouchStart={(e) => {
                        e.currentTarget.style.transform = 'translateY(2px)';
                      }}
                      onTouchEnd={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}
                    >
                      Start Consultation
                    </button>

                    {/* Decorative Circle */}
                    <div
                      style={{
                        position: 'absolute',
                        top: '-40px',
                        right: '-40px',
                        width: '120px',
                        height: '120px',
                        borderRadius: '50%',
                        background: `${type.color}10`,
                        pointerEvents: 'none',
                      }}
                    />
                  </div>
                );
              })}
            </div>

            {/* Info Card */}
            <div
              style={{
                background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
                borderRadius: '20px',
                padding: '20px',
                border: '1px solid rgba(59, 130, 246, 0.2)',
              }}
            >
              <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#0f172a', margin: '0 0 12px 0' }}>
                💡 How it works
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  'Select your preferred consultation type',
                  'Choose an available doctor or get matched',
                  'Start your consultation at scheduled time',
                  'Receive prescription and medical advice',
                ].map((step, index) => (
                  <div key={index} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <div
                      style={{
                        width: '24px',
                        height: '24px',
                        borderRadius: '8px',
                        background: '#3b82f6',
                        color: '#fff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '12px',
                        fontWeight: '700',
                        flexShrink: 0,
                      }}
                    >
                      {index + 1}
                    </div>
                    <p style={{ fontSize: '14px', color: '#0f172a', margin: 0, lineHeight: '24px' }}>
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <BottomNav currentScreen="telemedicine" onNavigate={onNavigate} />
      </div>
    </div>
  );
}
