import { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, ArrowLeft, Chrome, Apple } from 'lucide-react';

interface LoginScreenProps {
  colors: any;
  onLogin: (email: string, password: string) => void;
  onSocialLogin: (provider: 'google' | 'apple') => void;
  onBack: () => void;
  onSignUp: () => void;
}

export default function LoginScreen({ colors, onLogin, onSocialLogin, onBack, onSignUp }: LoginScreenProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleLogin = () => {
    let isValid = true;

    if (!email) {
      setEmailError('Email é obrigatório');
      isValid = false;
    } else if (!validateEmail(email)) {
      setEmailError('Por favor, insira um email válido');
      isValid = false;
    } else {
      setEmailError('');
    }

    if (!password) {
      setPasswordError('Senha é obrigatória');
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError('A senha deve ter pelo menos 6 caracteres');
      isValid = false;
    } else {
      setPasswordError('');
    }

    if (isValid) {
      onLogin(email, password);
    }
  };

  const handleGoogleLogin = () => {
    // Simulate Google login
    alert('Login com Google iniciado...');
    onSocialLogin('google');
  };

  const handleAppleLogin = () => {
    // Simulate Apple login
    alert('Login com Apple iniciado...');
    onSocialLogin('apple');
  };

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column' as const,
      minHeight: '100%',
      height: '100%',
      backgroundColor: colors.background,
      padding: '24px',
      overflowY: 'auto' as const,
      WebkitOverflowScrolling: 'touch' as const,
      touchAction: 'pan-y' as const,
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
      touchAction: 'manipulation' as const,
      WebkitTapHighlightColor: 'transparent',
      marginRight: '-12px',
    },
    errorText: {
      fontSize: '12px',
      color: '#ef4444',
    },
    forgotButton: {
      alignSelf: 'flex-end',
      background: 'none',
      border: 'none',
      color: colors.primary,
      fontSize: '14px',
      fontWeight: '500' as const,
      cursor: 'pointer',
    },
    loginButton: {
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
      minHeight: '52px',
      touchAction: 'manipulation' as const,
      WebkitTapHighlightColor: 'transparent',
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
      minHeight: '52px',
      touchAction: 'manipulation' as const,
      WebkitTapHighlightColor: 'transparent',
    },
    socialButtonText: {
      fontSize: '15px',
      fontWeight: '500' as const,
      color: colors.text,
    },
    signupSection: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '32px',
    },
    signupText: {
      fontSize: '14px',
      color: colors.textSecondary,
    },
    signupLink: {
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
        <button onClick={onBack} style={styles.backButton} aria-label="Voltar">
          <ArrowLeft size={24} />
        </button>
      </div>

      <div style={styles.titleSection}>
        <div style={styles.title}>Bem-vindo de Volta</div>
        <div style={styles.subtitle}>
          Entre para continuar no Guia de Benefícios
        </div>
      </div>

      <div style={styles.form}>
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
              placeholder="seu.email@exemplo.com"
              type="email"
              autoCapitalize="none"
              autoCorrect="off"
            />
          </div>
          {emailError && <div style={styles.errorText}>{emailError}</div>}
        </div>

        <div style={styles.inputGroup}>
          <div style={styles.label}>Senha</div>
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
              placeholder="Digite sua senha"
              type={showPassword ? 'text' : 'password'}
              autoCapitalize="none"
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              style={styles.eyeButton}
              aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
              type="button"
            >
              {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
            </button>
          </div>
          {passwordError && <div style={styles.errorText}>{passwordError}</div>}
        </div>

        <button style={styles.forgotButton} type="button">Esqueceu a Senha?</button>

        <button
          onClick={handleLogin}
          style={styles.loginButton}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          aria-label="Entrar"
          type="button"
        >
          Entrar
        </button>

        <div style={styles.divider}>
          <div style={styles.dividerLine} />
          <div style={styles.dividerText}>OU</div>
          <div style={styles.dividerLine} />
        </div>

        <button
          onClick={handleGoogleLogin}
          style={styles.socialButton}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = colors.surfaceLight}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = colors.surface}
          aria-label="Continuar com Google"
          type="button"
        >
          <Chrome size={20} color="#ea4335" />
          <div style={styles.socialButtonText}>Continuar com Google</div>
        </button>

        <button
          onClick={handleAppleLogin}
          style={styles.socialButton}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = colors.surfaceLight}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = colors.surface}
          aria-label="Continuar com Apple"
          type="button"
        >
          <Apple size={20} color={colors.text} />
          <div style={styles.socialButtonText}>Continuar com Apple</div>
        </button>
      </div>

      <div style={styles.signupSection}>
        <span style={styles.signupText}>Não tem uma conta?</span>
        <button onClick={onSignUp} style={styles.signupLink} type="button">
          Cadastre-se
        </button>
      </div>
    </div>
  );
}
