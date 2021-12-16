import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

// screens
import Tab from './tab.routes'

function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="TabBar" component={Tab} />
    </Stack.Navigator>
  )
}

export default Routes
