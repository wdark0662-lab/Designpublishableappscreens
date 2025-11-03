# 📱 Guia de Benefícios - Versão Expo/React Native

## 🚨 IMPORTANTE: Diferenças entre Web e Expo

Este aplicativo foi originalmente desenvolvido como uma **aplicação web React**. Para usar no Expo/React Native, você precisa fazer conversões significativas.

## 🎯 Início Rápido para Expo

### 1. Criar novo projeto Expo

```bash
npx create-expo-app guia-de-beneficios
cd guia-de-beneficios
```

### 2. Instalar dependências

```bash
# AsyncStorage (substitui localStorage)
npx expo install @react-native-async-storage/async-storage

# Ícones
npx expo install @expo/vector-icons

# Safe Area
npx expo install react-native-safe-area-context

# Gradientes
npx expo install expo-linear-gradient

# SVG (para ícones personalizados)
npx expo install react-native-svg

# Navegação (opcional, mas recomendado)
npx expo install @react-navigation/native @react-navigation/bottom-tabs @react-navigation/drawer
npx expo install react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated
```

### 3. Estrutura de pastas

```
guia-de-beneficios/
├── App.tsx                          # Arquivo principal (use expo-version/App.tsx)
├── app.json                         # Configuração do Expo
├── package.json                     # Dependências (use expo-version/package.json)
├── src/
│   ├── screens/
│   │   ├── WelcomeScreen.tsx       # Converta da versão web
│   │   ├── LoginScreen.tsx         # Converta da versão web
│   │   ├── SignUpScreen.tsx        # Converta da versão web
│   │   ├── MainApp.tsx             # Use expo-version/MainApp.tsx
│   │   ├── HomeScreen.tsx          # Converta da versão web
│   │   ├── GuideScreen.tsx         # Converta da versão web
│   │   ├── EligibilityScreen.tsx   # Converta da versão web
│   │   ├── CalculatorScreen.tsx    # Converta da versão web
│   │   ├── FAQScreen.tsx           # Converta da versão web
│   │   ├── ProfileScreen.tsx       # Converta da versão web
│   │   └── SettingsScreen.tsx      # Converta da versão web
│   ├── components/
│   │   └── AppIcon.tsx             # Converta para usar react-native-svg
│   ├── theme/
│   │   └── colors.ts               # Sistema de cores
│   └── utils/
│       └── storage.ts              # Helpers para AsyncStorage
└── assets/
    └── icon.png                     # Ícone do app
```

## 🔄 Guia de Conversão Rápida

### Conversões Básicas

#### 1. Elementos HTML → React Native

```tsx
// ❌ WEB (NÃO FUNCIONA NO EXPO)
<div style={{ flex: 1 }}>
  <p>Texto</p>
  <button onClick={handleClick}>Botão</button>
</div>

// ✅ EXPO (CORRETO)
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

<View style={styles.container}>
  <Text>Texto</Text>
  <TouchableOpacity onPress={handleClick}>
    <Text>Botão</Text>
  </TouchableOpacity>
</View>

const styles = StyleSheet.create({
  container: { flex: 1 }
});
```

#### 2. Ícones

```tsx
// ❌ WEB
import { Home, User, Settings } from 'lucide-react';
<Home size={24} />

// ✅ EXPO
import { Ionicons } from '@expo/vector-icons';
<Ionicons name="home-outline" size={24} />
```

**Mapeamento de Ícones:**
- `Home` → `home-outline`
- `Book` → `book-outline`
- `ShieldCheck` → `shield-checkmark-outline`
- `Calculator` → `calculator-outline`
- `HelpCircle` → `help-circle-outline`
- `User` → `person-outline`
- `Settings` → `settings-outline`
- `LogOut` → `log-out-outline`
- `Sun` → `sunny-outline`
- `Moon` → `moon-outline`
- `Mail` → `mail-outline`
- `Lock` → `lock-closed-outline`
- `Eye` → `eye-outline`
- `EyeOff` → `eye-off-outline`

#### 3. Estilos

```tsx
// ❌ WEB (inline styles com hover)
<button 
  style={{ backgroundColor: '#3b82f6' }}
  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#2563eb'}
>

// ✅ EXPO (Pressable com estados)
import { Pressable } from 'react-native';

<Pressable
  style={({ pressed }) => [
    styles.button,
    { backgroundColor: pressed ? '#2563eb' : '#3b82f6' }
  ]}
>
```

#### 4. Storage

```tsx
// ❌ WEB
localStorage.setItem('key', 'value');
const value = localStorage.getItem('key');
localStorage.removeItem('key');

// ✅ EXPO
import AsyncStorage from '@react-native-async-storage/async-storage';

await AsyncStorage.setItem('key', 'value');
const value = await AsyncStorage.getItem('key');
await AsyncStorage.removeItem('key');
```

#### 5. Gradientes

```tsx
// ❌ WEB
<div style={{ 
  background: 'linear-gradient(135deg, #3b82f6, #2563eb)' 
}}>

// ✅ EXPO
import { LinearGradient } from 'expo-linear-gradient';

<LinearGradient
  colors={['#3b82f6', '#2563eb']}
  start={{ x: 0, y: 0 }}
  end={{ x: 1, y: 1 }}
  style={styles.gradient}
>
```

#### 6. ScrollView

```tsx
// ❌ WEB
<div style={{ overflowY: 'auto' }}>

// ✅ EXPO
import { ScrollView } from 'react-native';

<ScrollView>
  {/* conteúdo */}
</ScrollView>
```

#### 7. Input de Texto

```tsx
// ❌ WEB
<input 
  type="text"
  value={value}
  onChange={(e) => setValue(e.target.value)}
  placeholder="Digite..."
/>

// ✅ EXPO
import { TextInput } from 'react-native';

<TextInput
  value={value}
  onChangeText={setValue}
  placeholder="Digite..."
  style={styles.input}
/>
```

## 📝 Exemplo Completo: Convertendo WelcomeScreen

### WEB (Original)
```tsx
export default function WelcomeScreen({ colors, onContinue }) {
  return (
    <div style={{ flex: 1, backgroundColor: colors.background }}>
      <h1>Bem-vindo</h1>
      <button onClick={onContinue}>Continuar</button>
    </div>
  );
}
```

### EXPO (Convertido)
```tsx
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function WelcomeScreen({ colors, onContinue }) {
  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={styles.title}>Bem-vindo</Text>
      <TouchableOpacity onPress={onContinue} style={styles.button}>
        <Text style={styles.buttonText}>Continuar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
  },
  button: {
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#3b82f6',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
```

## 🎨 Sistema de Cores (colors.ts)

```typescript
export const lightColors = {
  background: '#f9fafb',
  surface: '#ffffff',
  surfaceLight: '#f3f4f6',
  border: '#e5e7eb',
  text: '#111827',
  textSecondary: '#6b7280',
  primary: '#3b82f6',
  primaryDark: '#2563eb',
  green: '#22c55e',
};

export const darkColors = {
  background: '#030712',
  surface: '#111827',
  surfaceLight: '#1f2937',
  border: '#374151',
  text: '#f9fafb',
  textSecondary: '#9ca3af',
  primary: '#3b82f6',
  primaryDark: '#2563eb',
  green: '#22c55e',
};
```

## 🚀 Executando o App

```bash
# Iniciar servidor de desenvolvimento
npm start

# Rodar no Android
npm run android

# Rodar no iOS
npm run ios

# Rodar na Web (limitado)
npm run web
```

## ⚠️ Limitações e Diferenças

### Não Disponível em React Native:
- ❌ `onMouseEnter` / `onMouseLeave` → Use `Pressable` com estados
- ❌ `localStorage` → Use `AsyncStorage`
- ❌ `<div>`, `<span>`, `<p>`, `<button>` → Use componentes React Native
- ❌ CSS classes → Use `StyleSheet`
- ❌ `window` object → Limitado
- ❌ DOM APIs → Não existe

### Diferente em React Native:
- ⚠️ Estilos inline vs StyleSheet
- ⚠️ Flexbox (padrão: column no RN vs row na web)
- ⚠️ Scroll (precisa de ScrollView explícito)
- ⚠️ Navegação (use React Navigation)
- ⚠️ Fonts (precisam ser carregadas)

## 📚 Recursos Úteis

- [React Native Docs](https://reactnative.dev/)
- [Expo Docs](https://docs.expo.dev/)
- [React Navigation](https://reactnavigation.org/)
- [Ionicons](https://ionic.io/ionicons)
- [Expo Vector Icons](https://icons.expo.fyi/)

## 🆘 Precisa de Ajuda?

Se você quer que eu converta **TODOS** os componentes para React Native/Expo, me avise! Posso criar:

1. ✅ Todos os screens convertidos
2. ✅ Sistema de navegação completo
3. ✅ Componentes reutilizáveis
4. ✅ Tema com dark mode
5. ✅ Storage utilities
6. ✅ Configuração completa do Expo

**Basta me pedir!** 🎉
