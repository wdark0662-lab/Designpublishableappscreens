# 🏥 Healix - Modern Medical Mobile App

A beautiful, mobile-first healthcare application with minimalist teal design, health diagnosis flow, smart appointment booking, and comprehensive features.

## ✨ Features

### 🆕 NEW - Major Design Update (v2.0)
- **🎨 Teal Design System**: Modern minimalist design with teal (#00BFA5) primary color
- **🏥 Health Diagnosis Flow**: 3-step evaluation with chat interface and diagnosis results
- **📅 Redesigned Appointment Booking**: Calendar-based selection with time slots
- **👨‍⚕️ Doctor Grid Selection**: Visual doctor selection with circular profiles
- **📊 Circular Progress Indicators**: Percentage-based diagnosis severity
- **⚕️ Emergency Assessment**: Urgency level evaluation
- **🌐 Clean Minimal UI**: Flat design with subtle shadows and whitespace

### 🎨 Design Highlights
- **Teal Theme**: Modern medical color scheme (#00BFA5)
- **Minimalist Style**: Clean, flat design with clear hierarchy
- **Smooth Animations**: Touch feedback and transitions
- **Mobile-First**: Optimized for mobile devices
- **Dual Theme**: Light (teal) and Dark (teal on dark) modes
- **15+ Doctors**: Comprehensive doctor database
- **Smart Features**: Calendar, progress tracking, chat interface

### 🎯 Navigation Flow

**Profile → My Appointments:**
1. Click Profile icon in bottom navigation
2. Click "My Appointments" card (shows "5 upcoming")
3. View all scheduled appointments with doctors
4. Take actions (Join video call, Message, Cancel)

### 📱 Core Functionality

#### 1. **Welcome Screen**
- **Healix Logo**: Professional animated logo (100px) with company name ⭐ NEW
- Beautiful 3D glassmorphic welcome card
- Floating medical icons (Heart, Stethoscope, Activity)
- Hospital exterior background with parallax effect
- Smooth name input with gradient button

#### 2. **Home Screen**
- Quick action cards with 3D effects:
  - Book Appointment
  - Telemedicine
  - Find Doctors
  - Health Records
- Upcoming appointments display
- Daily health tips card
- Smart search functionality

#### 3. **Appointment Booking**
- Specialty selection with icon grid
- Date picker with horizontal scroll
- Time slot selection
- Consultation room background
- Real-time availability

#### 4. **Find Doctors**
- **15 diverse doctors** across multiple specialties
- Real-time search functionality
- Specialty filters (All, Cardiology, Dermatology, Neurology, etc.)
- Professional profile cards with:
  - High-quality doctor photos
  - Star ratings (4.7-4.9) and review counts
  - Years of experience (9-22 years)
  - Consultation pricing ($95-$175)
  - Hospital affiliations
  - Real-time availability status
  - Next available appointment time
- Video call and booking options
- Beautiful card layouts with gradient overlays

#### 5. **Telemedicine**
- Video consultation
- Voice call
- Chat consultation
- Duration and pricing
- Step-by-step guide

#### 6. **Profile Screen**
- **Theme Toggle**: Moon/Sun icon in header ⭐ NEW
- Health statistics dashboard (Heart Rate, BP, Weight, Height)
- Menu with icons (all clickable):
  - **My Appointments** → 5 upcoming appointments
  - **Health Records** → 6 medical documents ⭐ NEW
  - **Favorite Doctors** → 3 saved doctors ⭐ NEW
  - **Notifications** → 7 alerts (3 unread) ⭐ NEW
  - **Settings** → App preferences ⭐ NEW
- Enhanced header with 3D depth

#### 7. **My Appointments Screen**
- **5 detailed appointment cards** with:
  - Professional doctor photos with gradient overlays
  - Status badges (Confirmed/Pending)
  - Type badges (Video Call/In-Person)
  - Full date and time information
  - Duration display
  - Hospital/room location
  - Important notes and instructions
- **Action buttons**:
  - Join (for video calls) - Green button
  - Message doctor - Blue outline
  - Cancel appointment - Red outline
- **3D press effects** on all buttons
- Smooth scrolling appointment list
- Beautiful card layouts with shadows
- Back navigation to Profile

#### 8. **Health Records Screen** ⭐ NEW
- **6 Medical Records** across different types:
  - Blood Test Results 🩸
  - ECG Report ❤️
  - X-Ray - Chest 📷
  - Annual Physical Exam 🏥
  - Prescription - Medication 💊
  - MRI Scan - Brain 🧠
- **Category Filters**: All, Lab Reports, Imaging, Prescriptions
- **Each Record Shows**:
  - Custom colored icon
  - Doctor name and specialty
  - Date of procedure
  - Status (Completed/Active)
  - View and Download buttons
- **Theme Toggle** in header
- Enhanced 3D header design

#### 9. **Favorite Doctors Screen** ⭐ NEW
- **3 Saved Favorite Doctors**:
  - Dr. Sarah Johnson (12 consultations)
  - Dr. Michael Chen (8 consultations)
  - Dr. Lisa Anderson (15 consultations)
- **Each Card Includes**:
  - Professional photo with gradient
  - Heart icon (filled red)
  - Availability status (Available/Busy)
  - Star rating and reviews
  - Total consultations with you
  - Price per visit
  - Video Call and Book Now buttons
- **Theme Toggle** in header
- Remove from favorites option

#### 10. **Notifications Screen** ⭐ NEW
- **7 Real-Time Notifications**:
  - Appointment reminders 📅
  - Doctor messages 💬
  - Medication reminders 🔔
  - Health tips ❤️
  - Test results alerts 🧪
  - Booking confirmations ✅
- **Unread Counter**: 3 unread messages
- **Mark All Read** button
- **Notification Types**:
  - Colored icons (blue, green, amber, red, purple)
  - Timestamp display
  - Unread indicator (dot + border)
- **Theme Toggle** in header

#### 11. **Settings Screen** ⭐ NEW
- **Preferences Section**:
  - Theme Toggle (Light/Dark) with animated switch
  - Language selection
  - Notification management
- **Account Section**:
  - Edit Profile
  - Privacy & Security
- **Support Section**:
  - Help Center
  - About Healix (Version 1.0.0)
  - Terms & Privacy
- **App Info Card**:
  - Healix logo
  - Version information
  - Copyright notice
- **Logout Button** (red outline) - Returns to Welcome screen ⭐
- **Theme Toggle** in header

---

## 🚪 Logout Functionality ⭐ NEW

### Available in 2 Locations:

#### 1. Profile Screen (Quick Access)
- Large red gradient button at bottom
- Immediate logout without extra navigation
- 3D press effect with shadow depth

#### 2. Settings Screen (Standard Location)
- Red outline button at bottom
- Traditional settings logout location
- Theme-aware design

### What Happens on Logout:
✅ **User data cleared** - Name and session reset  
✅ **Navigate to Welcome** - Returns to login screen  
✅ **LocalStorage cleared** - healix-user-data removed  
✅ **Theme preserved** - Dark/light mode setting kept  
✅ **Fresh start** - Ready for new user login  

### Button Features:
- **3D Press Effects**: Realistic button press animations
- **Touch-Optimized**: Works perfectly on mobile devices
- **Clear Visual**: Red color indicates logout action
- **Icon + Text**: LogOut icon for clarity
- **Safe**: Clears all sensitive user data

## 🎯 3D Button Implementation

All buttons feature realistic 3D effects:

```tsx
// Press effect on touch/click
boxShadow: '0 10px 30px rgba(59, 130, 246, 0.4), inset 0 -3px 0 rgba(0, 0, 0, 0.2)'
transform: 'translateY(0)'

// Pressed state
boxShadow: '0 4px 15px rgba(59, 130, 246, 0.3), inset 0 -1px 0 rgba(0, 0, 0, 0.2)'
transform: 'translateY(3px)'
```

## 🏗️ Technical Stack

- **React 18** with TypeScript
- **Vite** for fast development
- **Unsplash** for high-quality medical images
- **Lucide React** for beautiful icons
- **CSS-in-JS** for dynamic styling
- **Mobile-optimized** with safe areas and viewport handling

## 📐 Design Inspired By

- [Vitalit](https://medevel.com/vitalit) - Functionality and features
- [Healix Framer](https://healix.framer.website/?via=framerbite) - Design aesthetics

## 🚀 Getting Started

1. **Clone and Install**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## 📱 Mobile Optimizations

### Safe Areas
- Support for notched devices (iPhone X+)
- Bottom navigation respects safe area insets
- Header positioning with safe area padding

### Touch Interactions
- All buttons have 44x44px minimum touch targets
- No tap highlight flashing
- Smooth press animations
- Haptic feedback ready

### Performance
- Lazy loading ready
- Optimized images from Unsplash
- Hardware-accelerated animations
- Smooth 60fps scrolling

### PWA Features
- Installable on home screen
- Offline support ready
- Service worker configured
- Manifest for app metadata

## 🎨 Color System

```css
Primary Blue: #3b82f6 → #2563eb (gradient)
Success Green: #10b981 → #059669
Purple: #8b5cf6 → #7c3aed
Cyan: #06b6d4 → #0891b2
Warning: #f59e0b
Danger: #ef4444 → #dc2626
```

## 📂 Project Structure

```
├── components/
│   ├── WelcomeScreen.tsx            # Onboarding with Healix logo ⭐ UPDATED
│   ├── HomeScreen.tsx               # Dashboard with quick actions
│   ├── AppointmentScreen.tsx        # Booking interface
│   ├── DoctorsScreen.tsx            # Doctor listings (15 doctors)
│   ├── TelemedicineScreen.tsx       # Online consultation
│   ├── ProfileScreen.tsx            # User profile with theme toggle ⭐ UPDATED
│   ├── MyAppointmentsScreen.tsx     # Scheduled appointments (5)
│   ├── HealthRecordsScreen.tsx      # Medical records (6) ⭐ NEW
│   ├── FavoriteDoctorsScreen.tsx    # Saved doctors (3) ⭐ NEW
│   ├── NotificationsScreen.tsx      # Alerts (7) ⭐ NEW
│   ├── SettingsScreen.tsx           # App settings ⭐ NEW
│   ├── HealixLogo.tsx               # Professional logo component ⭐ NEW
│   └── BottomNav.tsx                # Navigation bar
├── contexts/
│   └── ThemeContext.tsx             # Dark/Light mode provider ⭐ NEW
├── App.tsx                          # Main app container with ThemeProvider ⭐ UPDATED
├── styles/globals.css               # Mobile-optimized styles
└── public/manifest.json             # PWA configuration
```

## 🌟 Key Interactions

### 3D Button Press
- Touch/click → Button moves down 2-3px
- Shadow reduces to create depth illusion
- Smooth transition (0.2s ease)
- Release → Returns to original position

### Parallax Background
- Hospital images at different layers
- Gradient overlays for depth
- Blur effect for focus on content
- Smooth transitions between screens

### Floating Animations
- Medical icons float up/down
- 3-second infinite loop
- Staggered animation delays
- Perspective transforms

## 📱 Responsive Behavior

- **Max width**: 480px (mobile-optimized)
- **Safe areas**: Automatic padding for notched devices
- **Viewport**: Dynamic height handling (100dvh)
- **Orientation**: Portrait optimized
- **Scrolling**: Momentum scrolling on iOS

## 🔧 Customization

### Change Primary Color
Update in each component's gradient:
```tsx
background: 'linear-gradient(135deg, #YOUR_COLOR 0%, #YOUR_DARK_COLOR 100%)'
```

### Add New Background
Use Unsplash or add to assets:
```tsx
<ImageWithFallback src="YOUR_IMAGE_URL" alt="Description" />
```

### Modify 3D Effect
Adjust shadow and transform values:
```tsx
boxShadow: '0 [HEIGHT]px [BLUR]px rgba(...)'
transform: 'translateY([PIXELS]px)'
```

## 🎭 Animation Details

### Float Animation
```css
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}
```

### Shine Effect
```css
@keyframes shine {
  0% { left: -100%; }
  50%, 100% { left: 100%; }
}
```

## 📊 Features Summary

✅ **Professional Healix Logo** with animated pulse ⭐ NEW  
✅ **Dark/Light Mode** with theme toggle (all screens) ⭐ NEW  
✅ Welcome screen with 3D glassmorphism  
✅ Home dashboard with quick actions  
✅ Appointment booking system  
✅ Doctor discovery and profiles (15 doctors)  
✅ Telemedicine consultation types  
✅ User profile with health stats and theme toggle ⭐ UPDATED  
✅ **My Appointments** (5 detailed appointments)  
✅ **Health Records** (6 medical documents) ⭐ NEW  
✅ **Favorite Doctors** (3 saved doctors) ⭐ NEW  
✅ **Notifications** (7 alerts, 3 unread) ⭐ NEW  
✅ **Settings** with theme, account, support ⭐ NEW  
✅ **Enhanced Headers** (48px buttons, 32px titles, 3D depth) ⭐ NEW  
✅ **Logout Function** (2 locations: Profile & Settings) ⭐ NEW  
✅ Bottom navigation with active states  
✅ 3D button effects on all interactions  
✅ Hospital background imagery  
✅ Parallax depth effects  
✅ Mobile-first responsive design  
✅ Safe area support for notched devices  
✅ Smooth animations and transitions  
✅ Touch-optimized interactions  
✅ PWA ready with manifest  
✅ Complete Profile menu navigation flow  

## 🎯 Next Steps

- [ ] Add real appointment booking backend
- [ ] Integrate video call functionality
- [ ] Connect to health records API
- [ ] Add payment processing
- [ ] Implement notifications
- [ ] Add dark mode toggle
- [ ] Create additional specialty screens
- [ ] Add symptom checker
- [ ] Implement health tracking
- [ ] Add prescription management

## 📄 License

MIT License - Feel free to use for your projects!

## 🙏 Credits

- Images: [Unsplash](https://unsplash.com)
- Icons: [Lucide React](https://lucide.dev)
- Inspiration: Vitalit & Healix Framer

---

**Built with ❤️ for modern healthcare**
