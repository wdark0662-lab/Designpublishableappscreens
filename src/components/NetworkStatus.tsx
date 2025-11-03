import { useState, useEffect } from 'react';
import { WifiOff, Wifi } from 'lucide-react';

interface NetworkStatusProps {
  colors: any;
}

export default function NetworkStatus({ colors }: NetworkStatusProps) {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [showOffline, setShowOffline] = useState(false);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      setShowOffline(false);
      // Show brief "back online" message
      setTimeout(() => {
        setShowOffline(false);
      }, 3000);
    };

    const handleOffline = () => {
      setIsOnline(false);
      setShowOffline(true);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Show offline status if already offline
    if (!navigator.onLine) {
      setShowOffline(true);
    }

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (!showOffline && isOnline) {
    return null;
  }

  return (
    <div
      style={{
        position: 'fixed',
        top: 'calc(56px + env(safe-area-inset-top))',
        left: 0,
        right: 0,
        zIndex: 100,
        animation: 'slideDown 0.3s ease-out',
      }}
    >
      <div
        style={{
          backgroundColor: isOnline ? '#10b981' : '#ef4444',
          color: '#fff',
          padding: '12px 16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          fontSize: '14px',
          fontWeight: '500',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        {isOnline ? <Wifi size={18} /> : <WifiOff size={18} />}
        <span>
          {isOnline ? 'Conexão restabelecida' : 'Sem conexão com a internet'}
        </span>
      </div>

      <style>
        {`
          @keyframes slideDown {
            from {
              transform: translateY(-100%);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }
        `}
      </style>
    </div>
  );
}
