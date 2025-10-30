interface AppIconProps {
  size?: number;
}

export default function AppIcon({ size = 48 }: AppIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>
        <linearGradient id="iconGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.9" />
        </linearGradient>
      </defs>
      
      {/* Background with rounded corners */}
      <rect width="48" height="48" rx="12" fill="url(#bgGradient)" />
      
      {/* Shield/heart base */}
      <path
        d="M24 10C24 10 17 12 17 16C17 22 20 28 24 32C28 28 31 22 31 16C31 12 24 10 24 10Z"
        fill="url(#iconGradient)"
        opacity="0.9"
      />
      
      {/* Hand/helping gesture */}
      <path
        d="M19 20C19 20 20 18 21.5 18C22.5 18 23 18.5 23 19.5V24M23 20C23 20 23.5 18.5 25 18.5C26 18.5 26.5 19 26.5 20V24M26.5 21.5C26.5 21.5 27 20.5 28 20.5C28.8 20.5 29 21 29 21.8V26C29 28 27.5 29.5 25 29.5H24C21.5 29.5 20 28 20 26V24"
        stroke="url(#iconGradient)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
