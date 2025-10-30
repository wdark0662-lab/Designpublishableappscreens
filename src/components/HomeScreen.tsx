import AppIcon from './AppIcon';

interface HomeScreenProps {
  colors: any;
  onNavigate: (screen: string) => void;
}

export default function HomeScreen({ colors, onNavigate }: HomeScreenProps) {
  const cardStyle = {
    backgroundColor: colors.surface,
    borderRadius: '16px',
    border: `1px solid ${colors.border}`,
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
  };

  return (
    <div style={{ 
      minHeight: '100%',
      backgroundColor: colors.background,
      paddingBottom: '24px',
    }}>
      {/* Header Section */}
      <div style={{
        background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryDark} 100%)`,
        padding: '24px 16px 32px',
        borderBottomLeftRadius: '24px',
        borderBottomRightRadius: '24px',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
          <AppIcon size={56} />
          <div>
            <p style={{ fontSize: '14px', color: '#bfdbfe', margin: 0 }}>Welcome to</p>
            <h1 style={{ fontSize: '24px', color: '#fff', margin: 0, fontWeight: 600 }}>Benefits Guide</h1>
          </div>
        </div>

        {/* Status Card */}
        <div style={{ ...cardStyle, padding: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
            <span style={{ fontSize: '20px' }}>✅</span>
            <span style={{ fontSize: '16px', color: colors.text, fontWeight: 500 }}>System Active</span>
          </div>
          <p style={{ fontSize: '14px', color: colors.textSecondary, margin: 0, lineHeight: 1.5 }}>
            Check your eligibility and calculate potential benefits instantly
          </p>
        </div>
      </div>

      {/* Quick Actions */}
      <div style={{ padding: '24px 16px 0' }}>
        <h2 style={{ fontSize: '18px', color: colors.text, marginBottom: '16px', fontWeight: 600 }}>
          Quick Actions
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <button
            onClick={() => onNavigate('eligibility')}
            style={{
              ...cardStyle,
              padding: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              border: `1px solid ${colors.border}`,
              cursor: 'pointer',
              minHeight: '44px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flex: 1 }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                backgroundColor: colors.primary,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '24px',
              }}>
                🛡️
              </div>
              <div style={{ textAlign: 'left' }}>
                <h3 style={{ fontSize: '16px', color: colors.text, margin: '0 0 4px 0', fontWeight: 500 }}>
                  Check Eligibility
                </h3>
                <p style={{ fontSize: '14px', color: colors.textSecondary, margin: 0 }}>
                  See if you qualify
                </p>
              </div>
            </div>
            <span style={{ fontSize: '20px', color: colors.textSecondary }}>›</span>
          </button>

          <button
            onClick={() => onNavigate('calculator')}
            style={{
              ...cardStyle,
              padding: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              border: `1px solid ${colors.border}`,
              cursor: 'pointer',
              minHeight: '44px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flex: 1 }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                backgroundColor: colors.green,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '24px',
              }}>
                🧮
              </div>
              <div style={{ textAlign: 'left' }}>
                <h3 style={{ fontSize: '16px', color: colors.text, margin: '0 0 4px 0', fontWeight: 500 }}>
                  Calculate Benefits
                </h3>
                <p style={{ fontSize: '14px', color: colors.textSecondary, margin: 0 }}>
                  Estimate your amount
                </p>
              </div>
            </div>
            <span style={{ fontSize: '20px', color: colors.textSecondary }}>›</span>
          </button>
        </div>
      </div>

      {/* Learn More Section */}
      <div style={{ padding: '32px 16px 0' }}>
        <h2 style={{ fontSize: '18px', color: colors.text, marginBottom: '16px', fontWeight: 600 }}>
          Learn More
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <button
            onClick={() => onNavigate('guide')}
            style={{
              ...cardStyle,
              padding: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              border: `1px solid ${colors.border}`,
              cursor: 'pointer',
              minHeight: '44px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '8px',
                backgroundColor: colors.surfaceLight,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px',
              }}>
                📖
              </div>
              <span style={{ fontSize: '16px', color: colors.text }}>Program Guide</span>
            </div>
            <span style={{ fontSize: '20px', color: colors.textSecondary }}>›</span>
          </button>

          <button
            onClick={() => onNavigate('faq')}
            style={{
              ...cardStyle,
              padding: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              border: `1px solid ${colors.border}`,
              cursor: 'pointer',
              minHeight: '44px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '8px',
                backgroundColor: colors.surfaceLight,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px',
              }}>
                ❓
              </div>
              <span style={{ fontSize: '16px', color: colors.text }}>FAQ</span>
            </div>
            <span style={{ fontSize: '20px', color: colors.textSecondary }}>›</span>
          </button>
        </div>
      </div>

      {/* Info Banner */}
      <div style={{ padding: '32px 16px 0' }}>
        <div style={{
          background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryDark} 100%)`,
          borderRadius: '16px',
          padding: '24px',
        }}>
          <div style={{ display: 'flex', gap: '12px' }}>
            <span style={{ fontSize: '20px', marginTop: '2px' }}>❤️</span>
            <div>
              <h3 style={{ fontSize: '18px', color: '#fff', margin: '0 0 8px 0', fontWeight: 600 }}>
                Free & Confidential
              </h3>
              <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.9)', margin: 0, lineHeight: 1.5 }}>
                All tools are completely free to use and your information remains confidential.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
