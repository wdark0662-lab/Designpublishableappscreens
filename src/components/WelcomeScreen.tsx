interface WelcomeScreenProps {
  colors: any;
  onLogin: () => void;
  onSignUp: () => void;
}

// 3D Icon Components
function ShieldIcon3D() {
  return (
    <svg width={80} height={80} viewBox="0 0 80 80">
      <defs>
        <radialGradient id="shieldGrad" cx="50%" cy="30%">
          <stop offset="0%" stopColor="#60a5fa" stopOpacity="1" />
          <stop offset="100%" stopColor="#2563eb" stopOpacity="1" />
        </radialGradient>
      </defs>
      <circle cx="40" cy="45" r="28" fill="url(#shieldGrad)" opacity="0.3" />
      <path
        d="M40 15L25 22C25 32 28 45 40 55C52 45 55 32 55 22L40 15Z"
        fill="url(#shieldGrad)"
        stroke="#1e40af"
        strokeWidth="2"
      />
      <path
        d="M35 35L38 38L45 31"
        stroke="#fff"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

function CalculatorIcon3D() {
  return (
    <svg width={80} height={80} viewBox="0 0 80 80">
      <defs>
        <radialGradient id="calcGrad" cx="50%" cy="30%">
          <stop offset="0%" stopColor="#34d399" stopOpacity="1" />
          <stop offset="100%" stopColor="#059669" stopOpacity="1" />
        </radialGradient>
      </defs>
      <circle cx="40" cy="45" r="28" fill="url(#calcGrad)" opacity="0.3" />
      <path
        d="M30 20h20c2 0 4 2 4 4v32c0 2-2 4-4 4H30c-2 0-4-2-4-4V24c0-2 2-4 4-4z"
        fill="url(#calcGrad)"
        stroke="#047857"
        strokeWidth="2"
      />
      <path d="M32 26h16v8H32z" fill="#fff" opacity="0.9" />
      <circle cx="35" cy="40" r="2.5" fill="#fff" />
      <circle cx="40" cy="40" r="2.5" fill="#fff" />
      <circle cx="45" cy="40" r="2.5" fill="#fff" />
      <circle cx="35" cy="46" r="2.5" fill="#fff" />
      <circle cx="40" cy="46" r="2.5" fill="#fff" />
      <circle cx="45" cy="46" r="2.5" fill="#fff" />
    </svg>
  );
}

function HeartIcon3D() {
  return (
    <svg width={80} height={80} viewBox="0 0 80 80">
      <defs>
        <radialGradient id="heartGrad" cx="50%" cy="30%">
          <stop offset="0%" stopColor="#f87171" stopOpacity="1" />
          <stop offset="100%" stopColor="#dc2626" stopOpacity="1" />
        </radialGradient>
      </defs>
      <circle cx="40" cy="45" r="28" fill="url(#heartGrad)" opacity="0.3" />
      <path
        d="M40 55C40 55 25 45 25 35C25 30 28 26 32 26C35 26 38 28 40 30C42 28 45 26 48 26C52 26 55 30 55 35C55 45 40 55 40 55Z"
        fill="url(#heartGrad)"
        stroke="#b91c1c"
        strokeWidth="2"
      />
    </svg>
  );
}

export default function WelcomeScreen({ colors, onLogin, onSignUp }: WelcomeScreenProps) {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column' as const,
      minHeight: '100vh',
      backgroundColor: colors.background,
    },
    gradientHeader: {
      background: `linear-gradient(135deg, ${colors.primary}, ${colors.primaryDark})`,
      paddingTop: '60px',
      paddingBottom: '40px',
      paddingLeft: '24px',
      paddingRight: '24px',
      borderBottomLeftRadius: '32px',
      borderBottomRightRadius: '32px',
      textAlign: 'center' as const,
    },
    logoContainer: {
      display: 'inline-block',
      marginBottom: '20px',
      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)',
    },
    logoGradient: {
      width: '96px',
      height: '96px',
      borderRadius: '28px',
      background: `linear-gradient(135deg, #60a5fa, #2563eb)`,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      boxShadow: '0 4px 16px rgba(37, 99, 235, 0.5)',
    },
    appTitle: {
      fontSize: '32px',
      color: '#fff',
      fontWeight: '700' as const,
      marginBottom: '8px',
    },
    appSubtitle: {
      fontSize: '16px',
      color: 'rgba(255, 255, 255, 0.8)',
    },
    featuresContainer: {
      padding: '32px 20px',
      flex: 1,
    },
    featureRow: {
      display: 'flex',
      gap: '16px',
      marginBottom: '16px',
    },
    featureCard: {
      flex: 1,
      borderRadius: '20px',
      padding: '20px',
      textAlign: 'center' as const,
      backgroundColor: colors.surface,
      border: `1px solid ${colors.border}`,
      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
    },
    centerFeatureCard: {
      borderRadius: '20px',
      padding: '24px',
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      backgroundColor: colors.surface,
      border: `1px solid ${colors.border}`,
      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
    },
    iconContainer: {
      marginBottom: '12px',
      display: 'flex',
      justifyContent: 'center',
    },
    featureTitle: {
      fontSize: '16px',
      fontWeight: '600' as const,
      color: colors.text,
      marginBottom: '8px',
      lineHeight: '22px',
    },
    featureDescription: {
      fontSize: '13px',
      color: colors.textSecondary,
      lineHeight: '18px',
    },
    buttonContainer: {
      padding: '0 24px 32px',
      display: 'flex',
      flexDirection: 'column' as const,
      gap: '12px',
    },
    primaryButton: {
      background: `linear-gradient(90deg, ${colors.primary}, ${colors.primaryDark})`,
      color: '#fff',
      fontSize: '18px',
      fontWeight: '600' as const,
      padding: '18px',
      borderRadius: '16px',
      border: 'none',
      cursor: 'pointer',
      boxShadow: '0 4px 16px rgba(37, 99, 235, 0.3)',
      transition: 'transform 0.2s',
    },
    secondaryButton: {
      backgroundColor: 'transparent',
      color: colors.text,
      fontSize: '18px',
      fontWeight: '600' as const,
      padding: '18px',
      borderRadius: '16px',
      border: `2px solid ${colors.border}`,
      cursor: 'pointer',
      transition: 'background-color 0.2s',
    },
    termsText: {
      fontSize: '12px',
      color: colors.textSecondary,
      textAlign: 'center' as const,
      marginTop: '8px',
      lineHeight: '16px',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.gradientHeader}>
        <div style={styles.logoContainer}>
          <div style={styles.logoGradient}>
            <svg width={64} height={64} viewBox="0 0 48 48">
              <path
                d="M24 10C24 10 17 12 17 16C17 22 20 28 24 32C28 28 31 22 31 16C31 12 24 10 24 10Z"
                fill="#fff"
                opacity="0.9"
              />
              <path
                d="M19 20C19 20 20 18 21.5 18C22.5 18 23 18.5 23 19.5V24M23 20C23 20 23.5 18.5 25 18.5C26 18.5 26.5 19 26.5 20V24M26.5 21.5C26.5 21.5 27 20.5 28 20.5C28.8 20.5 29 21 29 21.8V26C29 28 27.5 29.5 25 29.5H24C21.5 29.5 20 28 20 26V24"
                stroke="#fff"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </div>
        </div>

        <div style={styles.appTitle}>Benefits Guide</div>
        <div style={styles.appSubtitle}>Your assistance companion</div>
      </div>

      <div style={styles.featuresContainer}>
        <div style={styles.featureRow}>
          <div style={styles.featureCard}>
            <div style={styles.iconContainer}>
              <ShieldIcon3D />
            </div>
            <div style={styles.featureTitle}>Check{'\n'}Eligibility</div>
            <div style={styles.featureDescription}>
              Verify program qualification
            </div>
          </div>

          <div style={styles.featureCard}>
            <div style={styles.iconContainer}>
              <CalculatorIcon3D />
            </div>
            <div style={styles.featureTitle}>Calculate{'\n'}Benefits</div>
            <div style={styles.featureDescription}>
              Estimate your amount
            </div>
          </div>
        </div>

        <div style={styles.centerFeatureCard}>
          <div>
            <HeartIcon3D />
          </div>
          <div style={{ flex: 1 }}>
            <div style={styles.featureTitle}>Free & Confidential</div>
            <div style={styles.featureDescription}>
              All services are completely free and your information remains private
            </div>
          </div>
        </div>
      </div>

      <div style={styles.buttonContainer}>
        <button
          onClick={onSignUp}
          style={styles.primaryButton}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          aria-label="Create account"
        >
          Create Account
        </button>

        <button
          onClick={onLogin}
          style={styles.secondaryButton}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = colors.surfaceLight}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          aria-label="Sign in"
        >
          Sign In
        </button>

        <div style={styles.termsText}>
          By continuing, you agree to our Terms & Privacy Policy
        </div>
      </div>
    </div>
  );
}
