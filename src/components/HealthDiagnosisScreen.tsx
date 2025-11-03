import { Menu, CheckCircle } from 'lucide-react';
import { Screen } from '../App';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import Button3D from './Button3D';

interface HealthDiagnosisScreenProps {
  userName: string;
  onNavigate: (screen: Screen) => void;
}

export default function HealthDiagnosisScreen({ userName, onNavigate }: HealthDiagnosisScreenProps) {
  const [step, setStep] = useState<'welcome' | 'evaluation' | 'results'>('welcome');
  const [answers, setAnswers] = useState<{ [key: string]: boolean }>({});

  const questions = [
    { id: 'q1', text: 'Good afternoon, How can I help?' },
    { id: 'q2', text: 'What kind of illness do you have?' },
    { id: 'q3', text: 'Do you feel like you have a fever or chills for the past 2 days?' },
    { id: 'q4', text: 'Hi, What is your name or the diagnosis?' },
  ];

  const diagnoses = [
    {
      id: 1,
      name: 'Diagnostics',
      conditions: ['Little Loosies', 'Hematemesis', 'Photosensitivity'],
      percentage: 15,
      color: '#00BFA5',
      recommendation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 2,
      name: 'Diagnosis 2',
      conditions: ['Fever moderate', 'Nosebleed'],
      percentage: 35,
      color: '#00BFA5',
      recommendation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 3,
      name: 'Diagnosis 3',
      conditions: ['Damp cloth', 'Urethrobulbar injury'],
      percentage: 18,
      color: '#00BFA5',
      recommendation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ];

  const emergencyLevel = {
    text: 'Level of urgency for attend the hospital',
    urgency: 'Low urgency',
    level: 'Level of urgency',
    percentage: 12,
  };

  if (step === 'welcome') {
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
        {/* Examination Room Background */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 0,
          }}
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1758691462814-485c3672e447?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZXhhbWluYXRpb24lMjByb29tfGVufDF8fHx8MTc2MTk2NzIyOHww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Medical Examination Room"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              filter: 'brightness(0.35) blur(2px)',
            }}
          />
          {/* Teal Gradient Overlay */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(135deg, rgba(0, 191, 165, 0.9) 0%, rgba(0, 137, 123, 0.92) 100%)',
            }}
          />
          {/* Warm Ambient Light */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'radial-gradient(circle at 50% 30%, rgba(255, 200, 100, 0.12) 0%, transparent 60%)',
            }}
          />
        </div>
        {/* Header */}
        <div
          style={{
            padding: '20px',
            paddingTop: 'calc(20px + env(safe-area-inset-top))',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <button
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <Menu size={24} color="#fff" />
          </button>
          
          <span style={{ color: '#fff', fontSize: '16px', fontWeight: '500' }}>
            Welcome
          </span>

          <div
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: '#fff',
              overflow: 'hidden',
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
              alt="User"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>

        {/* Content */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '40px 20px',
            maxWidth: '480px',
            margin: '0 auto',
            width: '100%',
          }}
        >
          <h1
            style={{
              fontSize: '48px',
              fontWeight: '700',
              color: '#fff',
              textAlign: 'center',
              margin: '0 0 40px 0',
              letterSpacing: '2px',
              lineHeight: '1.2',
            }}
          >
            HEALTH
            <br />
            DIAGNOSIS
          </h1>

          <p
            style={{
              fontSize: '16px',
              color: 'rgba(255, 255, 255, 0.9)',
              textAlign: 'center',
              margin: '0 0 60px 0',
              lineHeight: '1.6',
            }}
          >
            Hello {userName || 'James Parker'}
            <br />
            explore me your symptoms
          </p>

          <Button3D
            onClick={() => setStep('evaluation')}
            variant="white"
            size="large"
            style={{
              width: '100%',
              maxWidth: '320px',
            }}
          >
            Start the evaluation
          </Button3D>
        </div>

        {/* Bottom Navigation */}
        <div
          style={{
            padding: '20px',
            paddingBottom: 'calc(20px + env(safe-area-inset-bottom))',
            display: 'flex',
            justifyContent: 'space-around',
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <button style={{ background: 'none', border: 'none', color: 'rgba(255, 255, 255, 0.7)' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </svg>
          </button>
          <button style={{ background: 'none', border: 'none', color: '#fff' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z" />
            </svg>
          </button>
          <button style={{ background: 'none', border: 'none', color: 'rgba(255, 255, 255, 0.7)' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </button>
        </div>
      </div>
    );
  }

  if (step === 'evaluation') {
    return (
      <div
        style={{
          height: 'calc(var(--vh, 1vh) * 100)',
          width: '100%',
          background: '#f5f5f5',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: '20px',
            paddingTop: 'calc(20px + env(safe-area-inset-top))',
            background: '#fff',
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
          }}
        >
          <button
            onClick={() => setStep('welcome')}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </button>
          
          <h2 style={{ fontSize: '18px', fontWeight: '600', color: '#1a1a1a', margin: 0 }}>
            Evaluation
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
            padding: '20px',
          }}
        >
          <div
            style={{
              maxWidth: '480px',
              margin: '0 auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}
          >
            {/* Question Cards */}
            {questions.map((question, index) => (
              <div
                key={question.id}
                style={{
                  background: '#fff',
                  borderRadius: '12px',
                  padding: '16px',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px',
                }}
              >
                <CheckCircle
                  size={20}
                  color="#00BFA5"
                  fill={answers[question.id] ? '#00BFA5' : 'none'}
                  style={{ flexShrink: 0, marginTop: '2px', cursor: 'pointer' }}
                  onClick={() => setAnswers({ ...answers, [question.id]: !answers[question.id] })}
                />
                <p style={{ fontSize: '14px', color: '#1a1a1a', margin: 0, lineHeight: '1.5' }}>
                  {question.text}
                </p>
              </div>
            ))}

            {/* Action Cards */}
            <div
              style={{
                background: 'linear-gradient(135deg, #00BFA5 0%, #00897B 100%)',
                borderRadius: '12px',
                padding: '20px',
                color: '#fff',
                boxShadow: '0 4px 12px rgba(0, 191, 165, 0.3)',
              }}
            >
              <p style={{ fontSize: '14px', margin: '0 0 8px 0', lineHeight: '1.5' }}>
                I think like you maybe have a fever or chills for the past 2 days
              </p>
              <span style={{ fontSize: '12px', opacity: 0.9 }}>at 10:48 AM</span>
            </div>

            <div
              style={{
                background: 'linear-gradient(135deg, #00BFA5 0%, #00897B 100%)',
                borderRadius: '12px',
                padding: '20px',
                color: '#fff',
                boxShadow: '0 4px 12px rgba(0, 191, 165, 0.3)',
              }}
            >
              <p style={{ fontSize: '14px', margin: '0 0 8px 0', lineHeight: '1.5' }}>
                Hi, What is your name or the diagnosis
              </p>
              <span style={{ fontSize: '12px', opacity: 0.9 }}>at 10:48 AM</span>
            </div>

            {/* Message Input */}
            <div
              style={{
                display: 'flex',
                gap: '12px',
                alignItems: 'center',
                marginTop: '20px',
              }}
            >
              <button
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  border: '1px solid #e0e0e0',
                  background: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666">
                  <path d="M12 5v14M5 12h14" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>

              <input
                type="text"
                placeholder="Write message..."
                style={{
                  flex: 1,
                  padding: '12px 16px',
                  borderRadius: '24px',
                  border: '1px solid #e0e0e0',
                  background: '#fff',
                  fontSize: '14px',
                  outline: 'none',
                }}
              />

              <button
                onClick={() => setStep('results')}
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  border: 'none',
                  background: '#00BFA5',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  boxShadow: '0 4px 12px rgba(0, 191, 165, 0.3)',
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                  <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Results view
  return (
    <div
      style={{
        height: 'calc(var(--vh, 1vh) * 100)',
        width: '100%',
        background: '#f5f5f5',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: '20px',
          paddingTop: 'calc(20px + env(safe-area-inset-top))',
          background: '#fff',
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
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
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </button>
        
        <h2 style={{ fontSize: '18px', fontWeight: '600', color: '#1a1a1a', margin: 0 }}>
          Welcome
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
          padding: '20px',
          paddingBottom: 'calc(80px + env(safe-area-inset-bottom))',
        }}
      >
        <div
          style={{
            maxWidth: '480px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}
        >
          <p style={{ fontSize: '14px', color: '#666', margin: 0 }}>
            Good afternoon, How can I help?
          </p>

          {/* Diagnosis Title */}
          <h1
            style={{
              fontSize: '32px',
              fontWeight: '700',
              color: '#00BFA5',
              margin: '20px 0',
            }}
          >
            Diagnostics
          </h1>

          <p style={{ fontSize: '14px', color: '#666', margin: 0 }}>
            3 Possible diagnoses
          </p>

          {/* Diagnosis Cards */}
          {diagnoses.map((diagnosis) => (
            <div
              key={diagnosis.id}
              style={{
                background: '#fff',
                borderRadius: '16px',
                padding: '20px',
                boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '16px' }}>
                <div>
                  <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1a1a1a', margin: '0 0 8px 0' }}>
                    {diagnosis.name} {diagnosis.id}
                  </h3>
                  <ul style={{ margin: 0, paddingLeft: '20px' }}>
                    {diagnosis.conditions.map((condition, index) => (
                      <li key={index} style={{ fontSize: '13px', color: '#666', marginBottom: '4px' }}>
                        {condition}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Circular Progress */}
                <div
                  style={{
                    position: 'relative',
                    width: '60px',
                    height: '60px',
                    flexShrink: 0,
                  }}
                >
                  <svg width="60" height="60" viewBox="0 0 60 60" style={{ transform: 'rotate(-90deg)' }}>
                    <circle
                      cx="30"
                      cy="30"
                      r="26"
                      fill="none"
                      stroke="#f0f0f0"
                      strokeWidth="4"
                    />
                    <circle
                      cx="30"
                      cy="30"
                      r="26"
                      fill="none"
                      stroke="#00BFA5"
                      strokeWidth="4"
                      strokeDasharray={`${(diagnosis.percentage / 100) * 163.36} 163.36`}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      fontSize: '14px',
                      fontWeight: '700',
                      color: '#00BFA5',
                    }}
                  >
                    {diagnosis.percentage}%
                  </div>
                </div>
              </div>

              <div style={{ marginBottom: '16px' }}>
                <p style={{ fontSize: '13px', fontWeight: '600', color: '#1a1a1a', margin: '0 0 8px 0' }}>
                  Recommendation
                </p>
                <p style={{ fontSize: '13px', color: '#666', margin: 0, lineHeight: '1.6' }}>
                  {diagnosis.recommendation}
                </p>
              </div>

              <button
                onClick={() => onNavigate('appointments')}
                style={{
                  width: '100%',
                  padding: '14px',
                  borderRadius: '24px',
                  border: 'none',
                  background: '#00BFA5',
                  color: '#fff',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  boxShadow: '0 4px 12px rgba(0, 191, 165, 0.3)',
                }}
              >
                Make an appointment
              </button>
            </div>
          ))}

          {/* Emergencies */}
          <h2
            style={{
              fontSize: '24px',
              fontWeight: '700',
              color: '#00BFA5',
              margin: '20px 0 16px 0',
            }}
          >
            Emergencies
          </h2>

          <div
            style={{
              background: '#fff',
              borderRadius: '16px',
              padding: '20px',
              boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1a1a1a', margin: '0 0 8px 0' }}>
                  {emergencyLevel.text}
                </h3>
                <p style={{ fontSize: '13px', color: '#666', margin: 0 }}>
                  {emergencyLevel.urgency}
                </p>
              </div>

              {/* Circular Progress */}
              <div
                style={{
                  position: 'relative',
                  width: '60px',
                  height: '60px',
                  flexShrink: 0,
                }}
              >
                <svg width="60" height="60" viewBox="0 0 60 60" style={{ transform: 'rotate(-90deg)' }}>
                  <circle
                    cx="30"
                    cy="30"
                    r="26"
                    fill="none"
                    stroke="#f0f0f0"
                    strokeWidth="4"
                  />
                  <circle
                    cx="30"
                    cy="30"
                    r="26"
                    fill="none"
                    stroke="#00BFA5"
                    strokeWidth="4"
                    strokeDasharray={`${(emergencyLevel.percentage / 100) * 163.36} 163.36`}
                    strokeLinecap="round"
                  />
                </svg>
                <div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    fontSize: '14px',
                    fontWeight: '700',
                    color: '#00BFA5',
                  }}
                >
                  {emergencyLevel.percentage}%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          padding: '16px 20px',
          paddingBottom: 'calc(16px + env(safe-area-inset-bottom))',
          background: '#fff',
          borderTop: '1px solid #f0f0f0',
          display: 'flex',
          justifyContent: 'space-around',
        }}
      >
        <button
          style={{
            background: 'none',
            border: 'none',
            color: '#999',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '4px',
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
            color: '#00BFA5',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '4px',
            cursor: 'pointer',
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
          </svg>
        </button>
        <button
          style={{
            background: 'none',
            border: 'none',
            color: '#999',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '4px',
            cursor: 'pointer',
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
