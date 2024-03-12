import { View, Text, StatusBar } from "react-native";
import { NavigationContainer } from '@react-navigation/native'

import { Routes } from './src/routes'
import { AuthProvider } from './src/contexts/auth'

export function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar
          backgroundColor={'#FFF'}
          barStyle="dark-content"
        />
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  )
}