# 🚪 Logout Feature Documentation

## Overview
The Healix app now has a complete logout functionality that clears user data and returns to the Welcome screen.

---

## 🎯 Where to Find Logout

### 1. Profile Screen (Quick Access)
**Location:** Profile → Red Logout Button (bottom)

**Visual:**
- Large red gradient button
- LogOut icon + "Logout" text
- 3D press effect
- Located after all menu items

**Features:**
- ✅ Red gradient background (#ef4444 to #dc2626)
- ✅ White text and icon
- ✅ 3D shadow depth
- ✅ Press animation (moves down 3px)
- ✅ Touch-optimized

### 2. Settings Screen (Standard Location)
**Location:** Profile → Settings → Red Logout Button (bottom)

**Visual:**
- Red outline button
- LogOut icon + "Logout" text
- 3D press effect
- Located after App Info card

**Features:**
- ✅ Red border (2px solid #ef4444)
- ✅ Red text and icon
- ✅ Adapts to theme (background changes with dark/light mode)
- ✅ Press animation (moves down 2px)
- ✅ Touch-optimized

---

## 🔧 How Logout Works

### User Flow:
```
1. User clicks Logout button
   ↓
2. handleLogout() is called
   ↓
3. User data is cleared:
   - userName set to empty string
   - localStorage 'healix-user-data' removed
   ↓
4. Navigate to Welcome screen
   ↓
5. User can sign in again
```

### Technical Implementation:

```typescript
const handleLogout = () => {
  // Clear user data from state
  setUserName('');
  
  // Navigate to welcome screen
  setCurrentScreen('welcome');
  
  // Clear any stored data from localStorage
  localStorage.removeItem('healix-user-data');
};
```

---

## 📱 Button Specifications

### Profile Screen Button:
```css
Style:
  - Width: 100%
  - Padding: 18px
  - Border Radius: 18px
  - Background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%)
  - Color: #fff
  - Font Size: 16px
  - Font Weight: 600
  - Shadow: 0 8px 24px rgba(239, 68, 68, 0.3), inset 0 -3px 0 rgba(0, 0, 0, 0.2)

Press Effect:
  - Transform: translateY(3px)
  - Shadow: 0 4px 12px rgba(239, 68, 68, 0.2), inset 0 -1px 0 rgba(0, 0, 0, 0.2)
```

### Settings Screen Button:
```css
Style:
  - Width: 100%
  - Padding: 18px
  - Border Radius: 18px
  - Border: 2px solid #ef4444
  - Background: Card background (theme-aware)
  - Color: #ef4444
  - Font Size: 16px
  - Font Weight: 700
  - Shadow: 0 4px 16px rgba(239, 68, 68, 0.2), inset 0 -2px 0 rgba(239, 68, 68, 0.15)

Press Effect:
  - Transform: translateY(2px)
  - Shadow: 0 2px 8px rgba(239, 68, 68, 0.2), inset 0 -1px 0 rgba(239, 68, 68, 0.15)
```

---

## ✨ Features

### Data Clearing:
✅ **User Name**: Reset to empty string  
✅ **Navigation State**: Return to welcome  
✅ **LocalStorage**: Cleared (healix-user-data)  
✅ **Theme**: Preserved (stays in localStorage)  

### Security:
✅ **Complete Logout**: All user data removed  
✅ **Session Reset**: Fresh start on next login  
✅ **No Data Persistence**: User must re-enter name  

### UX Features:
✅ **Visual Feedback**: 3D press animation  
✅ **Clear Action**: Red color indicates logout  
✅ **Icon + Text**: LogOut icon for clarity  
✅ **Accessible**: Large touch target (minimum 44px)  
✅ **Touch-Optimized**: Works on mobile and desktop  

---

## 🎨 Theme Adaptation

### Light Mode:
- **Profile Button**: Red gradient (same)
- **Settings Button**: White background, red text/border

### Dark Mode:
- **Profile Button**: Red gradient (same)
- **Settings Button**: Dark card background (#1e293b), red text/border

---

## 🔄 User Journey Examples

### Scenario 1: Quick Logout from Profile
```
Home → Profile → Click Logout
  ↓
Welcome Screen (ready for new user)
```

### Scenario 2: Logout from Settings
```
Home → Profile → Settings → Click Logout
  ↓
Welcome Screen (ready for new user)
```

### Scenario 3: Re-login After Logout
```
Welcome Screen → Enter Name → Get Started
  ↓
Home Screen (fresh session)
```

---

## 💡 Why Two Logout Buttons?

### Profile Screen Button:
- **Quick Access**: One click from profile
- **Common Location**: Users expect logout in profile
- **Visual Impact**: Red gradient stands out
- **Convenience**: Don't need to go to settings

### Settings Screen Button:
- **Standard Pattern**: Traditional location for logout
- **Settings Context**: Users check settings before logout
- **Theme-Aware**: Adapts to dark/light mode
- **Professional**: Standard app pattern

---

## 🚀 Future Enhancements

### Planned Features:
- [ ] Logout Confirmation Dialog
  - "Are you sure you want to logout?"
  - Yes/No buttons
  - Prevent accidental logouts

- [ ] Remember Me Option
  - Checkbox on Welcome screen
  - Keep user logged in
  - Auto-login on return

- [ ] Logout History
  - Track logout timestamps
  - Last logout date display
  - Session duration tracking

- [ ] Multi-Account Support
  - Switch between accounts
  - Add/remove accounts
  - Account switcher

- [ ] Auto Logout
  - Timeout after inactivity
  - Security feature
  - Configurable duration

---

## 🐛 Troubleshooting

### Issue: Logout doesn't work
**Solution:** Check if onLogout prop is passed to both ProfileScreen and SettingsScreen

### Issue: User data persists after logout
**Solution:** Verify localStorage.removeItem('healix-user-data') is called

### Issue: Theme resets on logout
**Solution:** Theme uses separate localStorage key ('healix-theme') and should persist

### Issue: Button doesn't animate
**Solution:** Check touch events (onMouseDown, onMouseUp, onTouchStart, onTouchEnd)

---

## 📊 Statistics

### Implementation:
- **Files Modified**: 3 (App.tsx, ProfileScreen.tsx, SettingsScreen.tsx)
- **Logout Locations**: 2 (Profile, Settings)
- **Data Cleared**: 2 items (userName, localStorage)
- **Navigation Change**: 1 (welcome screen)
- **Animation Depth**: 2px-3px press

### Code:
- **Function**: handleLogout()
- **Lines of Code**: ~7 lines
- **Props Added**: 2 (onLogout to Profile & Settings)
- **Touch Events**: 4 per button (down/up for mouse and touch)

---

## ✅ Testing Checklist

### Functionality:
- [ ] Click logout in Profile screen
- [ ] Verify navigation to Welcome screen
- [ ] Verify userName is cleared
- [ ] Verify localStorage is cleared
- [ ] Can re-login with new name
- [ ] Theme persists after logout
- [ ] Click logout in Settings screen
- [ ] Same behavior as Profile logout

### Visual:
- [ ] Profile button has red gradient
- [ ] Settings button has red outline
- [ ] 3D press animation works
- [ ] Icon displays correctly
- [ ] Text is readable

### Mobile:
- [ ] Touch works on mobile
- [ ] Button size adequate (44px+)
- [ ] Press animation on touch
- [ ] No tap highlight flash
- [ ] Works on iOS and Android

---

## 🎯 Best Practices

### For Users:
1. ✅ Always logout when done
2. ✅ Don't share your session
3. ✅ Re-enter name after logout
4. ✅ Check before clicking logout
5. ✅ Use Settings logout for safety

### For Developers:
1. ✅ Always clear sensitive data
2. ✅ Provide visual feedback
3. ✅ Use confirmation for destructive actions
4. ✅ Test logout flow thoroughly
5. ✅ Preserve theme preferences

---

**🔒 Secure logout implemented! Your data is safe with Healix! 💙**

---

Last Updated: November 1, 2025  
Version: 1.0.0  
Logout Locations: 2  
Data Cleared: Complete
