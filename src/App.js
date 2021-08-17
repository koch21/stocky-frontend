import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { useColorScheme } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

// Routes
import Routes from './routes/routes'

// Themes
import { ThemeProvider } from 'styled-components/native'
import themes from './styles/themes/index'
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold
} from '@expo-google-fonts/inter'

const App = () => {
  // Dark Mode
  const colorScheme = useColorScheme()
  const [isDark, setIsDark] = useState(true)
  useEffect(() => {
    setIsDark(colorScheme === 'dark')
  }, [colorScheme])

  // setting expo fonts
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold
  })

  return (
    <NavigationContainer>
      <ThemeProvider theme={isDark ? themes.dark : themes.light}>
        <StatusBar style="inverted" />
        <Routes />
      </ThemeProvider>
    </NavigationContainer>
  )
}

export default App
