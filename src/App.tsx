import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { ActivityIndicator, useColorScheme } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

// Routes
import Routes from './routes/routes'

// Themes
import { ThemeProvider } from 'styled-components/native'
import themes from './styles/index'
import {
  useFonts,
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold
} from '@expo-google-fonts/inter'

const App = () => {
  // Dark Mode
  const colorScheme = useColorScheme()
  const [isDark, setIsDark] = useState(false)
  useEffect(() => {
    setIsDark(colorScheme === 'dark')
  }, [colorScheme])

  // setting expo fonts
  const [fontsLoaded] = useFonts({
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold
  })

  // if fonts are not loaded, show loading screen
  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#0084eb" />
  } else {
    return (
      <NavigationContainer>
        <ThemeProvider theme={isDark ? themes.dark : themes.light}>
          <StatusBar style={isDark ? 'light' : 'dark'} />
          <Routes />
        </ThemeProvider>
      </NavigationContainer>
    )
  }
}

export default App
