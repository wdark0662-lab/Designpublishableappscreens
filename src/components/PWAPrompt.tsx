import { useState, useEffect } from 'react';
import { Download, X } from 'lucide-react';

interface PWAPromptProps {
  colors: any;
}

export default function PWAPrompt({ colors }: PWAPromptProps) {
  const [showPrompt, setShowPrompt] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    // Check if iOS
    const ios = /iphone|ipad|ipod/.test(window.navigator.userAgent.toLowerCase());
    setIsIOS(ios);

    // Check if already installed
    const standalone = 
      window.matchMedia('(display-mode: standalone)').matches ||
      (window.navigator as any).standalone ||
      document.referrer.includes('android-app://');
    setIsStandalone(standalone);

    // Check if user dismissed the prompt before
    const dismissed = localStorage.getItem('pwa-prompt-dismissed');
    
    // Show prompt if iOS, not standalone, not dismissed, and visited before
    const visitCount = parseInt(localStorage.getItem('visit-count') || '0');
    localStorage.setItem('visit-count', (visitCount + 1).toString());

    if (ios && !standalone && !dismissed && visitCount >= 2) {
      setTimeout(() => setShowPrompt(true), 3000); // Show after 3 seconds
    }
  }, []);

  const handleDismiss = () => {
    setShowPrompt(false);
    localStorage.setItem('pwa-prompt-dismissed', 'true');
  };

  if (!showPrompt || !isIOS || isStandalone) {
    return null;
  }

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '80px', // Above bottom navigation
        left: '16px',
        right: '16px',
        maxWidth: '448px',
        margin: '0 auto',
        zIndex: 1000,
        animation: 'slideUp 0.3s ease-out',
      }}
    >
      <div
        style={{
          backgroundColor: colors.surface,
          borderRadius: '16px',
          padding: '20px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
          border: `1px solid ${colors.border}`,
        }}
      >
        <button
          onClick={handleDismiss}
          style={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            width: '32px',
            height: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: colors.textSecondary,
            borderRadius: '8px',
          }}
          aria-label="Fechar"
        >
          <X size={20} />
        </button>

        <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
          <div
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryDark} 100%)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <Download size={24} color="#fff" />
          </div>

          <div style={{ flex: 1, paddingRight: '24px' }}>
            <h3
              style={{
                fontSize: '16px',
                fontWeight: '600',
                color: colors.text,
                marginBottom: '8px',
              }}
            >
              Instalar o App
            </h3>
            <p
              style={{
                fontSize: '14px',
                color: colors.textSecondary,
                lineHeight: '20px',
                marginBottom: '12px',
              }}
            >
              Adicione o Guia de Benefícios à sua tela inicial para acesso rápido
            </p>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px',
                backgroundColor: colors.surfaceLight,
                borderRadius: '8px',
                fontSize: '13px',
                color: colors.textSecondary,
              }}
            >
              <span style={{ fontSize: '18px' }}>📱</span>
              <div>
                <div>1. Toque no botão <strong>Compartilhar</strong></div>
                <div>2. Selecione <strong>"Adicionar à Tela Inicial"</strong></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes slideUp {
            from {
              transform: translateY(100%);
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
