import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// Screens
import Home from '../screens/home'

// Themes
import themes from '../styles/index'
import { Ionicons } from '@expo/vector-icons'
import { useColorScheme } from 'react-native'

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 0
        },
        tabBarStyle: {
          backgroundColor: useColorScheme() === 'dark' ? themes.dark.colors.grey : themes.light.colors.grey,
          borderTopColor: 'transparent'
        },
        tabBarIcon: ({ focused }) => {
          let iconName: any

          switch (route.name) {
            case 'Home':
              iconName = 'home'
          }

          return (
            <Ionicons
              name={iconName}
              size={focused ? 22 : 18}
              color={
                useColorScheme() === 'dark'
                  ? focused
                    ? themes.dark.colors.secondary
                    : themes.dark.colors.lightGrey
                  : focused
                  ? themes.light.colors.secondary
                  : themes.light.colors.lightGrey
              }
            />
          )
        }
      })}
    >
      <Tab.Screen name="Home" component={Home} />
    </Tab.Navigator>
  )
}

export default TabNavigator
