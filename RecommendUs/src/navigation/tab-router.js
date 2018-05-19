import {
    TabNavigator,
    TabBarBottom,
} from 'react-navigation'

import HomeNavigator from 'navigation/home'
import NotificationNavigator from 'navigation/notifications'


import device from 'properties/device'

// Showcase de telas
const root = TabNavigator (
  {
    home: {
      screen: HomeNavigator
    },
    notifications: {
      screen: NotificationNavigator
    },
  },
  {
    // Configurações do TabNavigator

    tabBarPosition: 'bottom',
    tabBarComponent: TabBarBottom,
    tabBarOptions: {
      showLabel: false,
      showIcon: true,
      
      activeTintColor: '#FF6145',
      inactiveTintColor: 'gray',

      style: {
        backgroundColor: '#FFFFFF',
      },
    },
  }
)

export default root