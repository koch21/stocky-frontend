import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// Screens
import Home from '../screens/Home'
import Stocks from '../screens/Stocks'
import Profile from '../screens/Profile'
import Notifications from '../screens/Notifications'

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
          backgroundColor: useColorScheme() === 'dark' ? themes.dark.colors.gray : themes.light.colors.gray,
          borderTopColor: 'transparent'
        },
        tabBarIcon: ({ focused }) => {
          let iconName: any

          switch (route.name) {
            case 'payment':
              iconName = 'wallet'
              break
            case 'Stocks':
              iconName = 'leaderboard'
              break
            case 'Home':
              iconName = 'home'
              break
            case 'Notifications':
              iconName = 'notifications'
              break
            case 'Profile':
              iconName = 'person'
              break
          }

          return (
            <Ionicons
              name={iconName}
              size={focused ? 22 : 18}
              color={
                useColorScheme() === 'dark'
                  ? focused
                    ? themes.dark.colors.secondary
                    : themes.dark.colors.lightGray
                  : focused
                  ? themes.light.colors.secondary
                  : themes.light.colors.lightGray
              }
            />
          )
        }
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Stocks" component={Stocks} />
      <Tab.Screen name="Notifications" component={Notifications} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  )
}

export default TabNavigator
