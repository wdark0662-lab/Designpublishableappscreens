# Benefits Guide - Mobile-First Web Application

A mobile-first web application built with React and TypeScript to help users check eligibility and calculate potential benefits for assistance programs. Features modern authentication with sign-up and login functionality, inspired by the Vale Gás app design.

## Features

### Authentication
- **Welcome Screen**: Modern landing page with 3D-style icons and animated gradients
- **Sign Up**: Create account with full validation and social sign-in options
- **Login**: Secure login with password visibility toggle and "forgot password" option
- **Logout**: Secure logout functionality with session management

### Main Application
- **Home Screen**: Quick access to all features with status card
- **Program Guide**: Information about available assistance programs
- **Eligibility Checker**: Interactive questionnaire to check program eligibility
- **Benefits Calculator**: Estimate potential monthly benefits
- **FAQ**: Common questions and answers with accordion interface

## Design System

- **Color Palette**: Blue 600/500 (#2563eb/#3b82f6), Green 500 (#22c55e)
- **Typography**: Inter font family with sizes 32/24/18/16/14px
- **3D Effects**: SVG gradients, shadows, and layered icons for depth
- **Dark Mode**: Full support with automatic system detection and manual toggle
- **Mobile-First**: Maximum width of 480px, resembling native mobile apps
- **Accessibility**: AA contrast compliance, 44dp minimum touch targets, proper ARIA labels

## Tech Stack

- **React 18**: UI framework
- **TypeScript**: Type safety
- **Vite**: Build tool and dev server
- **Lucide React**: Modern icon library
- **localStorage**: Client-side data persistence for authentication

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
npm install
```

### Running the App

#### Development Mode
```bash
npm run dev
```

Then open http://localhost:5173 in your browser.

#### Build for Production
```bash
npm run build
```

#### Preview Production Build
```bash
npm run preview
```

## Project Structure

```
├── App.tsx                       # Main app with auth flow
├── main.tsx                      # React entry point
├── index.html                    # HTML template
├── components/
│   ├── WelcomeScreen.tsx        # Landing page with 3D icons
│   ├── LoginScreen.tsx          # Login screen
│   ├── SignUpScreen.tsx         # Sign up screen
│   ├── MainApp.tsx              # Main app with navigation
│   ├── AppIcon.tsx              # Custom app icon with SVG
│   ├── HomeScreen.tsx           # Home screen
│   ├── GuideScreen.tsx          # Program guide
│   ├── EligibilityScreen.tsx   # Eligibility checker
│   ├── CalculatorScreen.tsx    # Benefits calculator
│   └── FAQScreen.tsx            # FAQ screen
├── styles/
│   └── globals.css              # Global styles
├── package.json                 # Dependencies
├── tsconfig.json                # TypeScript configuration
└── vite.config.ts              # Vite configuration
```

## Authentication Flow

1. **Welcome Screen**: Initial landing page with options to sign up or log in
2. **Sign Up**: Create new account with validation
3. **Login**: Sign in with existing credentials
4. **Main App**: Access to all features after authentication
5. **Logout**: Return to welcome screen and clear session

Authentication uses localStorage for demo purposes. In production, integrate with your backend API.

## Key Features

### Welcome Screen (Vale Gás Inspired)
The welcome screen features modern 3D-style icons:

- **Shield Icon**: Represents security and eligibility checking
- **Calculator Icon**: Represents benefit calculations
- **Heart Icon**: Represents care and confidentiality

Each icon uses:
- Radial SVG gradients for depth
- Drop shadows for elevation
- Layered paths for 3D effect
- Smooth color transitions

### Form Validation
- Email format validation
- Password strength requirements (8+ characters)
- Real-time error feedback
- Password confirmation matching
- Terms & conditions agreement

### Responsive Design
- Mobile-first approach (max-width: 480px)
- Bottom tab navigation like native apps
- Smooth transitions between screens
- Touch-friendly 44dp minimum targets

## Dependencies

```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "lucide-react": "^0.263.1"
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Security Notes

- Current implementation uses mock authentication for demo purposes
- In production, replace with secure API calls
- Store tokens securely using httpOnly cookies or secure storage
- Implement proper password hashing on backend
- Add CSRF protection
- Use HTTPS in production

## Performance

- Fast initial load with Vite
- Code splitting for optimal bundle size
- Lazy loading of screens
- Optimized SVG icons

## Deployment

### Vercel
```bash
npm run build
# Deploy dist folder
```

### Netlify
```bash
npm run build
# Deploy dist folder
```

### GitHub Pages
```bash
npm run build
# Deploy dist folder to gh-pages branch
```

## Future Enhancements

- Real backend API integration
- Biometric authentication
- Push notifications
- Multi-language support
- Analytics integration
- Progressive Web App (PWA) features

## License

This project is for educational and demonstration purposes.

## Credits

Design inspired by Vale Gás mobile application, featuring modern 3D visual elements and mobile-first UX patterns.
