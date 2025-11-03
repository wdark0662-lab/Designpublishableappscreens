import { CSSProperties, ReactNode, MouseEvent, TouchEvent } from 'react';

interface Button3DProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'white' | 'gradient';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  disabled?: boolean;
  style?: CSSProperties;
  className?: string;
}

export default function Button3D({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  style = {},
  className = '',
}: Button3DProps) {
  const getVariantStyles = (): CSSProperties => {
    const baseStyles: CSSProperties = {
      position: 'relative',
      border: 'none',
      cursor: disabled ? 'not-allowed' : 'pointer',
      fontWeight: '700',
      borderRadius: size === 'sm' ? '20px' : size === 'md' ? '24px' : '30px',
      transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
      userSelect: 'none',
      WebkitTapHighlightColor: 'transparent',
      touchAction: 'manipulation',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      opacity: disabled ? 0.5 : 1,
      width: fullWidth ? '100%' : 'auto',
    };

    const sizeStyles: CSSProperties = {
      padding: size === 'sm' ? '10px 20px' : size === 'md' ? '14px 28px' : '18px 36px',
      fontSize: size === 'sm' ? '14px' : size === 'md' ? '16px' : '18px',
    };

    const variantMap: Record<string, CSSProperties> = {
      primary: {
        background: 'linear-gradient(135deg, #00BFA5 0%, #00897B 100%)',
        color: '#fff',
        boxShadow: '0 6px 0 #00897B, 0 10px 24px rgba(0, 191, 165, 0.4)',
        transform: 'translateY(0)',
      },
      secondary: {
        background: 'linear-gradient(135deg, #94a3b8 0%, #64748b 100%)',
        color: '#fff',
        boxShadow: '0 6px 0 #64748b, 0 10px 24px rgba(100, 116, 139, 0.4)',
        transform: 'translateY(0)',
      },
      outline: {
        background: 'transparent',
        color: '#00BFA5',
        border: '2px solid #00BFA5',
        boxShadow: '0 6px 0 rgba(0, 191, 165, 0.2), 0 10px 24px rgba(0, 191, 165, 0.2)',
        transform: 'translateY(0)',
      },
      white: {
        background: '#fff',
        color: '#00BFA5',
        boxShadow: '0 6px 0 rgba(0, 0, 0, 0.1), 0 10px 24px rgba(0, 0, 0, 0.15)',
        transform: 'translateY(0)',
      },
      gradient: {
        background: 'linear-gradient(135deg, #00BFA5 0%, #00897B 100%)',
        color: '#fff',
        boxShadow: '0 8px 0 #00897B, 0 12px 30px rgba(0, 191, 165, 0.5)',
        transform: 'translateY(0)',
      },
    };

    return { ...baseStyles, ...sizeStyles, ...variantMap[variant] };
  };

  const handleMouseDown = (e: MouseEvent<HTMLButtonElement>) => {
    if (disabled) return;
    const button = e.currentTarget;
    
    if (variant === 'primary' || variant === 'gradient') {
      button.style.transform = 'translateY(4px)';
      button.style.boxShadow = variant === 'gradient'
        ? '0 4px 0 #00897B, 0 6px 20px rgba(0, 191, 165, 0.4)'
        : '0 2px 0 #00897B, 0 6px 16px rgba(0, 191, 165, 0.3)';
    } else if (variant === 'secondary') {
      button.style.transform = 'translateY(4px)';
      button.style.boxShadow = '0 2px 0 #64748b, 0 6px 16px rgba(100, 116, 139, 0.3)';
    } else if (variant === 'outline') {
      button.style.transform = 'translateY(4px)';
      button.style.boxShadow = '0 2px 0 rgba(0, 191, 165, 0.2), 0 6px 16px rgba(0, 191, 165, 0.15)';
    } else if (variant === 'white') {
      button.style.transform = 'translateY(4px)';
      button.style.boxShadow = '0 2px 0 rgba(0, 0, 0, 0.1), 0 6px 16px rgba(0, 0, 0, 0.1)';
    }
  };

  const handleMouseUp = (e: MouseEvent<HTMLButtonElement>) => {
    if (disabled) return;
    const button = e.currentTarget;
    
    if (variant === 'primary' || variant === 'gradient') {
      button.style.transform = 'translateY(0)';
      button.style.boxShadow = variant === 'gradient'
        ? '0 8px 0 #00897B, 0 12px 30px rgba(0, 191, 165, 0.5)'
        : '0 6px 0 #00897B, 0 10px 24px rgba(0, 191, 165, 0.4)';
    } else if (variant === 'secondary') {
      button.style.transform = 'translateY(0)';
      button.style.boxShadow = '0 6px 0 #64748b, 0 10px 24px rgba(100, 116, 139, 0.4)';
    } else if (variant === 'outline') {
      button.style.transform = 'translateY(0)';
      button.style.boxShadow = '0 6px 0 rgba(0, 191, 165, 0.2), 0 10px 24px rgba(0, 191, 165, 0.2)';
    } else if (variant === 'white') {
      button.style.transform = 'translateY(0)';
      button.style.boxShadow = '0 6px 0 rgba(0, 0, 0, 0.1), 0 10px 24px rgba(0, 0, 0, 0.15)';
    }
  };

  const handleTouchStart = (e: TouchEvent<HTMLButtonElement>) => {
    if (disabled) return;
    const button = e.currentTarget;
    
    if (variant === 'primary' || variant === 'gradient') {
      button.style.transform = 'translateY(4px)';
      button.style.boxShadow = variant === 'gradient'
        ? '0 4px 0 #00897B, 0 6px 20px rgba(0, 191, 165, 0.4)'
        : '0 2px 0 #00897B, 0 6px 16px rgba(0, 191, 165, 0.3)';
    } else if (variant === 'secondary') {
      button.style.transform = 'translateY(4px)';
      button.style.boxShadow = '0 2px 0 #64748b, 0 6px 16px rgba(100, 116, 139, 0.3)';
    } else if (variant === 'outline') {
      button.style.transform = 'translateY(4px)';
      button.style.boxShadow = '0 2px 0 rgba(0, 191, 165, 0.2), 0 6px 16px rgba(0, 191, 165, 0.15)';
    } else if (variant === 'white') {
      button.style.transform = 'translateY(4px)';
      button.style.boxShadow = '0 2px 0 rgba(0, 0, 0, 0.1), 0 6px 16px rgba(0, 0, 0, 0.1)';
    }
  };

  const handleTouchEnd = (e: TouchEvent<HTMLButtonElement>) => {
    if (disabled) return;
    const button = e.currentTarget;
    
    if (variant === 'primary' || variant === 'gradient') {
      button.style.transform = 'translateY(0)';
      button.style.boxShadow = variant === 'gradient'
        ? '0 8px 0 #00897B, 0 12px 30px rgba(0, 191, 165, 0.5)'
        : '0 6px 0 #00897B, 0 10px 24px rgba(0, 191, 165, 0.4)';
    } else if (variant === 'secondary') {
      button.style.transform = 'translateY(0)';
      button.style.boxShadow = '0 6px 0 #64748b, 0 10px 24px rgba(100, 116, 139, 0.4)';
    } else if (variant === 'outline') {
      button.style.transform = 'translateY(0)';
      button.style.boxShadow = '0 6px 0 rgba(0, 191, 165, 0.2), 0 10px 24px rgba(0, 191, 165, 0.2)';
    } else if (variant === 'white') {
      button.style.transform = 'translateY(0)';
      button.style.boxShadow = '0 6px 0 rgba(0, 0, 0, 0.1), 0 10px 24px rgba(0, 0, 0, 0.15)';
    }
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      style={{ ...getVariantStyles(), ...style }}
      className={className}
    >
      {children}
    </button>
  );
}
