import { useState } from 'react';
import { User, Mail, Lock, Eye, EyeOff, ArrowLeft, Chrome, Apple } from 'lucide-react';

interface SignUpScreenProps {
  colors: any;
  onSignUp: (name: string, email: string, password: string) => void;
  onBack: () => void;
  onLogin: () => void;
}

export default function SignUpScreen({ colors, onSignUp, onBack, onLogin }: SignUpScreenProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [termsError, setTermsError] = useState('');

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSignUp = () => {
    let isValid = true;

    if (!name) {
      setNameError('Name is required');
      isValid = false;
    } else if (name.length < 2) {
      setNameError('Name must be at least 2 characters');
      isValid = false;
    } else {
      setNameError('');
    }

    if (!email) {
      setEmailError('Email is required');
      isValid = false;
    } else if (!validateEmail(email)) {
      setEmailError('Please enter a valid email');
      isValid = false;
    } else {
      setEmailError('');
    }

    if (!password) {
      setPasswordError('Password is required');
      isValid = false;
    } else if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters');
      isValid = false;
    } else {
      setPasswordError('');
    }

    if (!confirmPassword) {
      setConfirmPasswordError('Please confirm your password');
      isValid = false;
    } else if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match');
      isValid = false;
    } else {
      setConfirmPasswordError('');
    }

    if (!agreeToTerms) {
      setTermsError('You must agree to the terms and conditions');
      isValid = false;
    } else {
      setTermsError('');
    }

    if (isValid) {
      onSignUp(name, email, password);
    }
  };

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column' as const,
      minHeight: '100vh',
      backgroundColor: colors.background,
      padding: '24px',
      overflowY: 'auto' as const,
    },
    header: {
      marginBottom: '24px',
    },
    backButton: {
      width: '44px',
      height: '44px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: colors.text,
    },
    titleSection: {
      marginBottom: '32px',
    },
    title: {
      fontSize: '32px',
      fontWeight: '700' as const,
      color: colors.text,
      marginBottom: '8px',
    },
    subtitle: {
      fontSize: '16px',
      color: colors.textSecondary,
      lineHeight: '22px',
    },
    form: {
      display: 'flex',
      flexDirection: 'column' as const,
      gap: '20px',
      flex: 1,
    },
    inputGroup: {
      display: 'flex',
      flexDirection: 'column' as const,
      gap: '8px',
    },
    label: {
      fontSize: '14px',
      fontWeight: '500' as const,
      color: colors.text,
    },
    inputContainer: {
      display: 'flex',
      alignItems: 'center',
      backgroundColor: colors.surfaceLight,
      border: `1px solid ${colors.border}`,
      borderRadius: '12px',
      padding: '0 16px',
      height: '52px',
    },
    inputContainerError: {
      borderColor: '#ef4444',
    },
    input: {
      flex: 1,
      fontSize: '16px',
      border: 'none',
      backgroundColor: 'transparent',
      color: colors.text,
      outline: 'none',
      marginLeft: '12px',
    },
    eyeButton: {
      width: '44px',
      height: '44px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: colors.textSecondary,
      marginRight: '-12px',
    },
    errorText: {
      fontSize: '12px',
      color: '#ef4444',
    },
    checkboxRow: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '12px',
      cursor: 'pointer',
    },
    checkbox: {
      width: '20px',
      height: '20px',
      borderRadius: '4px',
      border: `2px solid ${colors.border}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '2px',
      flexShrink: 0,
    },
    checkboxChecked: {
      backgroundColor: colors.primary,
      borderColor: colors.primary,
    },
    checkboxError: {
      borderColor: '#ef4444',
    },
    checkboxLabel: {
      flex: 1,
      fontSize: '14px',
      color: colors.text,
      lineHeight: '20px',
    },
    signupButton: {
      background: `linear-gradient(90deg, ${colors.primary}, ${colors.primaryDark})`,
      color: '#fff',
      fontSize: '16px',
      fontWeight: '600' as const,
      padding: '16px',
      borderRadius: '12px',
      border: 'none',
      cursor: 'pointer',
      boxShadow: '0 4px 16px rgba(37, 99, 235, 0.3)',
      marginTop: '8px',
      transition: 'transform 0.2s',
    },
    divider: {
      display: 'flex',
      alignItems: 'center',
      marginTop: '8px',
      marginBottom: '8px',
    },
    dividerLine: {
      flex: 1,
      height: '1px',
      backgroundColor: colors.border,
    },
    dividerText: {
      fontSize: '12px',
      color: colors.textSecondary,
      margin: '0 12px',
    },
    socialButton: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '12px',
      padding: '14px',
      borderRadius: '12px',
      border: `1px solid ${colors.border}`,
      backgroundColor: colors.surface,
      cursor: 'pointer',
      transition: 'background-color 0.2s',
    },
    socialButtonText: {
      fontSize: '15px',
      fontWeight: '500' as const,
      color: colors.text,
    },
    loginSection: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '32px',
    },
    loginText: {
      fontSize: '14px',
      color: colors.textSecondary,
    },
    loginLink: {
      fontSize: '14px',
      fontWeight: '600' as const,
      color: colors.primary,
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      marginLeft: '4px',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <button onClick={onBack} style={styles.backButton} aria-label="Go back">
          <ArrowLeft size={24} />
        </button>
      </div>

      <div style={styles.titleSection}>
        <div style={styles.title}>Create Account</div>
        <div style={styles.subtitle}>
          Sign up to get started with Benefits Guide
        </div>
      </div>

      <div style={styles.form}>
        <div style={styles.inputGroup}>
          <div style={styles.label}>Full Name</div>
          <div style={{
            ...styles.inputContainer,
            ...(nameError ? styles.inputContainerError : {}),
          }}>
            <User size={20} color={colors.textSecondary} />
            <input
              style={styles.input}
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setNameError('');
              }}
              placeholder="John Doe"
              type="text"
            />
          </div>
          {nameError && <div style={styles.errorText}>{nameError}</div>}
        </div>

        <div style={styles.inputGroup}>
          <div style={styles.label}>Email</div>
          <div style={{
            ...styles.inputContainer,
            ...(emailError ? styles.inputContainerError : {}),
          }}>
            <Mail size={20} color={colors.textSecondary} />
            <input
              style={styles.input}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailError('');
              }}
              placeholder="your.email@example.com"
              type="email"
              autoCapitalize="none"
              autoCorrect="off"
            />
          </div>
          {emailError && <div style={styles.errorText}>{emailError}</div>}
        </div>

        <div style={styles.inputGroup}>
          <div style={styles.label}>Password</div>
          <div style={{
            ...styles.inputContainer,
            ...(passwordError ? styles.inputContainerError : {}),
          }}>
            <Lock size={20} color={colors.textSecondary} />
            <input
              style={styles.input}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setPasswordError('');
              }}
              placeholder="Minimum 8 characters"
              type={showPassword ? 'text' : 'password'}
              autoCapitalize="none"
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              style={styles.eyeButton}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
              type="button"
            >
              {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
            </button>
          </div>
          {passwordError && <div style={styles.errorText}>{passwordError}</div>}
        </div>

        <div style={styles.inputGroup}>
          <div style={styles.label}>Confirm Password</div>
          <div style={{
            ...styles.inputContainer,
            ...(confirmPasswordError ? styles.inputContainerError : {}),
          }}>
            <Lock size={20} color={colors.textSecondary} />
            <input
              style={styles.input}
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                setConfirmPasswordError('');
              }}
              placeholder="Re-enter your password"
              type={showConfirmPassword ? 'text' : 'password'}
              autoCapitalize="none"
            />
            <button
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              style={styles.eyeButton}
              aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
              type="button"
            >
              {showConfirmPassword ? <Eye size={20} /> : <EyeOff size={20} />}
            </button>
          </div>
          {confirmPasswordError && <div style={styles.errorText}>{confirmPasswordError}</div>}
        </div>

        <div style={styles.inputGroup}>
          <div
            onClick={() => {
              setAgreeToTerms(!agreeToTerms);
              setTermsError('');
            }}
            style={styles.checkboxRow}
          >
            <div style={{
              ...styles.checkbox,
              ...(agreeToTerms ? styles.checkboxChecked : {}),
              ...(termsError ? styles.checkboxError : {}),
            }}>
              {agreeToTerms && (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 8L6.5 11.5L13 5"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </div>
            <div style={styles.checkboxLabel}>
              I agree to the{' '}
              <span style={{ color: colors.primary }}>Terms & Conditions</span>
              {' '}and{' '}
              <span style={{ color: colors.primary }}>Privacy Policy</span>
            </div>
          </div>
          {termsError && <div style={styles.errorText}>{termsError}</div>}
        </div>

        <button
          onClick={handleSignUp}
          style={styles.signupButton}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          aria-label="Create account"
          type="button"
        >
          Create Account
        </button>

        <div style={styles.divider}>
          <div style={styles.dividerLine} />
          <div style={styles.dividerText}>OR</div>
          <div style={styles.dividerLine} />
        </div>

        <button
          style={styles.socialButton}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = colors.surfaceLight}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = colors.surface}
          aria-label="Continue with Google"
          type="button"
        >
          <Chrome size={20} color="#ea4335" />
          <div style={styles.socialButtonText}>Continue with Google</div>
        </button>

        <button
          style={styles.socialButton}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = colors.surfaceLight}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = colors.surface}
          aria-label="Continue with Apple"
          type="button"
        >
          <Apple size={20} color={colors.text} />
          <div style={styles.socialButtonText}>Continue with Apple</div>
        </button>
      </div>

      <div style={styles.loginSection}>
        <span style={styles.loginText}>Already have an account?</span>
        <button onClick={onLogin} style={styles.loginLink} type="button">
          Sign In
        </button>
      </div>
    </div>
  );
}
