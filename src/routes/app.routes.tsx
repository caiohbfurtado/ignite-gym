import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from '@react-navigation/bottom-tabs'

import { Home } from '@screens/Home'
import { Exercise } from '@screens/Exercise'
import { History } from '@screens/History'
import { Profile } from '@screens/Profile'

import HomeIcon from '@assets/home.svg'
import ProfileIcon from '@assets/profile.svg'
import HistoryIcon from '@assets/history.svg'
import { useTheme } from 'native-base'
import { Platform } from 'react-native'

type AppRoutesProps = {
  Home: undefined
  History: undefined
  Profile: undefined
  Exercise: undefined
}

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutesProps>

const { Navigator, Screen } = createBottomTabNavigator<AppRoutesProps>()

export function AppRoutes() {
  const { sizes, colors } = useTheme()
  const iconSize = sizes[6]

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.green[500],
        tabBarInactiveTintColor: colors.gray[200],
        tabBarStyle: {
          backgroundColor: colors.gray[600],
          borderTopWidth: 0,
          height: Platform.OS === 'android' ? 'auto' : 96,
          paddingBottom: sizes[10],
          paddingTop: sizes[6],
        },
      }}
      initialRouteName="Exercise"
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <HomeIcon fill={color} height={iconSize} width={iconSize} />
          ),
        }}
      />
      <Screen
        name="History"
        component={History}
        options={{
          tabBarIcon: ({ color }) => (
            <HistoryIcon fill={color} height={iconSize} width={iconSize} />
          ),
        }}
      />
      <Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <ProfileIcon fill={color} height={iconSize} width={iconSize} />
          ),
        }}
      />
      <Screen
        name="Exercise"
        component={Exercise}
        options={{ tabBarButton: () => null }}
      />
    </Navigator>
  )
}
