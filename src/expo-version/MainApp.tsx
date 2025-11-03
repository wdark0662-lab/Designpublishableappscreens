/**
 * VERSÃO REACT NATIVE/EXPO do MainApp
 * 
 * Para usar este arquivo:
 * 1. Crie um novo projeto Expo
 * 2. Instale as dependências necessárias (veja EXPO_CONVERSION_GUIDE.md)
 * 3. Substitua as importações dos screens pelos equivalentes em React Native
 */

import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Modal,
  Pressable,
  Animated,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Você precisará criar versões React Native destes screens
import HomeScreen from '../screens/HomeScreen';
import GuideScreen from '../screens/GuideScreen';
import EligibilityScreen from '../screens/EligibilityScreen';
import CalculatorScreen from '../screens/CalculatorScreen';
import FAQScreen from '../screens/FAQScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';

type Screen = 'home' | 'guide' | 'eligibility' | 'calculator' | 'faq' | 'profile' | 'settings';

interface MainAppProps {
  colors: any;
  darkMode: boolean;
  onToggleDarkMode: () => void;
  onLogout: () => void;
}

export default function MainApp({ colors, darkMode, onToggleDarkMode, onLogout }: MainAppProps) {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');
  const [showMenu, setShowMenu] = useState(false);

  const navigation = [
    { id: 'home' as Screen, label: 'Início', icon: 'home-outline' },
    { id: 'guide' as Screen, label: 'Guia', icon: 'book-outline' },
    { id: 'eligibility' as Screen, label: 'Verificar', icon: 'shield-checkmark-outline' },
    { id: 'calculator' as Screen, label: 'Calcular', icon: 'calculator-outline' },
    { id: 'faq' as Screen, label: 'FAQ', icon: 'help-circle-outline' },
  ];

  const renderScreen = () => {
    const screenProps = { colors };
    switch (currentScreen) {
      case 'home':
        return <HomeScreen {...screenProps} onNavigate={(screen: string) => setCurrentScreen(screen as Screen)} />;
      case 'guide':
        return <GuideScreen {...screenProps} />;
      case 'eligibility':
        return <EligibilityScreen {...screenProps} />;
      case 'calculator':
        return <CalculatorScreen {...screenProps} />;
      case 'faq':
        return <FAQScreen {...screenProps} />;
      case 'profile':
        return <ProfileScreen {...screenProps} />;
      case 'settings':
        return <SettingsScreen {...screenProps} darkMode={darkMode} onToggleDarkMode={onToggleDarkMode} />;
      default:
        return <HomeScreen {...screenProps} onNavigate={(screen: string) => setCurrentScreen(screen as Screen)} />;
    }
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      {/* Top App Bar */}
      <View style={[styles.topBar, { backgroundColor: colors.surface, borderBottomColor: colors.border }]}>
        <Text style={[styles.topBarTitle, { color: colors.text }]}>Guia de Benefícios</Text>
        <View style={styles.topBarActions}>
          <TouchableOpacity
            onPress={onToggleDarkMode}
            style={styles.iconButton}
            activeOpacity={0.7}
          >
            <Ionicons
              name={darkMode ? 'sunny-outline' : 'moon-outline'}
              size={20}
              color={colors.textSecondary}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setShowMenu(true)}
            style={styles.iconButton}
            activeOpacity={0.7}
          >
            <Ionicons name="person-outline" size={20} color={colors.textSecondary} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        {renderScreen()}
      </View>

      {/* Bottom Navigation */}
      <View style={[styles.bottomNav, { backgroundColor: colors.surface, borderTopColor: colors.border }]}>
        {navigation.map((item) => {
          const isActive = currentScreen === item.id;
          return (
            <TouchableOpacity
              key={item.id}
              onPress={() => setCurrentScreen(item.id)}
              style={styles.navButton}
              activeOpacity={0.7}
            >
              <Ionicons
                name={item.icon as any}
                size={24}
                color={isActive ? colors.primary : colors.textSecondary}
              />
              <Text
                style={[
                  styles.navLabel,
                  { color: isActive ? colors.primary : colors.textSecondary }
                ]}
              >
                {item.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Side Menu Modal */}
      <Modal
        visible={showMenu}
        transparent
        animationType="fade"
        onRequestClose={() => setShowMenu(false)}
      >
        <Pressable
          style={styles.menuOverlay}
          onPress={() => setShowMenu(false)}
        >
          <Pressable style={[styles.menuDrawer, { backgroundColor: colors.surface }]}>
            <View style={[styles.menuHeader, { borderBottomColor: colors.border }]}>
              <Text style={[styles.menuHeaderTitle, { color: colors.text }]}>Menu</Text>
              <Text style={[styles.menuHeaderSubtitle, { color: colors.textSecondary }]}>
                usuario@exemplo.com
              </Text>
            </View>

            <View style={styles.menuContent}>
              <TouchableOpacity
                style={styles.menuItem}
                onPress={() => {
                  setShowMenu(false);
                  setCurrentScreen('profile');
                }}
                activeOpacity={0.7}
              >
                <Ionicons name="person-outline" size={20} color={colors.text} />
                <Text style={[styles.menuText, { color: colors.text }]}>Perfil</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.menuItem}
                onPress={() => {
                  setShowMenu(false);
                  setCurrentScreen('settings');
                }}
                activeOpacity={0.7}
              >
                <Ionicons name="settings-outline" size={20} color={colors.text} />
                <Text style={[styles.menuText, { color: colors.text }]}>Configurações</Text>
              </TouchableOpacity>

              <View style={[styles.menuDivider, { backgroundColor: colors.border }]} />

              <TouchableOpacity
                style={styles.menuItem}
                onPress={() => {
                  setShowMenu(false);
                  onLogout();
                }}
                activeOpacity={0.7}
              >
                <Ionicons name="log-out-outline" size={20} color="#ef4444" />
                <Text style={[styles.menuText, { color: '#ef4444' }]}>Sair</Text>
              </TouchableOpacity>
            </View>
          </Pressable>
        </Pressable>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 56,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
  },
  topBarTitle: {
    fontSize: 18,
    fontWeight: '500',
  },
  topBarActions: {
    flexDirection: 'row',
    gap: 4,
  },
  iconButton: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  content: {
    flex: 1,
  },
  bottomNav: {
    flexDirection: 'row',
    height: 64,
    borderTopWidth: 1,
  },
  navButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
  },
  navLabel: {
    fontSize: 12,
    marginTop: 4,
  },
  menuOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  menuDrawer: {
    width: 280,
    height: '100%',
    shadowColor: '#000',
    shadowOffset: { width: -4, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    elevation: 16,
  },
  menuHeader: {
    padding: 24,
    borderBottomWidth: 1,
  },
  menuHeaderTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 4,
  },
  menuHeaderSubtitle: {
    fontSize: 14,
  },
  menuContent: {
    flex: 1,
    paddingVertical: 16,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    gap: 12,
  },
  menuText: {
    fontSize: 16,
  },
  menuDivider: {
    height: 1,
    marginVertical: 8,
    marginHorizontal: 20,
  },
});
