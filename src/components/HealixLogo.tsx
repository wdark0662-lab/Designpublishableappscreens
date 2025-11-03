interface HealixLogoProps {
  size?: number;
  showText?: boolean;
  color?: string;
}

export default function HealixLogo({ size = 48, showText = true, color = '#3b82f6' }: HealixLogoProps) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: showText ? '12px' : '0',
      }}
    >
      {/* Logo Icon */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer Circle - Medical Shield */}
        <circle
          cx="50"
          cy="50"
          r="45"
          fill={color}
          opacity="0.1"
        />
        <circle
          cx="50"
          cy="50"
          r="40"
          stroke={color}
          strokeWidth="3"
          fill="none"
        />
        
        {/* Medical Cross - Modern Design */}
        <path
          d="M50 25 L50 75 M25 50 L75 50"
          stroke={color}
          strokeWidth="6"
          strokeLinecap="round"
        />
        
        {/* DNA Helix Elements - Left */}
        <ellipse
          cx="35"
          cy="35"
          rx="4"
          ry="6"
          fill={color}
          opacity="0.6"
        />
        <ellipse
          cx="35"
          cy="65"
          rx="4"
          ry="6"
          fill={color}
          opacity="0.6"
        />
        
        {/* DNA Helix Elements - Right */}
        <ellipse
          cx="65"
          cy="35"
          rx="4"
          ry="6"
          fill={color}
          opacity="0.6"
        />
        <ellipse
          cx="65"
          cy="65"
          rx="4"
          ry="6"
          fill={color}
          opacity="0.6"
        />
        
        {/* Heartbeat Line */}
        <path
          d="M20 50 L30 50 L35 40 L40 60 L45 50 L80 50"
          stroke={color}
          strokeWidth="2"
          fill="none"
          opacity="0.3"
        />
        
        {/* Center Pulse Dot */}
        <circle
          cx="50"
          cy="50"
          r="8"
          fill={color}
        >
          <animate
            attributeName="opacity"
            values="1;0.3;1"
            dur="2s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>

      {/* Text Logo */}
      {showText && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          <span
            style={{
              fontSize: size * 0.5,
              fontWeight: '800',
              color: color,
              letterSpacing: '-0.02em',
              lineHeight: '1',
            }}
          >
            Healix
          </span>
          <span
            style={{
              fontSize: size * 0.18,
              fontWeight: '600',
              color: color,
              opacity: 0.7,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              lineHeight: '1',
            }}
          >
            Healthcare
          </span>
        </div>
      )}
    </div>
  );
}
